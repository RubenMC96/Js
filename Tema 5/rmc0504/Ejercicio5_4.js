let arr = [];
function cargar() {
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 100 + 1);
    arr.push(num);
  }
}
cargar();

let arrShow = [...arr];
document.getElementById("show").innerHTML = arrShow
  .sort(function (a, b) {
    return a - b;
  })
  .join(",");

let raton = document.getElementById("orden");

raton.addEventListener("mouseover", showOriginal);
function showOriginal() {
  document.getElementById("orden").innerHTML = "Ver ordenado de menor a mayor";
  document.getElementById("show").innerHTML = arr.join(",");
}
raton.addEventListener("mouseleave", showOrden);
function showOrden() {
  document.getElementById("orden").innerHTML = "Ver en orden de aparicion";
  document.getElementById("show").innerHTML = arrShow.join(",");
}
