// let unCliente = {
//   nombre: "Peter Jackson",
//   "Dirección del cliente": "c/ desconocida",
//   "-+-+-+-+-" : "boquepasa",
//   pago: {
//     tipo: "Visa",
//     tarjeta: "1234567890",
//     "fecha de caducidad": "nunca"
//   }
// };

//console.log(unCliente.pago["tipo"]);
//console.log(unCliente.pago["fecha de caducidad"]);
// unCliente["nombre"] = "Juanito";
// console.log(unCliente["Dirección del cliente"]);

// let estudiante = {
//   id: 2,
//   nombre: "Obi Wan Kenobi",
//   diHola: function() {
//     return "Hola";
//   }
// };

// console.log(estudiante);
// // console.log(estudiante.diHola());

// estudiante.edad = 190;

// estudiante.diAdios = function() {
//   return "Adiós";
// };

// console.log(estudiante.diAdios());

// console.log(estudiante);

// this
// let factura = {
//   descripcion : "factura de prueba",
//   importe: 100.0,
//   iva: 21.00,
//   subtotal: function() {
//     return this.importe;
//   },
//   total: function() {
//     return this.importe + (this.importe * this.iva) / 100;
//   }
// };

// console.log(factura.subtotal());
// console.log(factura.total());

// Constructores
// function Web() {
//   this.url = "http://localhost";
//   this.nombre = "Localhost";

//   this.mostrarInfo = ()=> {
//     return this.nombre + " :: " + this.url;
//   }
// }

// let unaWeb = new Web();
// unaWeb.url = "http://fcbarcelona.cat";
// unaWeb.nombre = "Més que un club";
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web();
// console.log(otraWeb.mostrarInfo());


// function Web(url, nombre) {
//   this.url = url;
//   this.nombre = nombre;

//   this.mostrarInfo = ()=> {
//     return this.nombre + " :: " + this.url;
//   }
// }

// function Web(url) {
//   this.url = url;
//   this.nombre = "requete";

//   this.mostrarInfo = ()=> {
//     return this.nombre + " :: " + this.url;
//   }
// }
// let yUnaMes = new Web("nomesURL");
// console.log(yUnaMes.mostrarInfo());

// let unaWeb = new Web("http://fcbarcelona.cat", "Més que un club");
// console.log(unaWeb.mostrarInfo());

// let otraWeb = new Web("http://localhost", "Localhost");
// console.log(otraWeb.mostrarInfo());

//Web.visitas = 10;
//console.log(unaWeb.visitas);

// Web.miFuncion = function() {
//   return "Boquepasa";
// }
//console.log(unaWeb.miFuncion());

// prototype
// console.log('unaWeb',unaWeb);
// Web.prototype.visitas = 10;
// unaWeb.visitas = 23;
// console.log(unaWeb.visitas);

// Web.prototype.diHola = function() {
//   return "Hola";
// };

// console.log(unaWeb.diHola());
// Web.prototype.diHola = function() {
//   return "nose";
// };
// console.log(unaWeb.diHola());
// unaWeb.diHola = function() {
//   return "buff";
// };
// console.log(unaWeb.diHola());

// Recorrer un objeto
// let notas = {
//   diw: 8,
//   dwes: 9.5,
//   dwec: 4.9,
//   daw: {
//     test: 2.0,
//     practic: 3.0
//   }
// };

// for(let nota in notas) {
//   //console.log(nota);
//   console.log(typeof notas[nota]);
//   console.log(notas[nota]);
// }


// STAR WARS: Personajes y edades
/*
    Eres un joven padawan que colecciona datos sobre los héroes de Star Wars.
    Se te proporcionan dos arrays: uno con los nombres de algunos de estos héroes
    y otro con sus edades (en el episodio IV), con la indexación correspondiente
    a su nombre en el otro array.
*/

const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];

/*
    Escribe un programa que combine los datos de ambos arrays en un objeto y
    los muestre por consola.
    Calcula, además, la suma de las edades y muéstrala al final.
*/









