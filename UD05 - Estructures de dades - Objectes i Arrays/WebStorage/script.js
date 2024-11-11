let guardarLS = document.getElementById('guardarLS');
let recuperarLS = document.getElementById('recuperarLS');
let netejarLS = document.getElementById('netejarLS');
let valorsLS = document.getElementById('valorsLS');

let diHola = 'Hola';
let diAdios = 'Adiós';
let numeros = [1, 3, 5, 7];
let factura = {
  numero: 1,
  descripcion: 'Taula nova del profe',
  import: 22000.50,
  tipoPago: [
    {
      nombre: 'efectivo',
      importeMaximo: 1000.00
    },
    {
      nombre: 'tarjeta',
      tipo: [
        'Visa', 'Mastercard', 'Amex'
      ],
      titular: 'Pepito millonetis'
    }
  ]
};

guardarLS.addEventListener('click', ()=> {
  // localStorage.setItem('diHola', diHola);
  // localStorage.setItem('diAdios', diAdios);
  localStorage.setItem('numeros', JSON.stringify(numeros));
  localStorage.setItem('factura', JSON.stringify(factura));

});

recuperarLS.addEventListener('click', ()=>{
  // let lsDiHola = localStorage.getItem('diHola');
  // let lsDiAdios = localStorage.getItem('diAdios');
  
  // if(lsDiHola) {valorsLS.innerText += lsDiHola;}
  // if(lsDiAdios) {valorsLS.innerText += lsDiAdios;}

  let lsNumeros = localStorage.getItem('numeros');
  lsNumeros = JSON.parse(lsNumeros);
  console.log(lsNumeros);
  console.log(typeof lsNumeros);
  valorsLS.innerText = lsNumeros;

  let lsFactura = JSON.parse(localStorage.getItem('factura'));
  console.log(lsFactura);
  console.log(typeof lsFactura);
  valorsLS.innerText = lsFactura;
});

netejarLS.addEventListener('click', ()=>{
  localStorage.clear();
});

