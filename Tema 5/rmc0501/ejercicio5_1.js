// Obtener el elemento HTML que mostrará la posición del ratón
var posicionElement = document.getElementById("posicion");

// Función para actualizar la posición del ratón en el elemento HTML
function actualizarPosicion(event) {
  var posX = event.clientX;
  var posY = event.clientY;
  posicionElement.textContent = "Posición del ratón: " + posX + ", " + posY;
}

// Agregar el evento "mousemove" al documento
document.addEventListener("mousemove", actualizarPosicion);
