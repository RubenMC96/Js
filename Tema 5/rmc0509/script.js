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

  if (regExtTlf.test(contacto) || regExtEmail.test(contacto)) {
    return true;
  } else {
    error(contacto, "Formato no válido", "contacto");
  }
}

function validarNombre() {
  let nombre = document.getElementById("nombre");

  if (!nombre.checkValidity()) {
    if (nombre.validity.patternMismatch) {
      error(nombre, "Solo se admiten letras", "nombre");
      return false;
    }
  }
  return true;
}

function validarContrasena() {
  /*Para validar tenemos que evaluar que sean*/
  let contrasena1 = document.getElementById("contrasena1");
  let contrasena2 = document.getElementById("contrasena2");

  if (!contrasena1.checkValidity()) {
    if (contrasena1.validity.patternMismatch) {
      error(contrasena1, "No se admiten caracteres especiales", "contrasena");
      return false;
    }
  }
  if(contrasena1.value.toString() === contrasena2.value.toString()){
    return true;
  }
  else{
    error(contrasena1, "Las contraseñas no coinciden", "contrasena");
    return false;
  }
}

function error(e, mensaje, tipo) {

  if(tipo == "nombre"){
    document.getElementById("avisoNombre").innerHTML = mensaje;
    e.style.display = "block";
  }
  else if(tipo == "contacto"){
    document.getElementById("avisoContacto").innerHTML = mensaje;
    e.style.display = "block";
  }
  else{
    document.getElementById("avisoContrasena").innerHTML = mensaje;
    e.style.display = "block";
    let aviso = document.getElementById("aviso");
    aviso.style.display = "none";
  }

 

  e.className = "error";
  e.focus();
}

function borrarError() {
  let formulario = document.forms[0];
  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }
}
