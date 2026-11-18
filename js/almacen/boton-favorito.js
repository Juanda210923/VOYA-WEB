// Conector para añadir a favoritos:
import { isFavorite, toggleFavorite } from './favorites.js';

const boton = document.getElementById('btn-fav');

if (boton) {
  // Mismo criterio que Destino-1.js: id de la URL.
  const id = new URLSearchParams(window.location.search).get('id');
  const destino = DESTINOS[id] || DESTINOS.madrid;

  // formato  (favoritos):
  const item = {
    id: destino.id,
    title: destino.ciudad + ', ' + destino.pais,
    image: destino.imagen,
    description: destino.intro
  };

  // Disponibilidad de estado:
  function pintarBoton() {
    const activo = isFavorite(item.id);
    boton.setAttribute('aria-pressed', String(activo));
    boton.textContent = activo ? '♥ Quitar de favoritos' : '♡ Añadir a favoritos';
  }

 //Clikc real del botón favorito:
  boton.addEventListener('click', function () {
    toggleFavorite(item);
    pintarBoton();
  });

  pintarBoton();
}
