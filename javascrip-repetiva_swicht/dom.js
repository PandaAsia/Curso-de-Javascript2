//switch-------------------------------Problema01
let num = parseInt(prompt("ingrese el numero de la semana"));

if (num <= 7 && num >= 1) {
  switch (num) {
    case 1:
      console.log("lunes");
      break;
    case 2:
      console.log("martes");
      break;
    case 3:
      console.log("miercoles");
      break;
    case 4:
      console.log("jueves");
      break;
    case 5:
      console.log("viernes");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;
  }
}
