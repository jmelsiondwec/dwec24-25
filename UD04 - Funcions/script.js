// Definir funcions
// const quadrat = function(n) {
//   return n * n;
// };

// const mensaje = function() {
//   console.log("Funció que no retorna res, però que mostra un missatge...");
// };

//mensaje();
//console.log(quadrat(3));

// const redondeaA = function(n, m) {
//   // Redondear n al múltiplo más cercano de m.
//   // n = 23, m = 10 -> 20
//   let resto = n % m;
//   return n - resto + (resto < m / 2 ? 0 : m);
// };
//console.log(redondeaA(23, 10));

// Ámbitos

// let x = 10; // Global
// if(true) {
//   let y = 20; // local respecto al bloque
//   //console.log(x);
//   //var z = 30; // Global
// }

// console.log(z);


// const mitad = function(n) {
//   return n / 2;
// };

// let n = 10;
// console.log(mitad(100)); // 50
// console.log(n);


// Ámbito anidado
// const humus = function(factor) {
//   const ingrediente = function(cantidad, unidad, nombre) {
//     let cantidadIngrediente = cantidad * factor;
//     if(cantidadIngrediente > 1) {
//       unidad += "s";
//     }
//     console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
//   };
//   ingrediente(1, "lata", "garbanzos");
//   ingrediente(0.25, "taza", "tahini");
//   ingrediente(0.25, "taza", "jugo de limón");
//   ingrediente(1, "diente", "ajo");
//   ingrediente(2, "cucharada", "aceite de oliva");
//   ingrediente(0.5, "cucharadita", "comino");
// };

// humus(1);

// function mensaje2 () {
//   console.log("mensaje 2");
// };

///mensaje2();

// const redondeaA = (n, m) => {
//   let resto = n % m;
//   return n - resto + (resto < m / 2 ? 0 : m);
// };

// let nombre = "Joan"
// const saluda = () => "Hola " + nombre;
// console.log(saluda());

// Pila de llamadas
// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }
// saludar("Joan");
// console.log("Adiós");

// // no en función
// // en saludar
// // en clg
// // en saludar
// // no en funcion
// // en clg
// // no en funcion


// function gallina() {
//   return huevo();
// }

// function huevo() {
//   return gallina()
// }

//console.log("Qué fué antes, el " + huevo() + "o la " + gallina());

// Parámetros Opcionales
// const quadrat = function(n, b = "n/a") { 
//   console.log(b);
//   return n * n; 
// };
// console.log(quadrat(3));

// Cierre o Clausura
// function valor(n) {
//   let local = n;
//   return () =>  n*2;
// }

// let valor1 = valor(1); // valor1, es una función
// let valor2 = valor(2);

// console.log(valor1());
// console.log(valor2());

// Recursividad
function exponencial(base, exponente) {

  if(exponente == 0) {
    return 1;
  } else {
    return base * exponencial(base, exponente - 1);
  } 
}

console.log(exponencial(2, 3));

// Factorial de n: n! = n * (n-1) * (n-2)... * 1
// Ej.: 4! = 4 * 3 * 2 * 1 = 24
// Spoiler: 5! = 5 * 4!