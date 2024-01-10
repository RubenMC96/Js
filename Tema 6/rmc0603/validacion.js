

document.getElementById("enviar").addEventListener("click", validar, false);

function validar(e){
  borrarError();
  

  if(validarString() && validarAnno() && validarEstante()){

    return true;
  }
  else{
    e.preventDefault();
    return false
  }
}

function validarString(){

  let nombre = document.getElementById("nombre");
  let grupo = document.getElementById("grupo");

  if(!nombre.checkValidity){

    if( nombre.validity.valueMissing){
      error(nombre, "Introduce un nombre", "nombre");
      
    }
    else if(nombre.validity.patterMismatch){
      error(nombre,"Solo se permiten letras", "nombre");
    }
    return false;
  }

  if(!grupo.checkValidity){
    if(grupo.validity.valueMissing){
      error(grupo, "Introduce el grupo", "grupo");
      
    }
    else if(grupo.validity.patterMismatch){
      error(grupo, "Solo se permiten letras", "grupo");
      
    }
    return false;
  }
  return true;
}

function validarAnno() {
  let elemento = document.getElementById("anno");

  if (!elemento.checkValidity()) {
    if (elemento.validity.rangeOverflow) {
      error(
        elemento,
        "El año de publicación no puede ser mayor a 2023"
      );
    }

    if (elemento.validity.rangeUnderflow) {
      error(elemento, "El año de publicación debe de ser mayor de 0");
    }

    return false;
  }

  return true;
}

function validarEstante(){

  let estante = document.getElementById("localizacion");

  if(!estante.checkValidity){
    if(estante.validity.patterMismatch){
      error(estante, "Solo se permiten números o una cadena vacía");  
    }
    return false;
  }
  return true;
}

function error(elemento, mensaje){

  elemento.className = "error";

  
      document.getElementById("aviso").innerHTML = mensaje;
      document.getElementById("aviso").className = "mensajeError";
      elemento.focus();
      
}


function borrarError() {
  let formulario = document.forms[0];
  const mensajeError = document.getElementById("aviso");
  let divs = ["nombre", "grupo", "anno", "localizacion"];

  mensajeError.innerHTML = "";
  mensajeError.className = "";

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < divs.length; j++) {
    document.getElementById(divs[j]).className = "";
  }
}