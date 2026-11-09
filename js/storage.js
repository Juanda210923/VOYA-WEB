//Manejo centralizado de localStorage

const FAVORITES_KEY = 'voya_favorites';

//Obtiene la lista de favoritos desde localStorage:
 
export function getFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer localStorage:', error);
    return []; //Retorna un arreglo vacío si no hay datos o si ocurre un error.
  }
}

// Guarda el arreglo de favoritos en localStorage (@param {Array} favorites):
 
export function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error al guardar en localStorage:', error);
  }
}
