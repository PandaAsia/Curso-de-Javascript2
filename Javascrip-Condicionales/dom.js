//IF---------------------

// let sueldo = parseInt(prompt("Ingrese el sueldo"));
// if (sueldo > 3000) {
//   console.log("Esta persona debe abonar impuesto");
// }

// let num1 = parseInt(prompt("Ingrese el primer Numero"));
// let num2 = parseInt(prompt("Ingrese el segundo Numero"));

// if (num1 != num2) {
//   let suma = num1 + num2;
//   console.log(suma);
// }

// let buscador = prompt("Ingreso el buscador");
// if (buscador == "google") {
//   location.href = "https://www.google.com.pe/?hl=es";
// } else if (buscador == "bing") {
//   location.href = "https://www.bing.com/?setlang=es";
// } else if (buscador == "yahoo") {
//   location.href = "https://espanol.yahoo.com/?p=us";
// }

//IF-ELSE--------------------
// let num1 = parseInt(prompt("Ingrese el primer Numero"));
// let num2 = parseInt(prompt("Ingrese el segundo Numero"));

// if (num1 > num2) {
//   console.log("el numero mayor es el primero " + num1);
// } else {
//   console.log("el numero mayor es el segundo " + num2);
// }

// let num = parseInt(prompt("Ingrese el Numero"));
// if (num > 10) {
//   console.log("el numero tiene dos digitos");
// } else {
//   console.log("el numero tiene 1 digito");
// }

//IF-ELSE--------------------Problema01

// let nota01 = parseInt(prompt("Nota 01"));
// let nota02 = parseInt(prompt("Nota 02"));
// let nota03 = parseInt(prompt("Nota 03"));

// let Promedio = (nota01 + nota02 + nota03) / 3;
// if (Promedio >= 7) {
//   console.log("Promocionado");
//   console.log(Promedio);
// } else {
//   console.log("Reprobado");
// }

//IF-ELSE--------------------Problema02
// let num1 = parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));

// if (num1 > num2) {
//   let suma = num1 + num2;
//   let resta = num1 - num2;
//   console.log(suma + " " + resta);
// } else {
//   let prodcuto = num1 * num2;
//   let deivicion = num2 / num1;
//   console.log(prodcuto + " " + deivicion);
// }

//IF-ELSE--------------------Problema03
// let nombre = prompt("Ingrese el nombre");
// let edad = parseInt(prompt("Ingrese su edad"));
// if (edad > 18) {
//   console.log("Puede ingresar al local");
// } else {
//   console.log("eres menor de edad no puede ingresar");
// }

//IF-ELSE--------------------Problema04
// let num01 = parseInt(prompt("Ingrese el primer numero"));
// let num02 = parseInt(prompt("Ingrese el segundo numero"));
// 20020;
// if (num02 <= 0) {
//   console.log("no se puede efectuar la division");
// } else {
//   let divi = num01 / num02;
//   console.log(divi);
// }

//IF-ELSE--------------------Problema05
// let precioProducto = parseInt(prompt("Ingrese el precio de un producto"));
// let descuento, pagaTotal;

// if (precioProducto >= 250) {
//   descuento = precioProducto * 0.1;
//   pagaTotal = precioProducto - descuento;
//   console.log(pagaTotal);
// } else {
//   descuento = precioProducto * 0.05;
//   pagaTotal = precioProducto - descuento;
//   console.log(pagaTotal);
// }

//IF-IF-ELSE-------------------------------

// let nota01 = parseInt(prompt("Nota 01"));
// let nota02 = parseInt(prompt("Nota 02"));
// let nota03 = parseInt(prompt("Nota 03"));
// let Promedio = (nota01 + nota02 + nota03) / 3;
// if (Promedio >= 7) {
//   console.log("Promocionado");
// } else if (Promedio >= 4 && Promedio < 7) {
//   console.log("regular");
// } else {
//   console.log("Reporbado");
// }

//IF-IF-ELSE-------------------------------Problema01
// let num = parseInt(prompt("ingrese el valor"));
// if (num == 0) {
//   console.log("nulo");
// } else if (num > 0) {
//   console.log("positivo");
// } else {
//   console.log("negativo");
// }

//IF-IF-ELSE-------------------------------Problema02

// let num1 = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));
// let num3 = parseInt(prompt("Ingrese el valor 3"));

// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(num1);
//   } else {
//     console.log(num3);
//   }
// } else if (num2 > num3) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

//IF-IF-ELSE-------------------------------Problema03

