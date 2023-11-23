document.getElementById("submit").addEventListener("click", validar, false);

function validarNombre() {
  let nombre = document.getElementById("nombre");

  if (!nombre.checkValidity()) {
    if (nombre.validity.valueMissing) {
      error(nombre, "Introduce un nombre");
    }
    if (
      document
        .getElementById("nombre")
        .addEventListener(
          "patterMismatch",
          error(nombre, "Solo se admiten letras")
        )
    );
  }
}

function validar(e) {
  borrarError();
  if (validarNombre() && validarContacto() && validarContrasena()) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(e, mensaje) {
  document.getElementById("aviso").innerHTML = mensaje;

  e.className = "error";
  e.focus();
}

function borrarError() {
  let formulario = document.forms("formulario");
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
