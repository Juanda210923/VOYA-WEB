//catalofo con los datos y id correspondiente:
const DESTINOS = {
  madrid: {
    id: 'madrid',
    ciudad: 'Madrid',
    pais: 'España',
    paisApi: 'Spain',
    cca2: 'es',
    wiki: 'Madrid',
    imagen: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85',
    intro: 'Historia, arquitectura y cultura en uno de los destinos más visitados de Europa.',
    sobre: 'Descubre la historia y los espacios monumentales de Madrid. Esta ficha sirve como ejemplo de cómo VOYA puede organizar información útil antes de una visita.'
  },
  cartagena: {
    id: 'cartagena',
    ciudad: 'Cartagena',
    pais: 'Colombia',
    paisApi: 'Colombia',
    cca2: 'co',
    wiki: 'Cartagena de Indias',
    imagen: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    intro: 'Calles coloridas, arquitectura colonial y paisajes junto al mar Caribe.',
    sobre: 'Una ciudad amurallada con mucha historia frente al mar. Esta ficha muestra cómo VOYA reúne información útil antes de viajar.'
  },
  paris: {
    id: 'paris',
    ciudad: 'París',
    pais: 'Francia',
    paisApi: 'France',
    cca2: 'fr',
    wiki: 'París',
    imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85',
    intro: 'Una ciudad icónica con museos, monumentos y cafés encantadores.',
    sobre: 'Arte, gastronomía y monumentos reconocidos en todo el mundo. Esta ficha muestra cómo VOYA organiza la información de un destino.'
  },
  roma: {
    id: 'roma',
    ciudad: 'Roma',
    pais: 'Italia',
    paisApi: 'Italy',
    cca2: 'it',
    wiki: 'Roma',
    imagen: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85',
    intro: 'Ruinas antiguas, plazas y una tradición gastronómica reconocida.',
    sobre: 'Una ciudad donde la historia antigua convive con la vida moderna. Esta ficha es un ejemplo de la información que VOYA puede ofrecer.'
  },
  'ciudad-de-mexico': {
    id: 'ciudad-de-mexico',
    ciudad: 'Ciudad de México',
    pais: 'México',
    paisApi: 'Mexico',
    cca2: 'mx',
    wiki: 'Ciudad de México',
    imagen: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
    intro: 'Museos, barrios llenos de vida y una gastronomía diversa.',
    sobre: 'Una capital enorme con cultura, museos y sabores únicos. Esta ficha muestra cómo VOYA presenta la información de cada destino.'
  },
  tokio: {
    id: 'tokio',
    ciudad: 'Tokio',
    pais: 'Japón',
    paisApi: 'Japan',
    cca2: 'jp',
    wiki: 'Tokio',
    imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
    intro: 'Una combinación fascinante de cultura, diseño y vida urbana.',
    sobre: 'Tradición y tecnología conviven en una de las ciudades más grandes del mundo. Esta ficha es un ejemplo de cómo VOYA organiza la información.'
  }
};
