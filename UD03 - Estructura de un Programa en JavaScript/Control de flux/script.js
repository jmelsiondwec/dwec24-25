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
// let nombre;
// do {
//   nombre = prompt("¿Quíen eres?");
// } while (!nombre);

// console.log("Nombre: " + nombre);

// BUCLES FOR
// let numero = 2;
// console.log("Antes del bucle: " + numero);
// for(numero = 0; numero <= 12; numero++) {
//   console.log(numero);
// }
// console.log("Después del bucle: " + numero);

// for(let numero = 20; numero < 100; numero++) {
//   if(numero % 5 != 0) {
//     continue;
//   }
//   console.log(numero);
// }

// SWITCH - CASE
//let pregunta = prompt("¿Qué tiempo hace?");
// switch (prompt("¿Qué tiempo hace?")) {
//   case "lluvioso":
//     console.log("¡Coge un paraguas!");
//     break;
//   case "soleado":
//     console.log("Lleva ropa ligera.");
//   case "nublado":
//     console.log("Puedes salir a la calle.");
//     break;
//   default:
//     console.log("¡Tiempo desconocido!");
//     break;
// }

/*  Ejercicio 1
  Escribe un bucle que realice siete llamadas a
  console.log para mostrar la siguiente figura:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/
 //let cadena = "hola";
 //console.log(cadena.length);

/*  Ejercicio 2
  Escribe un programa que use console.log para imprimir
  todos los números del 1 al 100, con dos excepciones:
  - Para los números que sean divisibles por 3, imprime:
  "Jander".
  - Para los número divisibles por 5 (y no por 3), imprime:
  "Clander".  
*/
/*  Ejercicio 2 - Extension Pack
  Modifica tu programa para imprimir "JanderClander" para los
  números que sean divisibles por 3 y 5 (y sigue imprimiendo
  "Jander" o "Clander" para los números que son divisibles solo
  por uno de esos casos).
*/

/*  Ejercicio 3
  Escribe un programa que cree una cadena que represente un tablero
  de 8 x 8, usando caracteres de salto de línea para separar las líneas.
  En cada posición del tablero hay un carácter de espacio o un carácter
  "#". Los caracteres deben formar un tablero de ajedrez:
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
*/



let cadena = ""; // Comenzamos con una cadena vacía

for (let i = 0; i < 7; i++) {
  cadena += "#"; // En cada iteración, concatenamos un "#" a la cadena
  console.log(cadena); // Mostramos la cadena
}

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }




