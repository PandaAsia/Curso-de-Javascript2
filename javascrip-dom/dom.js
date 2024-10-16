let $btnBuscar = document.querySelector(".btn-buscar");

$btnBuscar.addEventListener("click", () => {
  let $parrafo = document.querySelector(".text-info").textContent;
  let $obtPlabra = document.querySelector("#parrafo").value;
  if ($parrafo.includes($obtPlabra)) {
    console.log(`La palabra "${$obtPlabra}" se encontró en el párrafo.`);
  } else {
    console.log(`La palabra "${$obtPlabra}" no se encontró en el párrafo.`);
  }
});

const listapellido = [
  "Tanaka ",
  "Yamada",
  "Nakamura",
  "Ishikawa",
  "Yamamoto",
  "Yamagawa",
  "Yoshida",
  "Suzuki",
  "Kimura",
  "Nishimura",
];
let $nombreBtn = document.querySelector(".btn-nombre");
$nombreBtn.addEventListener("click", () => {
  let $dato = document.querySelector(".text-nombre").value;
  let $nomParrafo = document.querySelector(".generar-nombre");
  // for (let i = 0; i < 5; i++) {
  //   let random = Math.floor(Math.random() * listapellido.length);
  //   console.log($dato + " " + listapellido[random]);
  //   $nomParrafo.innerHTML += $dato + " " + listapellido[random] + "<br>";
  // }
  listapellido.map((el) => {
    $nomParrafo.innerHTML += $dato + " " + el + "<br>";
  });
});
