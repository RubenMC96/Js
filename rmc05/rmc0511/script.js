const BOTON = document.getElementById("miBoton");

BOTON.addEventListener("mouseover", function () {

  let posicionSup = Math.floor(Math.random() * window.innerHeight);
  let posicionIzq = Math.floor(Math.random() * window.innerWidth);

  BOTON.style.position = "absolute";
  BOTON.style.top = posicionSup + "px";
  BOTON.style.left = posicionIzq + "px";
});