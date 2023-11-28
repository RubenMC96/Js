document.getElementById("enviar").addEventListener("click", validar, false);

function validar(e) {
  if (validarStrings() && validarAnno() && validarUbicacion()) {
    limpiarError();

    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

//Validacion de Nombre y grupo
function validarStrings() {
  let nombre = document.getElementById("nombre");
  let grupo = document.getElementById("grupo");

  if (!nombre.checkValidity()) {
    if (nombre.validity.valueMissing) {
      error(nombre, "El campo no puede estar vacío");
      return false;
    } else if (nombre.validity.patterMismatch) {
      error(
        nombre,
        "El nombre del disco tiene una longitud máxima de 20 caracteres"
      );
      return false;
    }
  }
  if (!grupo.checkValidity()) {
    if (grupo.validity.valueMissing) {
      error(grupo, "El campo no puede estar vacío");
      return false;
    } else if (grupo.validity.patterMismatch) {
      error(
        grupo,
        "El nombre del disco tiene una longitud máxima de 20 caracteres"
      );
      return false;
    }
  }

  return true;
}

//Validacion de año de publicación

function validarAnno() {
  let anno = document.getElementById("anno");

  if (!anno.checkValidity()) {
    if (anno.validity.valueMissing) {
      error(anno, "El campo no puede estar vacío");
    }
    if (anno.validity.patterMismatch) {
      error(anno, "El año de publicación debe de tener 4 dígitos");
    }
  }
  return true;
}

//Modificacion del CSS

function limpiarError() {
  var formulario = document.forms[0];
  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}

function error(e, mensaje) {
  document.getElementById("aviso").innerHTML = mensaje;
  e.className = "error";
  e.focus();
}
