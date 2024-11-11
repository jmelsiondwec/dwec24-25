// Capturem l'element que mostrarà el compte enrere.
const comptador = document.getElementById("comptador");

// Funció que inicia el compte enrere amb la durada especificada en segons.
function iniciar(segons) {
  // Passem el segons a milisegons.
  milisegons = segons * 1000;
  // Creem el compte enrere.
  elCompteEnrere = setInterval(compteEnrere, 1000);
}

// Funció que actualizta el compte enrere i el mostra.
  function compteEnrere() {
    // Determinem quant temps queda.
    const tempsRestant = tempsFinal;
    // Calculen els segons restants.
    const segonsRestants = Math.floor(tempsRestant / 1000);
    // Mostrem el temps restant.
    comptador.textContent = `Temps restant: ${segonsRestants} segons`;

    // Parem l'interval quan s'esgota el temps.
    if (tempsRestant <= 0) {
      clearInterval(elCompteEnrere);
      comptador.textContent = "¡Temps esgotat!";
    }

    // Actualitzem el temps d'aturada.
    tempsFinal = tempsRestant - 1000;
  }

  let segons = 10;
  let elCompteEnrere;
  let tempsFinal = segons * 1000;
// Iniciem el compte enrere.
iniciar(segons);
