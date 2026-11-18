//lógica de guardar, quitar y dibujar (usa storage.js para localStorage):

import { getFavorites, saveFavorites } from './storage.js';



//validación de guardado:
export function isFavorite(id) {
  return getFavorites().some(fav => fav.id === id);
}


// Agrega un destino. Evita duplicados comprobando el (id):
export function addFavorite(item) {
  if (!item || !item.id) return;

  const favorites = getFavorites();
  if (!favorites.some(fav => fav.id === item.id)) {
    favorites.push(item);
    saveFavorites(favorites);
  }
}

// Elimina un destino por su (ID):
export function removeFavorite(id) {
  const favorites = getFavorites().filter(fav => fav.id !== id);
  saveFavorites(favorites);
  renderFavorites();
}

// Si estaba guardado lo quita o lo guarda:
export function toggleFavorite(item) {
  if (isFavorite(item.id)) {
    removeFavorite(item.id);
    return false;
  }
  addFavorite(item);
  return true;
}

// Dibuja las tarjetas en #favorites-container:
export function renderFavorites() {
  const container = document.getElementById('favorites-container');
  if (!container) return;

  const favorites = getFavorites();

  // programa de vacío:
  const vacio = document.getElementById('favorites-empty');
  if (vacio) vacio.hidden = favorites.length > 0;

  container.innerHTML = '';

  favorites.forEach(function (item) {
    // Se usa createElement + textContent.
    
    
    // guardado pueda inyectar HTML en la página.
    const tarjeta = document.createElement('article');
    tarjeta.className = 'destination-card';

    if (item.image) {
      const img = document.createElement('img');
      img.className = 'destination-card__image';
      img.src = item.image;
      img.alt = item.title;
      tarjeta.appendChild(img);
    }

    const cuerpo = document.createElement('div');
    cuerpo.className = 'destination-card__body';

    const fila = document.createElement('div');
    fila.className = 'card-row';
    const titulo = document.createElement('h3');
    titulo.textContent = item.title;
    const corazon = document.createElement('span');
    corazon.className = 'heart';
    corazon.setAttribute('aria-hidden', 'true');
    corazon.textContent = '♥';
    fila.append(titulo, corazon);

    const meta = document.createElement('p');
    meta.className = 'destination-card__meta';
    meta.textContent = item.description || '';

    const acciones = document.createElement('div');
    acciones.className = 'card-row';

    const ver = document.createElement('a');
    ver.className = 'btn btn--primary btn--small';
    ver.href = 'destino.html?id=' + encodeURIComponent(item.id);
    ver.textContent = 'Ver detalle →';

    const quitar = document.createElement('button');
    quitar.type = 'button';
    quitar.className = 'btn btn--outline btn--small';
    quitar.textContent = 'Quitar';
    quitar.setAttribute('aria-label', 'Quitar ' + item.title + ' de favoritos');
    quitar.addEventListener('click', function () {
      removeFavorite(item.id);
    });

    acciones.append(ver, quitar);
    cuerpo.append(fila, meta, acciones);
    tarjeta.appendChild(cuerpo);
    container.appendChild(tarjeta);
  });
}
