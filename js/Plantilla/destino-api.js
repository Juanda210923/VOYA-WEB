// 1-REST Countries: datos del país.
// 2-Nominatim: coordenadas de la ciudad y mapa de OpenStreetMap.
// 3-Open-Meteo: clima y pronóstico.

(function () {

  // Mismo criterio que Destino-1.js: el id viene de la URL (destino.html?id=paris):
  const id = new URLSearchParams(window.location.search).get('id');
  const destino = DESTINOS[id] || DESTINOS.madrid;
  const titulo = destino.ciudad + ', ' + destino.pais;


  function poner(idElemento, texto) {
    const el = document.getElementById(idElemento);
    if (el) el.textContent = texto;
  }


  function estado(idElemento, texto, esError) {
    const el = document.getElementById(idElemento);
    if (!el) return;
    el.textContent = texto;
    el.classList.toggle('is-error', Boolean(esError));
  }

  // Caché de coordenadas: Nominatim pide no repetir consultas y limita a 1 por segundo.
  const CLAVE_CACHE = 'voya_coords_' + destino.id;

  function leerCache() {
    try {
      const guardado = localStorage.getItem(CLAVE_CACHE);
      return guardado ? JSON.parse(guardado) : null;
    } catch (e) { return null; }
  }

  function guardarCache(coords) {
    try { localStorage.setItem(CLAVE_CACHE, JSON.stringify(coords)); } catch (e) {/* sin caché, no pasa nada */}
  }


  async function coordenadasDelDestino() {
    const guardadas = leerCache();
    if (guardadas) return guardadas;
    // "Ciudad, País" evita ambigüedades (hay una Cartagena en España y otra en Colombia).
    const resultado = await buscarCoordenadas(destino.ciudad + ', ' + destino.pais);
    const coords = { lat: resultado.lat, lon: resultado.lon };
    guardarCache(coords);
    return coords;
  }

  // °Pintar en la página 
  function formatearCoordenadas(lat, lon) {
    return Math.abs(lat).toFixed(4) + '° ' + (lat >= 0 ? 'N' : 'S') + ', ' +
           Math.abs(lon).toFixed(4) + '° ' + (lon >= 0 ? 'E' : 'O');
  }


  function pintarPais(pais) {
    poner('dest-capital', pais.capital || '—');
    poner('dest-region', pais.region || '—');
    poner('dest-subregion', pais.subregion || '—');
    poner('dest-population', pais.poblacion != null ? pais.poblacion.toLocaleString('es-CO') : 'No disponible');
    poner('dest-languages', pais.idiomas || '—');
    poner('dest-currency', pais.moneda || '—');
  }


  function pintarMapa(coords) {
    const caja = document.getElementById('dest-map');
    if (!caja) return;

    // bbox = Recuadro visual que muestra el mapa:
    const margen = 0.05;
    const bbox = [coords.lon - margen, coords.lat - margen, coords.lon + margen, coords.lat + margen]
      .map(function (n) { return n.toFixed(4); }).join(',');

    const mapa = document.createElement('iframe');
    mapa.src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox +
               '&layer=mapnik&marker=' + coords.lat + ',' + coords.lon;
    mapa.title = 'Mapa de ' + titulo;
    mapa.loading = 'lazy';

    caja.replaceChildren(mapa);
    caja.removeAttribute('role'); //con un iframe dentro, role="img" ocultaría el mapa.
    caja.removeAttribute('aria-label'); //a los lectores de pantalla.
    
    // Las coordenadas van en la nota, porque el iframe reemplaza todo el contenido de la caja:
    poner('map-note', formatearCoordenadas(coords.lat, coords.lon) + ' · Mapa © colaboradores de OpenStreetMap.');
  }


  function mostrarCargandoClima() {
    poner('weather-temp', '…');
    poner('weather-wind', '…');
    poner('weather-rain', '…');
    const pronostico = document.getElementById('weather-forecast');
    if (pronostico) pronostico.textContent = 'Cargando pronóstico…';
    estado('weather-status', 'Consultando el clima actual…');
  }


  function mostrarErrorClima(mensaje) {
    poner('weather-temp', '—');
    poner('weather-wind', '—');
    poner('weather-rain', '—');
    const pronostico = document.getElementById('weather-forecast');
    if (pronostico) pronostico.textContent = '';
    estado('weather-status', mensaje, true);
  }

  // °Flujo principal:
  async function iniciar() {
    mostrarCargandoClima();

    // allSettled espera a que terminen las dos peticiones y NO se detiene si una falla.
    
    const [resPais, resCoords] = await Promise.allSettled([
      obtenerPais(destino.cca2),
      coordenadasDelDestino()
    ]);


    // #1 Datos del país
    let pais;
    if (resPais.status === 'fulfilled') {
      pais = resPais.value;
      estado('country-status', 'Datos: REST Countries.');
    } else {
      console.warn('REST Countries no disponible:', resPais.reason.message);
      if (resPais.reason.message === 'SIN_CLAVE') {
        console.info('Para datos reales, ingresa tu clave en js/config.js');
      }
      pais = PAISES_RESPALDO[destino.cca2];
      estado('country-status', 'Datos predeterminados del sistema','Acceso Rechazado del resto country');
    }
    if (pais) pintarPais(pais);


    // 2) Coordenadas: Nominatim -> tabla de respaldo de la ciudad -> capital del país.
    let coords = null;
    if (resCoords.status === 'fulfilled') {
      coords = resCoords.value;
    } else {
      console.warn('Nominatim no disponible:', resCoords.reason.message);
      coords = COORDENADAS_RESPALDO[destino.id] || null;
      
      if (!coords && resPais.status === 'fulfilled' && resPais.value.lat != null) {
        coords = { lat: resPais.value.lat, lon: resPais.value.lon };
      }
    }

    if (!coords) {
      mostrarErrorClima('No se pudo ubicar el destino para consultar el clima.');
      return;
    }
    pintarMapa(coords);


    // 3) Clima 
    try {
      const clima = await obtenerClima(coords.lat, coords.lon);
      pintarClima(clima);
      estado('weather-status', 'Datos: Open-Meteo.');
    } catch (error) {
      console.error('Open-Meteo falló:', error);
      mostrarErrorClima('No se pudo cargar el clima. Intente de nuevo más tarde.');
    }
  }

  iniciar();
})();
