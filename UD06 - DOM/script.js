// let enlace = document.getElementsByTagName("a")[4];
// let miDiv = document.getElementById("miDiv");
// let parrafos = document.getElementsByTagName("p");
// let divP = document.getElementById("divP");
// let creaP = document.getElementById("creaP");
// let polar = divP.getElementsByTagName("p")[divP.getElementsByTagName("p").length - 1].getElementsByTagName("img")[0];
// console.log(polar);

// //divP.insertBefore(parrafos[2], parrafos[1]);

// creaP.addEventListener('click', ()=>{
// if(polar.alt)  {
//   let texto = document.createTextNode(polar.alt);
//   let elemento = document.createElement("div");
//   let miEnlace = document.createElement("a");
//   elemento.appendChild(miEnlace);
//   polar.parentElement.appendChild(elemento);
//   polar.parentElement.replaceChild(texto, polar);
// }
// });

// //console.log(parrafos);



//  //console.log(enlace.href);
// // console.log(miDiv);

// let miP = document.getElementById("miP");
// console.log(miP.style.color);
// miP.style.color = "blueviolet";

function contador(s) {
  return document.querySelectorAll(s).length;
}

console.log(contador("p"));
console.log(contador(".uno"));
console.log(contador("p .uno"));
console.log(contador("p > .uno"));

function muestraParrafos() {
  return document.querySelectorAll("p");
}


//body > p:nth-child(3) > span


console.log(muestraParrafos());

function muestraParrafo() {
  return document.querySelector("p");
}

console.log(muestraParrafo());