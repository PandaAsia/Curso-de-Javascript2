//Funciones---------------problemas01
// let num = parseInt(prompt("Ingrese el valor"));
// let calcular = 0;

// function CalcularValor() {
//   calcular = num * num;
// }

// function ImprimirCalculo() {
//   console.log(calcular);
//   console.log("---------------");
// }

// CalcularValor();
// ImprimirCalculo();
// CalcularValor();
// ImprimirCalculo();
// CalcularValor();
// ImprimirCalculo();

//Funciones---------------problemas02
// function funcion01() {
//   let num = parseInt(prompt("Ingrese el valor"));
//   if (num > 0) {
//     console.log("es positivo");
//   } else if (num === 0) console.log("es nulo");
//   else console.log("es negativo");
// }

// function calculo02() {
//   let num = parseInt(prompt("Ingrese el valor 1"));
//   let num2 = parseInt(prompt("Ingrese el valor 2"));
//   let producto = num * num2;
//   console.log(num + " y " + num2 + " su producto es de " + producto);
// }

// funcion01();
// calculo02();

//Funciones---------------problemas03
// function ingresarValor() {
//   let num = parseInt(prompt("Ingrese el valor 1"));
//   let num2 = parseInt(prompt("Ingrese el valor 2"));
//   let num3 = parseInt(prompt("Ingrese el valor 3"));
//   if (num < num2 && num < num3) console.log("el valor menor es " + num);
//   else if (num2 < num && num2 < num3) console.log("el valor menor es " + num2);
//   else console.log("el valor menor es " + num3);
// }

// for (let i = 0; i < 2; i++) {
//   ingresarValor();
// }

//Funciones---------------problemas04

// let num = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));

// function calcular(num, num2) {
//   let suma = num + num2;
//   console.log(suma);
// }

// function despedida(nombre = "shana") {
//   console.log("bye " + nombre);
// }

// calcular(num, num2);
// despedida("ana");

//Funciones---------------problemas05

// function CargarDato() {
//   let number01 = parseInt(prompt("Ingrese el valor 1"));
//   let number02 = parseInt(prompt("Ingrese el valor 2"));
//   let number03 = parseInt(prompt("Ingrese el valor 3"));
//   motrarMayor(number01, number02, number03);
// }

// function motrarMayor(n1, n2, n3) {
//   if (n1 < n2 && n1 < n3) console.log("el valor menor es " + n1);
//   else if (n2 < n1 && n2 < n3) console.log("el valor menor es " + n2);
//   else console.log("el valor menor es " + n3);
// }

// CargarDato();

//Funciones---------------problemas06
// function CargarDatos() {
//   let lado = parseInt(prompt("Ingrese el lado de un cudrado"));
//   let valor01 = parseInt(
//     prompt("quieres ver su perimetro escribe 1 o 0 que no")
//   );
//   if (valor01 == 1) {
//     mostrarPerimetro(lado);
//   } else if (valor01 == 0) {
//     mostrarSuperficie(lado);
//   }
// }

// function mostrarPerimetro(num) {
//   let perimetro = num * 4;
//   console.log("el perimetro " + perimetro);
// }

// function mostrarSuperficie(num) {
//   let suerficie = num * num;
//   console.log("el superficie es de " + suerficie);
// }

// CargarDatos();

//Funciones---------------problemas07

// function cantidadVocal(palabra) {
//   let vocales = 0;
//   for (let h = 0; h < palabra.length; h++) {
//     if (
//       palabra[h] == "a" ||
//       palabra[h] == "e" ||
//       palabra[h] == "i" ||
//       palabra[h] == "o" ||
//       palabra[h] == "u"
//     )
//       vocales++;
//   }
//   console.log(vocales);
// }

// cantidadVocal("shana");
// cantidadVocal("hola");
// cantidadVocal("mundo");

//Funciones---------------problemas08
// function Multiplicar(num) {
//   let multipli = 0;
//   for (let i = 1; i <= 12; i++) {
//     multipli = num * i;
//     console.log(multipli);
//   }
// }

// function cargarDatos() {
//   let number = parseInt(prompt("Ingrese un valor"));
//   Multiplicar(number);
// }

// cargarDatos();

// for (let i = 2; i <= 10; i++) {
//   Multiplicar(i);
//   console.log("-----------------");
// }

//Funciones-ARRay---------------problemas01
// let arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Mesclar(arreglo) {
//   for (let i = 0; i < 10000; i++) {
//     let j = Math.floor(Math.random() * arreglo.length);
//     let h = Math.floor(Math.random() * arreglo.length);
//     let temp = arreglo[j];
//     arreglo[j] = arreglo[h];
//     arreglo[h] = temp;
//   }
// }

// function mostrar(arreglo) {
//   for (let item of arreglo) {
//     document.write(item + "-");
//   }
//   document.write("<br>");
// }

// mostrar(arreglo1);
// Mesclar(arreglo1);
// mostrar(arreglo1);

//Funciones-ARRay---------------problemas02
// let arreglo = [];
// function cargarDatos(array) {
//   for (let i = 0; i < 5; i++) {
//     let dato = parseInt(prompt("ingrese el valor" + i));
//     array.push(dato);
//   }
//   array.forEach((el) => {
//     console.log(el);
//   });
// }

// function mayoValor(array) {
//   let mayo = 0;
//   for (let inde of array) {
//     if (mayo < inde) {
//       mayo = inde;
//     }
//   }
//   console.log("el numero mayor es " + mayo);
// }

// function sumarValor(array) {
//   let suma = 0;
//   for (let inde of array) {
//     suma = suma + inde;
//   }
//   console.log("la suma total es de  " + suma);
// }
// cargarDatos(arreglo);
// mayoValor(arreglo);
// sumarValor(arreglo);

