// Creación
//let saludo = 'hola';
//console.log(saludo1);

// Constructor
//let saludo = new String('hola');
//console.log(saludo);
//console.log(saludo + ' Joan');

// Propiedades
let saludo = 'hola';
// length
//console.log(saludo.length);
// Métodos más comuns
// charAt(): Retorna el carácter de índice especificado dentro de la cadena, como
// si cada carácter fuese un elemento de un array.
//let caracter = saludo.charAt(1);
//console.log(caracter);

// chatCodeAt(): Retorna el código Unicode del carácter en el índice especificado.
// let codigo = saludo.charCodeAt(3);
// console.log(codigo);  // 97

// concat(): Combina una o más cadenas.
//let saludoCompleto = saludo.concat(', ¿Cómo estás?');
//console.log(saludoCompleto);

// includes(): Verifica si una cadena contiene a otra.
// console.log(saludo.includes('mundo')); // false
// let saludoCompleto = saludo.concat(', mundo');
// console.log(saludoCompleto.includes('mundo')); // true

// indexOf(): Retorna el índice de la PRIMERA aparición de una cadena en otra cadena.
// let indice = saludo.indexOf('la');
// console.log(indice);

// lastIndexOf(): Retorna el índice de la última aparición de una cadena en otra.
// let cadena = 'hola,hola, adios y hola';
// let ultimoIndice = cadena.lastIndexOf('hola');
// console.log(ultimoIndice);

// slice(): Extrae una parte de una cadena y devuelve una nueva cadena.
// let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.slice(6, 10);
// let nuevaCadena = cadena.slice(cadena.indexOf('cara'), cadena.indexOf('cara') + 'cara'.length);
// console.log(nuevaCadena);

// subString(): Similar a slice, pero sin admitir índices negativos.
//let cadena = 'Hola, cara de bola';
// let nuevaCadena = cadena.substring(6, 10);
// console.log(nuevaCadena);
// let nuevaNuevaCadena = cadena.substr(6, 4);
// console.log(nuevaNuevaCadena);

// toLowerCase(), toUpperCase()
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// console.log(mayus);
// let minus = mayus.slice(0, mayus.toLowerCase().indexOf('cara')).toLowerCase() + mayus.slice(mayus.toLowerCase().indexOf('cara'), mayus.toLowerCase().indexOf('de')) + mayus.slice(mayus.toLowerCase().indexOf('cara') + 5).toLowerCase();
// console.log(minus);

// replace(): Reemplaza una cadena por otra.
// let cadena = 'Hola, cara de bola';
// let mayus = cadena.toUpperCase();
// let minus = mayus.toLowerCase().replace('cara', 'CARA');
// console.log(minus);

// trim(): Elimina espacios en blanco delante y detrás de la cadena.
// let cadena = "      Joan      ";
// console.log(cadena.length);
// let cadenaSinEspacios = cadena.trim();
// console.log(cadena);
// console.log(cadenaSinEspacios);
// console.log(cadenaSinEspacios.length);


// split(): Divide una cadena en un array de subcadenas.
let cadena = "Hola, cara de bola, rebola";
// let miArray = cadena.split('bola');
// console.log(miArray);
console.log(cadena[4]);