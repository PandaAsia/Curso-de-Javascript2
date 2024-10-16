//white-------------------------------
// let num1 = 0;
// while (num1 <= 100) {
//   console.log(num1);
//   num1++;
// }
//white-------------------------------Problema01
// let num = parseInt(prompt("Ingrese la cantida de valor"));
// let num1 = 0;
// while (num1 <= num) {
//   console.log(num1);
//   num1++;
// }

//white-------------------------------Problema02

// let num1 = 1;
// let suma = 0;
// while (num1 <= 10) {
//   let num = parseInt(prompt("Ingrese la cantida de valor"));
//   suma = suma + num;
//   console.log(suma);
//   num1++;
// }

// let promedio = suma / 10;

// console.log(promedio);

//white-------------------------------Problema03

// let num = 1;
// let CantAprobado = 0;
// let CantDesaprobado = 0;
// while (num <= 10) {
//   let nota = parseInt(prompt("Ingrese la cantida de valor"));
//   if (nota >= 7) {
//     CantAprobado++;
//   } else {
//     CantDesaprobado++;
//   }
//   num++;
// }

// console.log("aprobados son " + CantAprobado);
// console.log("desaprobado " + CantDesaprobado);

//white-------------------------------Problema04

// let cantPersona = parseInt(prompt("Ingrese la cantida de pérsonas"));

// let num = 1;
// let Promedio = 0;
// let totalAltura = 0;

// while (num <= cantPersona) {
//   let altura = parseFloat(prompt("Ingrese la cantida de valor"));

//   totalAltura = totalAltura + altura;
//   num++;
// }

// Promedio = totalAltura / cantPersona;
// console.log("el promedio total es de " + Promedio);

//white-------------------------------Problema05

// let num = 1;
// let num2 = 11;
// while (num <= 25) {
//   console.log(num2);
//   num++;
//   num2 = num2 + 11;
// }

//white-------------------------------Problema06
// let num = 1;
// let num2 = 0;
// while (num2 < 500) {
//   num2 = num * 8;
//   console.log(num2);
//   num++;
// }
//white-------------------------------Problema07
// let cantNumero = parseFloat(prompt("Ingrese la cantida de valor"));
// let num = 1;
// let par = 0,
//   impar = 0;
// while (num <= cantNumero) {
//   let numero = parseFloat(prompt("Ingrese el valor"));
//   if (numero % 2 == 0) par++;
//   else impar++;
//   num++;
// }
// console.log(par);
// console.log(impar);

//white-------------------------------Problema08
let cantNumero = parseFloat(prompt("Ingrese la cantida de valor 1"));
let cantNumero2 = parseFloat(prompt("Ingrese la cantida de valor 2"));
if (cantNumero < cantNumero2) {
  while (cantNumero <= cantNumero2) {
    console.log(cantNumero);
    cantNumero++;
  }
} else {
  console.log("hay un error");
}
