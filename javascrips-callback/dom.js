//callbacks-----------------------------------Problema01
// function contarHasta(number, cb) {
//   for (let i = 1; i <= number; i++) {
//     cb(i);
//   }
// }

// contarHasta(5, (el) => {
//   document.write("number " + el);
// });

// contarHasta(5, (el) => {
//   console.log("number " + el);
// });
//callbacks-filter-----------------------------------Problema02
// const producto = [
//   ["manzana", 120],
//   ["naraja", 150],
//   ["kiwis", 280],
//   ["peras", 240],
// ];

// function recorrerArreglo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i][1] >= 200) {
//       console.log(array[i]);
//     }
//   }
// }
// const arrrglo = producto.filter((el) => el[1] >= 200);

// recorrerArreglo(producto);
// console.log(arrrglo);

//callbacks-filter-----------------------------------Problema03
// const usuarios = [
//   ["juan", "sd432fd4f5"],
//   ["carlos", "sfdfsdfsdf"],
//   ["ana", "sdkfjhsdf"],
//   ["marcos", "lfdsg4dfg"],
// ];

// const userName = usuarios.map((el) => el[0]);
// console.log(userName);

// const userPass = usuarios.map((el) => [el[0], (el[1] = "")]);
// console.log(userPass);

//callbacks-find-findindex-----------------------------------Problema00
// const usuarios = [
//   ["juan", "sd432fd4f5"],
//   ["carlos", "sfdfsdfsdf"],
//   ["ana", "sdkfjhsdf"],
//   ["marcos", "lfdsg4dfg"],
// ];

// let nombre = prompt("ingrese el nombre del usuario");

// const userName = usuarios.findIndex((el) => el[0] == nombre);

// if (userName !== -1) {
//   console.log(userName);
// } else console.log("no exite el nombre que buscas");

//callbacks-some-every-----------------------------------Problema00
// const aletori = [];

// function aletorio(array) {
//   for (let i = 0; i < 10; i++) {
//     let dato = Math.floor(Math.random() * 50);
//     array.push(dato);
//   }
//   console.log(array);
// }

// aletorio(aletori);

// const menor15 = aletori.some((el) => el <= 15);
// if (menor15) {
//   console.log("si hay valor menores que 15");
// } else console.log("no hay valor de 15");

// const menor45 = aletori.some((el) => el <= 45);
// if (menor45) {
//   console.log("si hay valor menores a 45");
// } else console.log("no hay valor de 45");

//callbacks-foreach-----------------------------------Problema00
// const usuarios = [
//   ["juan", "sd432fd4f5"],
//   ["carlos", "sfdfsdfsdf"],
//   ["ana", "sdkfjhsdf"],
//   ["marcos", "lfdsg4dfg"],
// ];

// usuarios.forEach((el) => (el[1] = ""));
// console.log(usuarios);

//callbacks-sort-----------------------------------Problema00

// const producto = [
//   ["manzana", 120],
//   ["naraja", 150],
//   ["kiwis", 280],
//   ["peras", 240],
// ];

// producto.sort((a, b) => a[1] - b[1]);
// console.log(producto);

//callbacks-reduce-reduceright-----------------------------------Problema00
// const nombre = ["juan", "ana", "luis", "carlos", "marco"];

// nombre.sort();

// let cadena = nombre.reduce((i, f) => i + "-" + f);
// console.log(cadena);

//callbacks-(push-unshift-pop-shift-include)-----------------------------------Problema00
// const matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function copiarElemento(array, position) {
//   return array[position].slice();
// }

// const copia = copiarElemento(matriz, 2);
// console.log(copia);

//callbacks-splice-----------------------------------Problema00

// const array = [];

// while (array.length != 50) {
//   let data = Math.floor(Math.random() * 51);
//   if (array.includes(data) == false) {
//     array.push(data);
//   }
// }
// console.log(array);
// const array2 = array.splice(25, 25);
// console.log(array2);

//callbacks-concat-----------------------------------Problema00
// const arreglo = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const arry = arreglo[0].concat(arreglo[1], arreglo[2]);
// console.log(arry);

//obajetos -----------------------------------Problema00
// const alumno = {
//   nombre: "shana",
//   materia: "matematicas",
//   nota1: 15,
//   nota2: 17,
//   nota3: 16,
// };

// function Imprimir() {
//   let promedio = 0;
//   console.log(alumno.nombre);
//   console.log(alumno.materia);
//   promedio = (alumno.nota1 + alumno.nota2 + alumno.nota3) / 3;
//   console.log(promedio > 12 ? "aprobado" : "desaprobado");
// }

// Imprimir();

//obajetos -----------------------------------Problema01
// let Jugadores01 = {
//   nombre: "shana",
//   puntuacion: 1500,
//   nivel: "experta",
// };

// let Jugadores02 = {
//   nombre: "jerry",
//   puntuacion: 1000,
//   nivel: "promedio",
// };

// function imprimirjugadores(nombre, punt, nil) {
//   console.log(nombre);
//   console.log(punt);
//   console.log(nil);
// }

// imprimirjugadores(
//   Jugadores01.nombre,
//   Jugadores01.puntuacion,
//   Jugadores01.nivel
// );

// imprimirjugadores(
//   Jugadores02.nombre,
//   Jugadores02.puntuacion,
//   Jugadores02.nivel
// );

// function mejorjugador(jugador1, jugador2) {
//   if (jugador1.puntuacion > jugador2.puntuacion)
//     console.log("el mejor jugador es " + jugador1.nombre);
//   else console.log("el mejor jugador es " + jugador2.nombre);
// }

// mejorjugador(Jugadores01, Jugadores02);

//obajetos -----------------------------------Problema02

// const computadora = {
//   cpu: "i7",
//   meoriaRan: "16gb",
// };

// function imprimir(object) {
//   for (let clave in object) {
//     let dato = object[clave];
//     console.log("propiedad: " + clave);
//     console.log("valor " + dato);
//   }
// }

// imprimir(computadora);

// function agregarpropiedad(object) {
//   object.discoduro = "1tb";
// }

// agregarpropiedad(computadora);

// imprimir(computadora);

//obajetos -----------------------------------Problema03

// let codifo = parseInt(prompt("ingrese el el codigo"));
// let nombre = prompt("ingrese el nombre");
// let gmail = prompt("ingrese el nombre");

// function cargarData(codifo, nombre, gmail) {
//   const cliente = {
//     codifo,
//     nombre,
//     gmail,
//   };
//   return cliente;
// }

// function imprimir(object) {
//   for (let clave in object) {
//     console.log("propiedad" + clave + " valor " + object[clave]);
//   }
// }

// const cliente01 = cargarData(codifo, nombre, gmail);
// imprimir(cliente01);

//obajetos -----------------------------------Problema04