//Funciones-ARRay---------------problemas03
// let array1 = [];
// let array2 = [];

// function CargarDatos(array) {
//   for (let i = 0; i < 5; i++) {
//     let dato = parseInt(prompt("ingrese el valor" + i));
//     array.push(dato);
//   }
// }

// function impirmirDato(array) {
//   for (let ide of array) {
//     document.write(ide + "-");
//   }
//   document.write("<br>");
// }

// CargarDatos(array1);
// CargarDatos(array2);
// impirmirDato(array1);
// impirmirDato(array2);

//Funciones-ARRay---------------problemas04
// let arreglo = [];
// function genraraAletorio(array2) {
//   for (let i = 0; i < 50; i++) {
//     let dato = Math.floor(Math.random() * 1000);
//     array2.push(dato);
//   }
// }
// function ordenar(array) {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let h = 0; h < array.length - 1; h++) {
//       if (array[h] > array[h + 1]) {
//         temp = array[h];
//         array[h] = array[h + 1];
//         array[h + 1] = temp;
//       }
//     }
//   }
// }

// function imprimir(array) {
//   array.forEach((el) => {
//     document.write(el + "-");
//   });
//   document.write("<br>");
// }

// genraraAletorio(arreglo);
// imprimir(arreglo);
// ordenar(arreglo);
// imprimir(arreglo);

//Funciones-retorno---------------problemas01

// function cargarDato() {
//   let number1 = parseInt(prompt("ingrese el number 1"));
//   let number2 = parseInt(prompt("ingrese el number 2"));
//   return imprimirMayor(number1, number2);
// }

// function imprimirMayor(numbe1, numbe2) {
//   if (numbe1 > numbe2) return numbe1;
//   else return numbe2;
// }

// let imprimir = cargarDato();
// console.log(imprimir);

//Funciones-retorno---------------problemas02

// function cargarDato() {
//   let array = [];
//   for (let i = 0; i < 5; i++) {
//     let data = parseInt(prompt("Ingrese dato"));
//     array.push(data);
//   }
//   return array;
// }

// function sumardata(array) {
//   let suma = 0;
//   array.forEach((el) => {
//     suma = suma + el;
//   });
//   return suma;
// }

// function mayor(array) {
//   let may = 0;
//   array.forEach((el) => {
//     if (may < el) {
//       may = el;
//     }
//   });
//   return may;
// }

// let arreglo = cargarDato();
// console.log(arreglo);
// console.log(sumardata(arreglo));
// console.log(mayor(arreglo));

//Funciones-retorno---------------problemas03
// function CargarDato() {
//   let number1 = parseInt(prompt("Ingrese el primer number"));
//   let number2 = parseInt(prompt("Ingrese el segundo number"));
//   let number3 = parseInt(prompt("Ingrese el tercer number"));
//   console.log(Promedio(number1, number2, number3));
//   console.log(Cuadrado(number1));
// }

// function Promedio(v1, v2, v3) {
//   let promedio = 0;
//   promedio = (v1 + v2 + v3) / 3;
//   return promedio;
// }

// function Cuadrado(v1) {
//   let cudra = 0;
//   cudra = v1 * v1;
//   return cudra;
// }

// console.log(CargarDato());

//Funciones-retorno---------------problemas04
// function Cargarletra() {
//   let letra = prompt("ingrese una palabra");
//   let palabra = cantA(letra);
//   console.log(letra);
//   console.log(palabra);
// }

// function cantA(letra) {
//   let cant = 0;
//   for (let i = 0; i < letra.length; i++) {
//     if (letra[i] === "a" || letra[i] === "A") {
//       cant++;
//     }
//   }
//   return cant;
// }

// Cargarletra();

//Funciones-retorno---------------problemas05
// function cargarDato() {
//   let numbre = parseInt(prompt("ingrese un dato"));
//   console.log(numbre);
//   console.log(factorial(numbre));
// }

// function factorial(number) {
//   let number1 = 1;
//   for (let i = 1; i <= number; i++) {
//     number1 = number1 * i;
//   }
//   return number1;
// }

// function listaNumber() {
//   for (let i = 2; i <= 10; i++) {
//     console.log(i);
//     console.log(factorial(i));
//   }
// }

// cargarDato();
// listaNumber();

//Funciones-retorno---------------problemas06
// function verificar(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// for (let i = 0; i < 100; i++) {
//   console.log(verificar(i));
// }

//Funciones-parametro rest---------------problemas01
// function familia(madre, padre, ...hijos) {
//   console.log("padre " + padre);
//   console.log("madre " + madre);
//   for (let son of hijos) {
//     console.log("hijo " + son);
//   }
// }

// familia("jose", "ana", "carlos", "maria", "laura");
// familia("padre", "cristiana");

//Funciones-flecha---------------problemas01

// const sumarAgrgar = (el) => {
//   let suma = 0;
//   for (let inde of el) {
//     suma = suma + inde;
//   }
//   el.push(suma);
// };

// const arreglo = [1, 2, 3, 4, 5];
// console.log(arreglo);
// sumarAgrgar(arreglo);
// console.log(arreglo);

//Funciones-flecha---------------problemas02
const arreglos = (el, la) => {
  cant = 0;
  if (el.length == la.length) return true;
  else return false;
};

const arreglo1 = [1, 2, 3];
const arreglo2 = [7, 8, 5, 1];
console.log(arreglos(arreglo1, arreglo2));

const arreglo3 = [1, 2, 3];
const arreglo4 = [1, 2, 3];
console.log(arreglos(arreglo3, arreglo4));
