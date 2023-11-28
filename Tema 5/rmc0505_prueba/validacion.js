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
      return false;
    }
    else if(nombre.validity.patterMismatch){
      error(nombre,"Solo se permiten letras", "nombre");
    }
  }

  if(!grupo.checkValidity){
    if(grupo.validity.valueMissing){
      error(grupo, "Introduce el grupo", "grupo");
      return false;
    }
    else if(grupo.validity.patterMismatch){
      error(grupo, "Solo se permiten letras", "grupo");
      return false;
    }
  }
  return true;
}

function validarAnno(){

  let anno = document.getElementById("anno");
  if (!anno.checkValidity) {
    if(anno.validity.valueMissing){
      error(anno, "Introduce un año", "anno");
      return false
    }
    else if(anno.validity.patterMismatch){
      error(anno, "Formato incorrecto (AAAA)", "anno");
      return false;
    }
  }
  return true;
}

function validarEstante(){

  let estante = document.getElementById("localizacion");

  if(!estante.checkValidity){
    if(estante.value != "" && estante.validity.patterMismatch){
      error(estante, "Solo se permiten números", "estante");
      return false;
    }
  }
  return true;
}

function error(elemento, mensaje, tipo){

  elemento.className = "error";

  if(tipo == "nombre"){
    document.getElementById("avisoNombre").innerHTML = mensaje;
  }
  else if (tipo == "grupo") {
    document.getElementById("avisoGrupo").innerHTML = mensaje;
  }
  else if(tipo == "anno"){
    document.getElementById("avisoAnno").innerHTML = mensaje;
  }
  else{
    document.getElementById("avisoEstante").innerHTML = mensaje;
  }
}

function borrarError() {
  let formulario = document.forms[0];
  const AVISONOMBRE = document.getElementById("avisoNombre");
  const AVISOGRUPO = document.getElementById("avisoGrupo");
  const AVISOANNO = document.getElementById("avisoAnno");
  const AVISOESTANTE = document.getElementById("avisoEstante");
  let divs = ["nombre", "grupo", "anno", "estante"];

  AVISONOMBRE.innerHTML = "";
  AVISONOMBRE.className = "";

  AVISOGRUPO.innerHTML = "";
  AVISOGRUPO.className = "";
  
  AVISOANNO.innerHTML = "";
  AVISOANNO.className = "";

  AVISOESTANTE.innerHTML = "";
  AVISOESTANTE.className = "";

  for (let i = 0; i < formulario.elements.length; i++) {
    formulario.elements[i].className = "";
  }

  for (let j = 0; j < divs.length; j++) {
    document.getElementById(divs[j]).className = "";
  }
}
