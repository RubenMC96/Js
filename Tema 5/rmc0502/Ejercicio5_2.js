window.addEventListener("load", inicio);

function inicio() {
  let botonInicio = document.getElementById("inicio");
  let botonPausa = document.getElementById("parada");

  function saludar() {
    let span = document.createElement("span");
    document.body.appendChild(span);

    span.innerHTML = "Hola";
  }

  let interval;

  botonInicio.addEventListener("click", function () {
    interval = setInterval(saludar, 3000);
  });

  botonPausa.addEventListener("click", function () {
    clearInterval(interval);
  });
}
