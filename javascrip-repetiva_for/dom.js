//For-------------------------------Problema01
// let cant = parseInt(prompt("Ingrese la cantidad"));
// let cantSuper = 0;

// for (let i = 0; i <= cant; i++) {
//   let base = parseInt(prompt("Ingrese la base"));
//   let altura = parseInt(prompt("Ingrese la altura"));
//   let superficie = (base * altura) / 2;
//   console.log(superficie);
//   if (superficie >= 12) {
//     cantSuper++;
//   }
// }
// console.log(cantSuper);

//For-------------------------------Problema02
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   let base = parseInt(prompt("Ingrese el numero"));
//   if (i > 5) {
//     sum = sum + base;
//   }
// }
// console.log("la suma de los ultimos 5 suma " + sum);

//For-------------------------------Problema03
// let num = 1;
// for (let i = 1; num < 50; i++) {
//   num = i * 5;
//   console.log(num);
// }

//For-------------------------------Problema04
// let base = parseInt(prompt("Ingrese el numero"));
// let num = 1;
// if (base <= 10 && base >= 1) {
//   for (let i = 1; i <= 13; i++) {
//     num = base * i;
//     console.log(num);
//   }
// } else {
//   console.log("error");
// }

//For-------------------------------Problema05
// let CantT = parseInt(prompt("Ingrese el numero"));
// let equilatero = 0,
//   isosceles = 0,
//   excalano = 0;

// for (let i = 1; i <= CantT; i++) {
//   let lado01 = parseInt(prompt("Ingrese el lado1"));
//   let lado02 = parseInt(prompt("Ingrese el lado2"));
//   let lado03 = parseInt(prompt("Ingrese el lado3"));
//   if (lado01 === lado02 && lado03 === lado02) equilatero++;
//   else if (lado01 === lado02 || lado01 === lado03 || lado02 === lado03)
//     isosceles++;
//   else excalano++;
// }
// console.log(equilatero);
// console.log(isosceles);
// console.log(excalano);

//For-------------------------------Problema06
// let positivo = 0;
// let negativo = 0;
// let pares = 0;
// let multiple = 0;
// for (let i = 1; i <= 10; i++) {
//   let CantT = parseInt(prompt("Ingrese el numero"));
//   if (CantT > 0) positivo++;
//   else if (CantT < 0) negativo++;
//   if (CantT % 2 == 0) pares = pares + CantT;
//   if (CantT % 15 == 0) multiple++;
// }

// console.log(positivo + " " + negativo);
// console.log(pares);
// console.log(multiple);

//For-OF-------------------------------Problema06
const carte = [
  [2, "diamantes"],
  [3, "triangulos"],
  [4, "Picas"],
  [5, "corazones"],
  [5, "picas"],
];

for (let elemento of carte) {
  console.log(elemento[1] + "cartas ");
}
