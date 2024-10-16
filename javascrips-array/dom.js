//array-------------------------------Problema01
// const altura = [1.55, 1.6, 1.8, 1.85, 1.75];
// let suma = 0,
//   promedio = 0,
//   altos = 0,
//   bajos = 0;

// altura.forEach((el) => (suma = suma + el));

// promedio = suma / altura.length;

// altura.forEach((el) => {
//   if (promedio < el) altos++;
//   else if (promedio > el) bajos++;
// });

// console.log("promedio " + promedio);
// console.log("altos " + altos);
// console.log("bajos " + bajos);

//array-------------------------------Problema02
// const mania = [];
// const noche = [];
// let totalM = 0,
//   totalN = 0;
// for (let i = 0; i < 8; i++) {
//   if (i < 3) {
//     let sueldo = parseInt(prompt("Ingrese el sueldo de la mañana"));
//     mania.push(sueldo);
//     totalM = totalM + sueldo;
//   } else {
//     let sueldo = parseInt(prompt("Ingrese el sueldo de la noche"));
//     noche.push(sueldo);
//     totalN = totalN + sueldo;
//   }
// }

// mania.forEach((el, index) => {
//   console.log(index + "sueldo de la mañana" + el);
// });

// console.log("sueldo total de la mañana" + totalM);

// noche.forEach((el, index) => {
//   console.log(index + "sueldo de la la noche" + el);
// });

// console.log("sueldo total de la mañana" + totalN);

//array-------------------------------Problema03
// const edades = [];
// let totalEd = 0,
//   mayor = 0,
//   viejo = 0;
// for (let i = 0; i < 8; i++) {
//   let edad = parseInt(prompt("Ingrese la edad"));
//   edades.push(edad);
//   totalEd = totalEd + edad;
//   if (edad > 36) mayor++;
//   if (edad > 50) viejo++;
// }

// edades.forEach((el, index) => {
//   console.log(index + "edad de " + el);
// });

// console.log("todas las edades " + totalEd);
// console.log("mayor a 36 " + mayor);
// console.log("mayor a 50 " + viejo);

//array-------------------------------Problema04
// const list1 = [];
// const list2 = [];
// const list3 = [];

// for (let i = 0; i < 8; i++) {
//   if (i < 4) {
//     let lis1 = parseInt(prompt("Ingrese la datos lista 1"));
//     list1.push(lis1);
//   } else {
//     let lis2 = parseInt(prompt("Ingrese la datos lista 2"));
//     list2.push(lis2);
//   }
// }

// list1.forEach((el, index) => {
//   let suma = el + list2[index];
//   list3.push(suma);
// });

// console.log(list1);
// console.log(list2);
// console.log(list3);

//array-------------------------------Problema05
// const alumA = [13, 12, 15, 9, 14];
// const alumB = [15, 16, 17, 16, 5, 9, 17, 18];

// let promedioA = 0,
//   promedioB = 0;

// alumA.forEach((el) => {
//   promedioA = promedioA + el;
// });
// alumB.forEach((el) => {
//   promedioB = promedioB + el;
// });

// promedioA = promedioA / alumA.length;
// promedioB = promedioB / alumB.length;

// if (promedioA > promedioB) {
//   console.log("el mayor es la a");
// } else {
//   console.log("el mayor es la b");
// }

//array-------------------------------Problema06
// const list = [];
// let valor = true;
// let num = 0;

// for (let i = 0; i < 8; i++) {
//   let dato = parseInt(prompt("Ingrese el dato"));
//   list.push(dato);
// }

// list.forEach((el, index) => {
//   if (el > num) {
//     num = el;
//   } else if (el < num) {
//     valor = false;
//   }
// });

// if (valor) {
//   console.log("esta ordenaod del menor a mayor");
//   console.log(list);
// } else {
//   console.log("no esta ordenaod del menor a mayor");
//   console.log(list);
// }

//array-------------------------------Problema07
// const listSueldo = [];
// let num = parseInt(prompt("Ingrese la cantidad"));
// let sumaT = 0,
//   promedio = 0;
// for (let i = 0; i < num; i++) {
//   let dato = parseInt(prompt("Ingrese la sueldo"));
//   listSueldo.push(dato);
// }

// listSueldo.forEach((el, index) => {
//   console.log(index + " su sueldo es " + el);
//   sumaT = sumaT + el;
// });

