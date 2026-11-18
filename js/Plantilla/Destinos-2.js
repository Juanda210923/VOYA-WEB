// Catálogo de respaldo:
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
    sobre: 'Descubre la historia y los espacios monumentales de Madrid.'
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
    sobre: 'Una ciudad amurallada con mucha historia frente al mar.'
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
    sobre: 'Arte, gastronomía y monumentos reconocidos en todo el mundo.'
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
    sobre: 'Una ciudad donde la historia antigua convive con la vida moderna.'
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
    sobre: 'Una capital enorme con cultura, museos y sabores únicos.'
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
    sobre: 'Tradición y tecnología conviven en una de las ciudades más grandes del mundo.'
  },
  
   moscu: {
    id: 'moscu',
    ciudad: 'Moscú',
    pais: 'Rusia',
    paisApi: 'Russia',
    cca2: 'ru',
    wiki: 'Moscú',
    imagen: 'https://static.wixstatic.com/media/7d15b6_855e18c40cb34a4ebcb40eb3475f30d8~mv2.jpg/v1/fill/w_568,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7d15b6_855e18c40cb34a4ebcb40eb3475f30d8~mv2.jpg',
    intro: 'Catedrales históricas, plazas monumentales y una rica herencia cultural.',
    sobre: 'Explora la Plaza Roja, el Kremlin y la arquitectura única de la capital rusa.'
  },
  
  'rio-de-janeiro' : {
    id: 'rio-de-janeiro',
    ciudad: 'Río de Janeiro',
    pais: 'Brasil',
    paisApi: 'Brazil',
    cca2: 'br',
    wiki: 'Río de Janeiro',
    imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e4/12/c9/visao-privilegiada.jpg?w=600&h=400&s=1',
    intro: 'Playas famosas, montañas verdes y el ritmo vibrante de Sudamérica.',
    sobre: 'Conoce el Cristo Redentor, Copacabana y los paisajes naturales de Río. Información esencial organizada para tu próximo viaje.'
  },
  
  toronto: {
    id: 'toronto',
    ciudad: 'Toronto',
    pais: 'Canadá',
    paisApi: 'Canada',
    cca2: 'ca',
    wiki: 'Toronto',
    imagen: 'https://pohcdn.com/sites/default/files/styles/big_gallery_image/public/text_gallery/Toronto-4.jpg',
    intro: 'Modernidad, diversidad cultural y vistas impresionantes junto al lago Ontario.',
    sobre: 'Descubre la Torre CN, sus barrios multiculturales y su cercanía a las Cataratas del Niágara.'
  },
  
  londres: {
    id: 'londres',
    ciudad: 'Londres',
    pais: 'Reino Unido',
    paisApi: 'United Kingdom',
    cca2: 'gb',
    wiki: 'Londres',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XDBjafBVJ1-Vh9rUk7bLckMRKQasYrjxCYK1T3MMw7vES4A_yuS8a96W&s=10',
    intro: 'Historia real, museos gratuitos y arquitectura moderna a orillas del Támesis.',
    sobre: 'Recorre el Big Ben, el Puente de la Torre y los parques reales en una de las capitales más influyentes del mundo.'
  }

};
