//API inicial:
const API_CLIMA = 'https://api.open-meteo.com/v1/forecast';

//esperando respuesta:
async function obtenerClima(lat, lon) {
  const url = API_CLIMA +
    '?latitude=' 
    + lat +
    '&longitude=' 
    + lon + '&current=temperature_2m,wind_speed_10m,weather_code' 
  + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
    '&timezone=auto&forecast_days=5';
    
 //Respuesta: 
    const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error('Error del clima' + respuesta.status);
  
  //convertir la respuesta en archivo de json{en llaves}:
  const datos = await respuesta.json();
  
  
  // Ordenamos lo que nos interesa en un objeto simple
  const dias = datos.daily.time.map(function (fecha, i) {
    return {
      fecha: fecha,
      codigo: datos.daily.weather_code[i],
      max: Math.round(datos.daily.temperature_2m_max[i]),
      min: Math.round(datos.daily.temperature_2m_min[i]),
      lluvia: datos.daily.precipitation_probability_max[i]
    };
  });

//retorno:
  return {
    temperatura: Math.round(datos.current.temperature_2m),
    viento: Math.round(datos.current.wind_speed_10m),
    codigo: datos.current.weather_code,
    lluviaHoy: dias[0].lluvia,
    dias: dias
  };
}
    
    
    
