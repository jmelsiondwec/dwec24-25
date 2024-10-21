// Kaprekar - Recursivitat

function kaprekar(numero, iteracions = 0) {

  // Si iteracion = 0, mostrarem el número inicial.
  if(iteracions === 0) {
    console.log(`Número inicial: ${numero}`);
  }

  // Condició de parada de la recursivitat en el cas que el número
  // sigui 6174 o s'hagin fet 7 iteracions.
  if(numero === 6174 || iteracions === 7) {
    return iteracions;
  } else {
    // Continuem amb la seqüència per trobar el número de Kaprekar.
    let major = "";
    let menor = "";

    let num = numero + ""; //numero.toString();
    let longitudNumero  = num.length;

    for(let i = 0; i < longitudNumero; i++) {
      let max = 0;
      for(let j = 0; j < longitudNumero; j++) {
        let digit = +num[j]; // parseInt(num[j])
        if(digit > max) {
          max = digit;
        }
      }
      let indexMax = num.indexOf(max);
      num = num.substring(0, indexMax) + num.substring(indexMax + 1);
      major += max;
    }

    for(let i = 0; i < major.length; i++) {
      menor = major[i] + menor;
    }

    major = +major;
    menor = +menor;

    let resultat = major - menor;

    resultat = resultat + "";

    resultat = omplirAmbZeros(resultat, 4);

    major = omplirAmbZeros(major, 4);
    menor = omplirAmbZeros(menor, 4);

    console.log(`Pas ${iteracions}: ${major} - ${menor} = ${resultat}`);

    return kaprekar(+resultat, iteracions + 1);
  }

}

kaprekar(1000, 0);

function omplirAmbZeros(numero, longitud) {
  let cadenaNumero = String(numero);
  while(cadenaNumero.length < longitud) {
    cadenaNumero = "0" + cadenaNumero;
  }
  return cadenaNumero;
}