// promedio = sumaT / listSueldo.length;
// console.log("el promedio de los sueldo es " + promedio);

//array-Paraleos-------------------------------Problema01
// const listnombre = [];
// const listSueldo = [];

// for (let i = 0; i < 4; i++) {
//   nombre = prompt("Ingrese el nombre del empleado");
//   listnombre.push(nombre);
//   sueldo = parseInt(prompt("Ingrese el sueldo del empleado"));
//   listSueldo.push(sueldo);
// }

// nombre2 = prompt("Ingrese el nombre de un empleado");

// listnombre.forEach((el, index) => {
//   if (nombre2 === el) {
//     console.log(
//       "el nombre del empleado que busca es " +
//         el +
//         " que tiene como sueldo" +
//         listSueldo[index]
//     );
//   }
// });

// console.log(listnombre);
// console.log(listSueldo);

//array-Paraleos-------------------------------Problema02
// const list = [];
// let temp = 0,
//   valor = 0;

// for (let i = 0; i < 6; i++) {
//   dato = parseInt(prompt("Ingrese el valor"));
//   list.push(dato);
// }

// list.forEach((el, index) => {
//   if (el > temp) {
//     temp = el;
//     valor = index;
//   }
// });

// console.log("el valor mayor es " + temp + " con su indice " + valor);
// console.log(list);

//array-Paraleos-------------------------------Problema03

// const list1 = [];
// let menor = 0;
// let valor = true;
// let num = parseInt(prompt("Ingrese el numero"));
// for (let i = 0; i < num; i++) {
//   let dato = parseInt(prompt("ingrese el valor"));
//   list1.push(dato);
//   if (i == 0) {
//     menor = dato;
//   } else if (menor >= dato) {
//     if (menor === dato) valor = true;
//     else valor = false;
//     menor = dato;
//   }
// }

// console.log("el numero menor es " + menor);

// if (valor) {
//   console.log("el numero se repite");
// }

// console.log(list1);

//array-Paraleos-------------------------------Problema04
// const list = [];
// let temp;
// for (let i = 0; i < 5; i++) {
//   dato = prompt("ingresa el nomnbre");
//   list.push(dato);
// }
// temp = list[0];
// list.forEach((el) => {
//   if (temp > el) {
//     temp = el;
//   }
// });

// console.log("el nombre menor " + temp);

// //array-Paraleos-------------------------------Problema05
// const listaPais = ["Paraguay", "Brasil", "España", "Chile", "Honduras"];
// let temp = 0;
// let aux = 0;

// console.log(listaPais);

// for (let i = 0; i < listaPais.length - 1; i++) {
//   for (let h = 0; h < listaPais.length - 1; h++) {
//     if (listaPais[h] > listaPais[h + 1]) {
//       temp = listaPais[h];
//       listaPais[h] = listaPais[h + 1];
//       listaPais[h + 1] = temp;
//     }
//   }
// }

// console.log(listaPais);

// //array-Paraleos-------------------------------Problema06

// const clubes = ["Rivel", "Boca", "Belgrano", "Talleres"];
// const puntos = [15, 12, 17, 14];
// let temp = 0,
//   aux = 0;

// puntos.forEach((el, index) => {
//   console.log(el + " " + clubes[index]);
// });

// for (let h = 0; h < clubes.length; h++) {
//   for (let i = 0; i < puntos.length - 1; i++) {
//     if (puntos[i] < puntos[i + 1]) {
//       temp = puntos[i];
//       puntos[i] = puntos[i + 1];
//       puntos[i + 1] = temp;
//       aux = clubes[i];
//       clubes[i] = clubes[i + 1];
//       clubes[i + 1] = aux;
//     }
//   }
// }

// puntos.forEach((el, index) => {
//   console.log(el + " " + clubes[index]);
// });

//array-aninados-------------------------------Problema06
// const clubes = [
//   ["River", 15],
//   ["Boca", 12],
//   ["Belgrano", 17],
//   ["Talleres", 14],
// ];
// let temp = 0;
// let aux = 0;

// for (let i = 0; i < clubes.length - 1; i++) {
//   for (let h = 0; h < clubes.length - 1; h++) {
//     if (clubes[h][1] < clubes[h + 1][1]) {
//       temp = clubes[h];
//       clubes[h] = clubes[h + 1];
//       clubes[h + 1] = temp;
//     }
//   }
// }

// console.log(clubes);
