let cadenaTauler = ""; // Cadena que mostrarem.
let tocaBlanc = true; // Ens ajudarà a saber quin caràcter ficar.
// Definim el tauler d'escacs: files x columnes.
let files = 8;
let columnes = 8;

// Recorrem les files.
for (let fila = 1; fila < files; fila++) {
  // Si la fila és impar, toca començar per blanc.
  let modul2 = fila % 2;
  if (modul2) { // modul2 != 0
    tocaBlanc = true;
  }
  // Recorrem les columnes.
  for (let columna = 1; columna <= columnes; columna++) {
    // Mirem quin caràcter toca.
    cadenaTauler += tocaBlanc ? " " : "#";
    // Indiquem que el següent caràter serà l'altre.
    tocaBlanc = !tocaBlanc;
  }
  // Afegim un salt de línia al final de cada fila.
  cadenaTauler += "\n";
  // Inicialitzem de nou tocaBlanc.
  tocaBlanc = false;
}

// Mostrem el resultat.
console.log(cadenaTauler);
