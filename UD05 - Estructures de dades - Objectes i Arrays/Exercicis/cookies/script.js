//document.onload(console.log('Hola'));

window.onload = gestionaNombres();

function gestionaNombres() {
  // Creamos un array para almacenar los nombres.
  let nombres = [];
  // Creamos un array para almacenar las edades.
  let edades = [];
  // Creamos una variable para recuperar el nombre del prompt.
  let nombre = '';
  // Creamos una variable para almacenar la edad asociada al nombre.
  let edad;
  // Recuperamos las posibles cookies.
  let misCookies = decodeURIComponent(document.cookie);
  // Variable para los posibles nombres.
  let misCookiesNombres = '';
  // Variable para las posibles edades.
  let misCookiesEdades = '';
  // Creamos una variable para almacenar el contenido de la cookie de nombres.
  let contenidoNombres = '';
  // Recuperamos las posibles edades almacenados en la cookie.
  let contenidoEdades = decodeURIComponent(document.cookie);
  // Comprobamos si se han recuperado los nombres.
  if(!misCookies) {
    console.log('No hay cookies...');
  } else {
    console.log('Cookies encontradas: ', misCookies);
    // Separamos nombres y edades
    let arrayCookies = misCookies.split(';');
    // Guardamos los nombres y edades en variables.
    misCookiesNombres = arrayCookies[0];
    misCookiesEdades = arrayCookies[1];
    console.log("misCookiesNombres: ", misCookiesNombres);
    console.log("misCookiesEdades: ", misCookiesEdades);
    // Quitamos de la cadena la clave y el = (para los nombres).
    let indiceSignoIgual = misCookiesNombres.indexOf('=');
    contenidoNombres = misCookiesNombres.slice(indiceSignoIgual + 1, misCookiesNombres.length);
    console.log('nombres cortados: ', contenidoNombres);
    // Convertimos la cadena de nombres en un array
    nombres = contenidoNombres.split(',');
    console.log(nombres);

    // Quitamos de la cadena la clave y el = (para las edades).
    indiceSignoIgual = misCookiesEdades.indexOf('=');
    contenidoEdades = misCookiesEdades.slice(indiceSignoIgual + 1, misCookiesEdades.length);
    console.log('edades cortadas: ', contenidoEdades);
    // Convertimos la cadena de edades en un array
    edades = contenidoEdades.split(',');
    console.log(edades);
  }
  // Solicitamos el nombre.
  nombre = prompt("¿Cuál es tu nombre?");
  // Quitamos los posibles espacios en blanco.
  nombre = nombre.trim();
  // Comprobamos si existe en el array.
  if(nombres.indexOf(nombre) != -1) {
    // El nombre ya existe, buscaremos su edad en otra cookie.
    console.log(nombre + ' ya existe!');
    // Recuperamos la edad.
    edad = edades[nombres.indexOf(nombre)];
    console.log('Su edad es: ', edad);

  } else {
    // Si no existe, lo añadimos al array y pedimos su edad.
    nombres.push(nombre);
    edad = +prompt("¿Cuál es tu edad?")
    // Añadimos la edad al array de edades.
    edades.push(edad);
  }

  // Creamos / editamos las cookies con los nuevos valores.
  // Convertimos el array en una cadena separada por comas.
  let contenidoCookieNombres = nombres.join();
  let contenidoCookieEdades = edades.join();
  console.log(contenidoCookieNombres);
  console.log(contenidoCookieEdades);
  document.cookie = "nombres=" + encodeURIComponent(contenidoCookieNombres) + " ; expires=Wed, 30 Oct 2024 23:00:00 GMT";
  document.cookie = "edades=" + encodeURIComponent(contenidoCookieEdades) + " ; expires=Wed, 30 Oct 2024 23:00:00 GMT";
}

// function creaCookie() {
//   let usuari = ['Pere', 'Joan'];
//   document.cookie = "usuari=" + encodeURIComponent(usuari) + " ; expires=Wed, 30 Oct 2024 23:00:00 GMT";
// }

// function elementoExisteEnArray(miArray, elemento) {
//   return miArray.includes(elemento);
// }

// let arrayAux = ['Joan', 'Pere'];
// console.log(elementoExisteEnArray(arrayAux, 'Joan'));
// //creaCookie();

//gestionaNombres('Ana');