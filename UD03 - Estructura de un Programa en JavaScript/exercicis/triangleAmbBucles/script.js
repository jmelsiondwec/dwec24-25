let iteracions = 7;  // Per indicar el número de iteracions.
let i = 0; // Per controlar les iteracions.
let cadena = ""; // Cadena que mostrarem.
while(i < iteracions) {
  // A cada iteració concatenem un nou "#".
  cadena += "#";
  // Mostrem la cadena.
  console.log(cadena);
  // Augmentem el número d'iteració perapropar-nos
  // al límit fixat per la variable "iteracions".
  i++;
}