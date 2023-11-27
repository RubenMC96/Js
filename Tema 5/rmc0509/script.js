document.getElementById("enviar").addEventListener("click", validar);

function validar(e) {
  borrarError();
  if (validarNombre() && validarContacto() && validarContrasena()) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}
function validarContacto() {
  let contacto = document.getElementById("contacto");
  let regExtTlf = /^\d{9}$/;
  let regExtEmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3,4})+$/; //regExt para evaluar un email

  if (regExtTlf.test(contacto) || regExtEmail.test(email)) {
    return true;
  } else {
    error(contacto, "Formato no válido");
  }
}

function validarNombre() {
  let nombre = document.getElementById("nombre");

  if (!nombre.checkValidity()) {
    if (nombre.validity.valueMissing) {
      error(nombre, "Introduce un nombre");
      return false;
    }
    if (nombre.validity.patternMismatch) {
      error(nombre, "Solo se admiten letras");
      return false;
    }
  }
  return true;
}

function validarContrasena() {
  /*Para validar tenemos que evaluar que sean*/
  let contrasena1 = document.getElementById("contrasena1");
  let contrasena2 = document.getElementById("contrasena2");
}

function error(e, mensaje) {
  document.getElementById("aviso").innerHTML = mensaje;

  e.className = "error";
  e.focus();
}

function borrarError() {
  let formulario = document.forms[0];
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
