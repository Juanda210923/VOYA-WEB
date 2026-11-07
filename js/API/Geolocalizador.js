//API inicial:
const API_GEOCODIFICACION = 'https://nominatim.openstreetmap.org/search';

//esperar respuesta sin romper el bloque:
async function buscarCoordenadas(ciudad) {
  const url = API_GEOCODIFICACION +
    '?q=' + encodeURIComponent(ciudad) +
    '&format=json&limit=1&accept-language=es';
 /* encodeURIComponent(ciudad): convierte espacios y tildes en algo seguro para una URL */
 
 //respuesta:
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error('Error ' + respuesta.status);

  const resultados = await respuesta.json();
  if (resultados.length === 0) {
    throw new Error('No se encontró "' + ciudad + '"');
  }

//retorna:
  return {
    lat: Number(resultados[0].lat),
    lon: Number(resultados[0].lon),
    nombre: resultados[0].display_name
  };
}