let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
let numList = [];

window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("show");

  document.getElementById("enviar").addEventListener("click", ejecuta, true);
}

function ejecuta() {
  let letra = document.getElementById("letra").value.toUpperCase();

  let posicion = letras.indexOf(letra);

  for (let i = 1; i <= 999; i++) {
    if (i % 23 == posicion) {
      if (i < 10) {
        numList.push("00" + i);
      } else if (i < 100) {
        numList.push("0" + i);
      } else {
        numList.push(i);
      }
    }
  }

  document.getElementById("show").innerHTML =
    "Los dnis con la letra " + letra + " : " + numList.toString();
  numList.splice(0); // Borra todo el array
  //Linea: 57 T4
}
// Number.parseInt(i)