// let num = parseInt(prompt("Ingrese el valor"));
// if (num >= 1 && num <= 9) {
//   console.log("tiene una cifra");
// } else if (num >= 10 && num <= 99) {
//   console.log("tiene dos cifra");
// } else if (num > 100 && num <= 999) {
//   console.log("el numero tiene tres cifras");
// } else {
//   console.log("no se encontro un cantidad de cifras");
// }

//IF-IF-ELSE-------------------------------Problema04

// let cantPreguntas = parseInt(prompt("Ingrese la cantidad de preguntas"));
// let cantRespuesta = parseInt(prompt("Ingrese la pregunatas contestadas"));

// let Procentaje = (cantRespuesta / cantPreguntas) * 100;
// if (Procentaje <= 50) {
//   console.log("fuera de nivel");
// } else if (Procentaje >= 50 && Procentaje < 75) {
//   console.log("Nivel regular");
// } else if (Procentaje >= 75 && Procentaje < 90) {
//   console.log("Nivel medio");
// } else {
//   console.log("Nivel maximo");
// }

//IF-IF-ELSE-------------------------------Problema05

// let palabraClave = prompt(
//   "Ingrese por teclado la siguientes palabra: let, if o else"
// );
// if (palabraClave == "if") console.log("palabra clave de javascript");
// else if (palabraClave == "let") console.log("palabra clave de javascript");
// else if (palabraClave == "else") console.log("palabra clave de javascript");
// else console.log("no es una palabra clave de javascript");

//IF-IF-ELSE-------------------------------Problema06

// let altura = parseFloat(prompt("ingrese un altura de programacion"));
// if (altura < 1.6) console.log("baja");
// else if (altura > 1.6 && altura < 1.9) console.log("normal");
// else console.log("alta");

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------

// let num1 = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));
// let num3 = parseInt(prompt("Ingrese el valor 3"));

// if (num1 > num2 && num1 > num3) {
//   console.log(num1);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA01

// let dia = parseInt(prompt("Ingrese el dia"));
// let mes = parseInt(prompt("Ingrese el mes"));
// let anio = parseInt(prompt("Ingrese el año"));

// if (mes == 1 || mes == 2 || mes == 3) {
//   console.log("esta una el el primer semestre");
// } else console.log("no lo esta en el primer semestre");

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA02
// let dia = parseInt(prompt("Ingrese el dia"));
// let mes = parseInt(prompt("Ingrese el mes"));
// let anio = parseInt(prompt("Ingrese el año"));

// if (dia == 25 && mes == 12) {
//   console.log("esta en navidad");
// }

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA03
// let num1 = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));
// let num3 = parseInt(prompt("Ingrese el valor 3"));

// if (num1 == num2 && num2 == num3) {
//   console.log("los numeros son iguales");
// } else console.log("no son iguales los tres valores");

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA04

// let num1 = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));
// let num3 = parseInt(prompt("Ingrese el valor 3"));

// if (num1 < 10 && num2 < 10 && num3 < 10)
//   console.log("los numeros son menores a 10");
// else console.log("los numeros son mayor que 10");

// if (num1 < 10 || num2 < 10 || num3 < 10)
//   console.log("uno de los numeros son menores a 10");
// else console.log("los numeros son mayor que 10");

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA05
// let x = parseInt(prompt("Ingrese el valor x"));
// let y = parseInt(prompt("Ingrese el valor y"));

// if (x > 0 && y > 0) console.log("cuadrante 1");
// else if (x < 0 && y > 0) console.log("cuadrante 2");
// else if (x < 0 && y < 0) console.log("cuadrante 3");
// else if (x > 0 && y < 0) console.log("cuadrante 4");

//IF-IF-ELSE (OPERADORES LOGICOS)-------------------------------PROBLEMA05
// let num1 = parseInt(prompt("Ingrese el valor 1"));
// let num2 = parseInt(prompt("Ingrese el valor 2"));
// let num3 = parseInt(prompt("Ingrese el valor 3"));

// if (num1 > num2 && num1 > num3) console.log("mayor ES " + num1);
// else if (num2 > num1 && num2 > num3) console.log("mayor ES " + num2);
// else if (num3 > num1 && num3 > num1) console.log("mayor ES " + num315);
// if (num1 < num2 && num1 < num3) console.log("menor ES " + num1);
// else if (num2 < num1 && num2 < num3) console.log("menor ES " + num2);
// else if (num3 < num1 && num3 < num1) console.log("menor ES " + num3);

let comida = prompt("ingrese pollo o tallarines");
let postre = prompt("ingrese helado o flan");
let Precio;
if (comida == "pollo") Precio = 7;
else if (comida == "tallarines") Precio = 4;
if (postre == "helado") Precio = Precio + 3;
else if (postre == "flan") Precio = Precio + 2;

console.log("el monto a pagar es de " + Precio);
