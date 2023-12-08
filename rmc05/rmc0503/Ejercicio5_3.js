let inicio = document.getElementById("nif");

let arr = [
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
let letra;

function Dni() {
  let nif = document.getElementById("nif").value;
  let num = parseInt(nif);
  let numLetra = num % 23;
  letra = arr[numLetra];
}

function calc() {
  Dni();
  document.getElementById("letra").value = letra;
}

inicio.addEventListener("input", calc);
