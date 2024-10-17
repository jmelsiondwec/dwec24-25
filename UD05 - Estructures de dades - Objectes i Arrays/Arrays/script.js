// let numeros = [1, 2, 3, 4]; // 4 elementos
// console.log(numeros[0]); // indexados de 0 hasta su longitud - 1
// console.log(numeros[3]); // último
// console.log(numeros[4]); // undefined
// // length: longitud = número de elementos del array
// console.log(numeros[numeros.length - 1]);

// let nombres = ["pepe", "María", 'Joan', `Pere`];
// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(nombres[3]);

// let mescla1 = ["Hola", 10, true];
// console.log(typeof mescla1[0]);
// console.log(typeof mescla1[1]);
// console.log(typeof mescla1[2]);

// console.log(mescla1);

// let numeros = new Array();
// numeros[0] = 10;
// numeros[1] = 20;
// numeros[3] = 10;
// console.log(numeros);

// let noms = new Array('María', 'Joan');
// console.log(noms);

// let numeros = new Array();
// numeros = Array(5).fill('Hola');
// console.log(numeros);

// Métodos de Array
// push(): Agrega uno o más elementos al final del array
 const frutas = ['manzana', 'platano', 'naranja'];
// console.log(frutas);
// frutas.push('uva', 'pera');
// console.log(frutas);

// pop(): Elimina el último elemento del array.
// let uva = frutas.pop();
// console.log(uva);
// console.log(frutas);

// shift(): Elimina el primer elemeto del array.
// let primer = frutas.shift();
// console.log(frutas);
// console.log(primer);

// unshift(): Agregar uno o més elementos al inicio del array.
// frutas.unshift('melon', 'sandia');
// console.log(frutas);

// concat(): Combina dos o más arrays y retorna un nuevo array.
// const frutas2 = ['melocoton', 'kiwi'];
// const combinacion = frutas.concat(frutas2);
// console.log(combinacion);

// slice(): Devuelve una copia una superficial de una porción del array.
// frutas.push('kiwi', 'melon', 'sandia', 'melocoton');
// console.log(frutas);
// const frutas2 = frutas.slice(1, 5);
// console.log(frutas2);

// splice(): Cambia el contenido de un array eliminado,
// reemplazando o agregando elementos.
// frutas2.splice(1, 1, 'uva', 'tomate');
// console.log(frutas2);

// indexOf(): Devuelve el primer índice en el que se encuentra
// un elemento dado en un array o -1 si no lo encuentra.
//const indiceElementoBuscado = frutas.indexOf('Platano'.toLowerCase());
//console.log(indiceElementoBuscado);

// join(): Une todos los elementos de un array en una cadena,
// utilizando un separador especificado.
// const unionElementos = frutas.join('*');
// console.log(unionElementos);

// sort(): Ordena los elementos de un array alfabéticamente (si
// son cadenas) o numéricamente (para números).
//frutas.sort();
//console.log(frutas);

// Ordena por valores unicode!!
// const numeros = [10, 5, 8, 3, 1];
// console.log(numeros);
// numeros.sort();
// console.log(numeros);

// const ciudades = ['Zaragoza', 'madrid', 'Barcelona'];
// ciudades.sort();
// console.log(ciudades);

// Afortunadamente sort() tiene un parámetro opcional
//const numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort(function(a, b) {
//   // -1 a < b
//   // 1 a > b
//   // 0 a == b
//   return a - b;
// }));

//console.log(numeros.sort((a, b) => a - b));

//const ciudades = ['Zaragoza', 'madrid', 'Barcelona', 'Ávila'];
// ciudades.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 :
//                         a.toLowerCase() < b.toLowerCase() ? -1 : 0);
// console.log(ciudades);

// ciudades.sort((a, b) => a.localeCompare(b));
// console.log(ciudades);

// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', 'Ávila'];
// for(let i = 0; i < ciudades.length; i++) {
//   console.log(ciudades[i]);
// }
// for(let ciudad in ciudades) {
//   console.log(ciudad);
// }
// for(let ciudad of ciudades) {
//   console.log(ciudad);
// }
// ciudades.forEach(ciudad => {
//   console.log(ciudad.toUpperCase())
// });

// Desestructuración
//const numeros = [1, 2, 3];
// const [a, b, c] = numeros;
// console.log(a);
// console.log(c);

// Operador Spread
// const numeros = [1, 2, 3];
// const masNumeros = [...numeros, 4, 5, ...numeros, ...[50, 60]];
// console.log(masNumeros);

// function sumar(...numeros) {
//   let resultado = 0;
//   for(let numero of numeros) {
//     resultado += numero;
//   }
//   return resultado;
// }

//console.log(sumar(1, 3, 8, 9, 5, 10, 21));
// const numeros = [1, 3, 8, 9, 5, 10, 21];
// console.log(sumar(...numeros));

// Después de ver objetos, vemos alguna cosa más de array.

// forEach(): Ejecuta una función una vez por cada elemento del array.
// const numeros = [1, 3, 5, 7];
// numeros.forEach((numero)=>{
//   let resultado = numero * 2;
//   console.log(resultado);
// });

// map(): Crea un nuevo array con los resultados de aplicar una función
// a cada elemento del array original.
// const numeros = [1, 2, 3, 4, 5];
// const doblaNumeros = numeros.map((numero)=>{
//   return numero * 2;
// });

// console.log(doblaNumeros);
// console.log(numeros);

// filter(): Crea un nuevo array con todos los elementos que cumplan una
// condición determinada.
// const numeros = [1, 2, 3, 4, 5];
// const numerosPares = numeros.filter((numero)=>{
//   return numero % 2 == 0;
// });
// console.log(numerosPares);

// reduce(): Aplica una función a un acumulador y a cada elemento
// del array (de izquierda a derecha), para redurcirlo a un 
// único valor.
// const numeros = [1, 2, 3, 4, 5];
// let suma = numeros.reduce((acumula, numero)=>{
//   return acumula + numero;
// });
// console.log(suma);

// find(): Devuelve el PRIMER elemento del array que cumpla
// una condición determinada.
// const numeros = [1, 2, 3, 4, 5];
// const numeroEncontrado = numeros.find((numero)=>{
//   return numero < 3;
// });
// console.log(numeroEncontrado);

// findIndex(): Devuelve el ÍNDICE del primer elemento del array
// que cumple con una función de prueba, o "-1" si no se encuentra.
// const numeros = [1, 2, 3, 4, 5];
// const indiceEncontrado = numeros.findIndex((numero)=>{
//   return numero > 3;
// });
// console.log(indiceEncontrado);

// some(): Comprueba si al menos un elemento del array cumple
// una condición determinada.
// const numeros = [1, 2, 3, 4, 5];
// const tieneNumeroPar = numeros.some((numero)=>{
//   return numero % 2 == 0;
// });

// console.log(tieneNumeroPar);

// every(): Comprueba si TODOS los elementos del array cumplen
// con una condición determinada.
//const numeros = [1, 2, 3, 4, 5];
// const numeros = [4, 2, 6, 8, 0];
// const sonPares = numeros.every((numero)=>{
//   return numero % 2 == 0;
// });

// console.log(sonPares);