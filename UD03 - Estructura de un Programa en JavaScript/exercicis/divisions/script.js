let inici = 1; // Inici del bucle.
let final = 100; // Final del bucle.

// Recorrem d'inici a final.
for(let i = inici; i <= final; i++) {
  // Calculem moduls a 3 i 5.
  let modul3 = i % 3;
  let modul5 = i % 5;
  // Comprovem si es divisible per 3.
  if(modul3 == 0) { // Podria haver ficat: if(!modul3)
    console.log("Jander");
    // Comprovem si es divisible per 5.
  } else if(modul5 == 0) { // Podria haver ficat: if(!modul5)
    console.log("Clander");
  } else {
    console.log(i);
  }  
}