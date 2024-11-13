// Capturar elementos del DOM.
const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');

// Precio de la película seleccionada.
let precioDelTicket = +peliculaSelect.value;

llenaIU();

// FUNCIONES
function actualizaSeleccionAsientos() {
  
  const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
  
  // const indiceAsientos = [...asientosSeleccionados].map(function(asiento) {
  //   return [...asientos].indexOf(asiento);
  // });

  const indiceAsientos = [...asientosSeleccionados].map((asiento)=>[...asientos].indexOf(asiento));

  localStorage.setItem('asientosSeleccionados', JSON.stringify(indiceAsientos));

  const contadorAsientosSeleccionados = asientosSeleccionados.length;

  contador.innerText = contadorAsientosSeleccionados;

  total.innerText = contadorAsientosSeleccionados * precioDelTicket;  
}

function llenaIU() {

  const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));

  if(asientosSeleccionados !== null && asientosSeleccionados.length > 0) {

    asientos.forEach((asiento, index)=>{
      if(asientosSeleccionados.indexOf(index) > -1) {
        asiento.classList.add('seleccionado');
      }
    });
  }

  const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');
  
  if(indicePeliculaSeleccionada) {
    peliculaSelect.selectedIndex = indicePeliculaSeleccionada; 
  }

  const precioPeliculaSeleccionada= localStorage.getItem('precioPeliculaSeleccionada');

  if(precioPeliculaSeleccionada) {
    precioDelTicket = +precioPeliculaSeleccionada;
  }  
}


// EVENTOS
contenedor.addEventListener('click', (e)=>{
  if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')) {

    e.target.classList.toggle('seleccionado');
    actualizaSeleccionAsientos();
  }
});

peliculaSelect.addEventListener('change', (e)=>{
  precioDelTicket = +e.target.value;

  console.log(e.target.selectedIndex);
  localStorage.setItem('indicePeliculaSeleccionada', e.target.selectedIndex);
  localStorage.setItem('precioPeliculaSeleccionada', e.target.value);

  actualizaSeleccionAsientos();
});

actualizaSeleccionAsientos();