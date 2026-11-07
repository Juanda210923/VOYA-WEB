(function () {
  
  //constantes iniciales:
  const MIN_FAMILIA = 3;
  const MAX_FAMILIA = 50;

//selectores:
  const select   = document.getElementById('travelers');
  const contador = document.getElementById('family-counter');
  const valor    = document.getElementById('family-count');
  const total    = document.getElementById('travelers-total');
  const btnMenos = document.getElementById('family-minus');
  const btnMas   = document.getElementById('family-plus');

//si no existe, ignora este bloque.
  if (!select || !contador) return;

 // número actual de personas en familia(3).
  let familia = MIN_FAMILIA;
  
  //actualización tiempo real:
  function actualizar() {
    const esFamilia = select.value === 'familia';

    contador.hidden = !esFamilia;
    //condicion visual(ocultar y mostrar)
    
    total.value = esFamilia ? familia : select.value; 
    // número que se envia(con el localstore).
    
    valor.textContent = familia;

    btnMenos.disabled = familia <= MIN_FAMILIA; 
    //boton de eliminar y minimo (3)
    
    btnMas.disabled   = familia >= MAX_FAMILIA; 
    //boton de agregar y máximo (50)
  }

  select.addEventListener('change', actualizar);

//condicion de los botones:
  btnMenos.addEventListener('click', function () {
    if (familia > MIN_FAMILIA) { familia--; actualizar(); }
  });

  btnMas.addEventListener('click', function () {
    if (familia < MAX_FAMILIA) { familia++; actualizar(); }
  });

  actualizar();
})();
