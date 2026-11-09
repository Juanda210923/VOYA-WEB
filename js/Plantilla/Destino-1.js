// Completa ficheros de plantilla:
(function () {

  // 1. Leer el ID de la URL. Ej.: destino.html?id=paris  ->  'paris'
  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id');
  
  //    para que la página nunca quede vacía.
  let destino = DESTINOS[id];
  if (!destino) {
    console.warn('Destino no encontrado: "' + id + '". Se muestra Madrid.');
    destino = DESTINOS.madrid;
  }

  //Funciones pequeñas para no repetir:
  function poner(idElemento, texto) {
    const el = document.getElementById(idElemento);
    if (el) el.textContent = texto;
  }

  function ponerAtributo(idElemento, atributo, valor) {
    const el = document.getElementById(idElemento);
    if (el) el.setAttribute(atributo, valor);
  }

  //Llenar la página:
  const titulo = destino.ciudad + ', ' + destino.pais;

  document.title = 'VOYA — ' + titulo;
  poner('crumb-name', destino.ciudad);
  poner('dest-name', titulo);
  poner('dest-intro', destino.intro);
  poner('dest-about', destino.sobre);
  poner('map-place', titulo);

  ponerAtributo('dest-flag', 'src', 'https://flagcdn.com/' + destino.cca2 + '.svg');
  ponerAtributo('dest-flag', 'alt', 'Bandera de ' + destino.pais);
  ponerAtributo('dest-image', 'src', destino.imagen);
  ponerAtributo('dest-image', 'alt', 'Vista de ' + destino.ciudad);

})();
