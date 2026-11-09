// almacenamiento de archivos/Favoritos:

import { getFavorites, saveFavorites } from './storage.js';

/**
 * Agrega un lugar/destino a la lista de favoritos.
 * Evita guardar elementos duplicados comprobando el 'id'.
 * @param {Object} item - Objeto con la información del lugar (id, title, etc.)
 */
export function addFavorite(item) {
  if (!item || !item.id) return;
  
  const favorites = getFavorites();
  const exists = favorites.some(fav => fav.id === item.id);
  
  if (!exists) {
    favorites.push(item);
    saveFavorites(favorites);
  }
}

//Elimina un lugar de la lista de favoritos usando su 'id', 
// @param {string|number} id :
 
export function removeFavorite(id) {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.id !== id);
  saveFavorites(favorites);
  
  // Si estamos en la vista de favoritos, actualiza la pantalla
  renderFavorites();
}

//Muestra los favoritos en el contenedor de favoritos.html.
export function renderFavorites() {
  const container = document.getElementById('favorites-container');
  if (!container) return; // Si la página actual no tiene el contenedor, se omite

  const favorites = getFavorites();

  // Estado vacío: cuando no hay ítems guardados
  if (favorites.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Aún no tienes lugares guardados en tu itinerario.</p>
        <a href="index.html" class="btn">Explorar destinos</a>
      </div>
    `;
    return;
  }

  // Estado con contenido: renderiza las tarjetas
  container.innerHTML = favorites.map(item => `
    <div class="card-favorite" data-id="${item.id}">
      <img src="${item.image || 'placeholder.jpg'}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
      <button onclick="removeFavorite('${item.id}')" class="btn-remove">Eliminar</button>
    </div>
  `).join('');
}
