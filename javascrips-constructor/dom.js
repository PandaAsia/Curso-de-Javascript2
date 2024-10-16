//constructor------------------------
// function consts(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.imprimir = () => {
//     console.log("nombre es " + nombre + " con la edad de " + edad);
//   };
// }

// const persona = [];

// persona.push(new consts("shana", "yamato", 15));
// persona.push(new consts("luis", "vela", 27));
// persona.push(new consts("axel", "indigoye", 25));

// console.log(persona);
// for (let pers of persona) {
//   pers.imprimir();
// }
//constructor------------------------pro2
// function consttuc(clave, nombre) {
//   this.clave = clave;
//   this.nombre = nombre;
//   this.impriir = () => {
//     console.log("su clave es de " + clave + " su nombre es de " + nombre);
//   };
// }

// const persona = [];
// while (persona.length != 3) {
//   let id = 1;
//   let data = prompt("Ingrese el nombre");
//   if (persona.some((el) => el == data)) {
//     console.log("ya exite ese usurio");
//   } else {
//     persona.push(new consttuc(id, data));
//     id++;
//   }
// }

// persona.forEach((el) => {
//   el.impriir();
// });

//constructor------------------------pro3
function dados(dato) {
  this.dados = dato;
  this.imprimir = () => {
    console.log(this.dados);
  };
}

let listdado = [];
while (listdado.length != 5) {
  let dato = Math.floor(Math.random() * 6) + 1;
  listdado.push(new dados(dato));
}

for (let list of listdado) {
  list.imprimir();
}
