let iteracions = 7;  // Per indicar el número de iteracions.
let cadena = ""; // Cadena que mostrarem.

// En aquest cas, controlem la longitud de la cadena,
// de manera que no superi el límit fixat per la
// variable iteracions.
while(cadena.length < iteracions) {
  // A cada iteració concatenem un nou "#".
  cadena += "#";
  // Mostrem la cadena.
  console.log(cadena);
}