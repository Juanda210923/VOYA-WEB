//categoría familiar:
(function () {
  const MIN_FAMILIA = 3;  
  const MAX_FAMILIA = 50;


  const select   = document.getElementById('travelers');
  const contador = document.getElementById('family-counter');
  const valor    = document.getElementById('family-count');
  const total    = document.getElementById('travelers-total');
  const btnMenos = document.getElementById('family-minus');
  const btnMas   = document.getElementById('family-plus');


  //Si no está formulada la página, retorna vacío:
  if (!select || !contador) return;

  let familia = MIN_FAMILIA;

  function actualizar() {
    const esFamilia = select.value.toLowerCase() === 'familia';
    contador.hidden = !esFamilia;
    total.value = esFamilia ? familia : parseInt(select.value, 10);
    valor.textContent = familia;
    btnMenos.disabled = familia <= MIN_FAMILIA;
    btnMas.disabled   = familia >= MAX_FAMILIA;
  }


  select.addEventListener('change', actualizar);


  btnMenos.addEventListener('click', function () {
    if (familia > MIN_FAMILIA) { familia--; actualizar(); }
  });

  btnMas.addEventListener('click', function () {
    if (familia < MAX_FAMILIA) { familia++; actualizar(); }
  });

  actualizar();
})();
