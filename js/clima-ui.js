// Traducion de  (estándar WMO) a emoji y texto:
function describirClima(codigo) {
  if (codigo === 0) return { icono: '☀️', texto: 'Despejado' };
  if (codigo === 1) return { icono: '🌤️', texto: 'Mayormente despejado' };
  if (codigo === 2) return { icono: '⛅', texto: 'Parcialmente nublado' };
  if (codigo === 3) return { icono: '☁️', texto: 'Nublado' };
  if (codigo === 45 || codigo === 48) return { icono: '🌫️', texto: 'Niebla' };
  if (codigo >= 51 && codigo <= 57) return { icono: '🌦️', texto: 'Llovizna' };
  if (codigo >= 61 && codigo <= 67) return { icono: '🌧️', texto: 'Lluvia' };
  if (codigo >= 71 && codigo <= 77) return { icono: '❄️', texto: 'Nieve' };
  if (codigo >= 80 && codigo <= 82) return { icono: '🌦️', texto: 'Chubascos' };
  if (codigo === 85 || codigo === 86) return { icono: '🌨️', texto: 'Chubascos de nieve' };
  if (codigo >= 95) return { icono: '⛈️', texto: 'Tormenta' };
  return { icono: '🌡️', texto: 'Sin datos' };
}

// "2026-11-08" -> "dom". El primer día se muestra como "Hoy".
function nombreDia(fecha, posicion) {
  if (posicion === 0) return 'Hoy';
  return new Date(fecha + 'T00:00:00')
    .toLocaleDateString('es', { weekday: 'short' });
}

function escribir(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.textContent = texto;
}

// Recibe el objeto de obtenerClima() y llena la página
function pintarClima(clima) {
  escribir('weather-temp', clima.temperatura + ' °C');
  escribir('weather-wind', clima.viento + ' km/h');
  escribir('weather-rain', clima.lluviaHoy + ' %');

  const contenedor = document.getElementById('weather-forecast');
  if (!contenedor) return;
  contenedor.innerHTML = '';

  clima.dias.forEach(function (dia, i) {
    const info = describirClima(dia.codigo);
    const tarjeta = document.createElement('div');
    tarjeta.className = 'forecast__day';
    tarjeta.innerHTML =
      '<span class="forecast__name">'
       + nombreDia(dia.fecha, i) + '</span>' +
      '<span class="forecast__icon" role="img" aria-label="' 
      + info.texto + '">' +
        info.icono + '</span>' +
      '<strong class="forecast__max">' 
      + dia.max + '°</strong>' +
      '<span class="forecast__min">'
      + dia.min + '°</span>';
    contenedor.appendChild(tarjeta);
  });
}