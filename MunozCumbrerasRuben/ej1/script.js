document.getElementById("enviar").addEventListener("click", validar, false);

function validarNombre() {
  let nombre = document.getElementById("nombre");

  if (!nombre.checkValidity) {
    if (nombre.validity.valueMissing) {
      error(nombre, "El Nombre no puede ser vacío");
    }
    if (nombre.validity.patternMismatch) {
      error(nombre, "El nombre ha de contener entre 5 y 20 caracteres");
    }

    if (nombre.validity.rangeOverflow) {
      error(nombre, "El nombre debe ser menor de 5");
    }
    if (nombre.validity.rangeUnderflow) {
      error(nombre, "El nombre debe ser menor de 20");
    }
  }
}

function validarApellido() {
  let apellidos = document.getElementById("apellidos");

  if (!apellidos.checkValidity) {
    if (apellidos.validity.valueMissing) {
      error(apellidos, "El Apellido no puede ser vacío");
    }
    if (apellidos.validity.patternMismatch) {
      error(apellidos, "El Apellido ha de contener entre 2 y 50 caracteres");
    }

    if (apellidos.validity.rangeOverflow) {
      error(apellidos, "El Apellido debe ser menor de 2");
    }
    if (apellidos.validity.rangeUnderflow) {
      error(apellidos, "El Apellido debe ser menor de 50");
    }
  }
}

function validarEmail() {
  let email = document.getElementById("email");

  if (!email.checkValidity) {
    if (email.validity.valueMissing) {
      error(email, "El correo no puede ser vacío");
    }

    let regExtEMAIL = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3,4})+$/;

    if (regExtEMAIL.test(email.value)) {
      return true;
    } else {
      error(email, "El correo no tiene el formato correcto");
      return false;
    }
  }
}

function validarContrasena() {
  let contrasena = document.getElementById("contrasena");

  if (!contrasena.checkValidity) {
    if (contrasena.validity.valueMissing) {
      error(contrasena, "La contraseña no puede estar vacía");
    }
  }
}

function validarAceptar() {
  let aceptar = document.getElementById("aceptar");
  if (!aceptar.checked) {
    error(aceptar, "Debe de aceptar las condiciones");
    return false;
  }
  return true;
}

function validar(e) {
  limpiarError();

  if (
    validarNombre() &&
    validarApellido() &&
    validarEmail() &&
    validarContrasena() &&
    validarAceptar()
  ) {
    alert(`Datos de ${nombre} ${apellidos} registrados correctamente`);
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento, mensaje) {
  elemento.className = "error";

  switch (elemento.id) {
    case "nombre":
      document.getElementById("avisoNombre").innerHTML = mensaje;
      elemento.focus();
      break;

    case "apellidos":
      document.getElementById("avisoApellido").innerHTML = mensaje;
      elemento.focus();
      break;

    case "email":
      document.getElementById("avisoEmail").innerHTML = mensaje;
      elemento.focus();
      break;

    case "contrasena":
      document.getElementById("avisoContrasena").innerHTML = mensaje;
      elemento.focus();

    case "enviar":
      document.getElementById("avisoAceptar").innerHTML = mensaje;
      document.getElementById("avisoAceptar").className = "errorAceptar";
      elemento.focus();
  }
}

function limpiarError() {
  var formulario = document.forms[0];
  for (var i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
