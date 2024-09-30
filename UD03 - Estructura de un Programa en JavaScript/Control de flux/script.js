// let numero = Number(prompt("Elije tu número:"));

// console.log("Tu número es la raíz cuadrada de " + numero * numero);


// Condicional
// let numero = Number(prompt("Elije tu número:"));

// if(!Number.isNaN(numero)) {
//   console.log("Tu número es la raíz cuadrada de " + numero * numero);
// }

// else if
// else

// BUCLES
// WHILE
// let numero = 2;
// let limite = 100;
// while(numero <= limite) {
//   console.log(numero);
//   numero = numero + 2;
// }

// Sumar els 100 1rs números pars
// let num = 0;
// let sumaPar = 0;
// let sumados = 0;
// while(sumados <= 100) {
//   // Sumarem si és par
//   if(num % 2 == 0) {
//     sumaPar = sumaPar + num;
//     sumados = sumados + 1;
//   }
//   // Incrementem el número
//   num = num + 1;
// }

// console.log("La suma dels 100 1rs números pars és: " + sumaPar);

// Potencia n-ésima d'un número a
// let a = Number(prompt("Introduzca la BASE:")) ?? 0;
// let n = 0 || Number(prompt("Introduzca el EXPONENTE:"));

// n = n == 0 ? 1 : n;

// let resultado = 1;
// let contador = 0;

// while(contador < n) {
//   resultado = resultado * a;
//   contador = contador + 1;
// }

// console.log(a + " elevado a " + n + " = " + resultado);

// DO WHILE
let nombre;
do {
  nombre = prompt("¿Quíen eres?");
} while (!nombre);

console.log("Nombre: " + nombre);
