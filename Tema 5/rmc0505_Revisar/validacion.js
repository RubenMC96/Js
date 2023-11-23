window.addEventListener("load", iniciar);

function iniciar(){
   
  document.getElementById("add").addEventListener("click", validar, false);
}
 
 //Validacion de Nombre y grupo
 function validarStrings() {
   let nombre = document.getElementById("nombre");
   let grupo = document.getElementById("grupo");
   limpiarError(nombre);
   limpiarError(grupo);
 
   if(!nombre.checkValidity()){
     if (nombre.validity.valueMissing) {
       error(nombre, "El campo no puede estar vacío");
       return false;
     } else if (nombre.validity.patterMismatch) {
       error(nombre,"El nombre del disco tiene una longitud máxima de 20 caracteres");
       return false;
     }
   }
   if(!grupo.checkValidity()){
     if (grupo.validity.valueMissing) {
       error(grupo, "El campo no puede estar vacío");
       return false;
     } else if (grupo.validity.patterMismatch) {
       error(grupo,"El nombre del disco tiene una longitud máxima de 20 caracteres");
       return false;
     }
   }
 
   return true;
 }
 
 //Validacion de año de publicación
 
 function validarAnno() {
   let anno = document.getElementById("anno");
 
   limpiarError(anno);
 
   if(!anno.checkValidity()){
     if(anno.validity.valueMissing){
       error(anno,"El campo no puede estar vacío");
     }
     if(anno.validity.patterMismatch){
       error(anno, "El año de publicación debe de tener 4 dígitos")
     }
   }
   return true;
 }
 
 //Modificacion del CSS
 
 function limpiarError(e) {
   e.className = "";
 }
 
 function error(e, mensaje) {
   document.getElementById("aviso").innerHTML = mensaje;
   e.className = "error";
   e.focus();
 }

 function validar(e){
  if(validarStrings()&& validarAnno()){
    return true;
  }
  else{
    e.preventDefault();
    return false;
  }
 }