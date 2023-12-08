document.getElementById("enviar").addEventListener("click", validar, false);

let nombreUsuario = localStorage.getItem("nombreUsuario");
if (nombreUsuario) {
  document.getElementById("nombre").value = nombreUsuario;
}

function validar(e){

  if(validarNombre() && validarContacto() && validarContrasena()){
    
    limpiarError(e);

    localStorage.setItem(
      "nombreUsuario",
      document.getElementById("nombre").value
    ); 
    alert("El formulario se ha enviado");
    
    return true;
  }
  else{

    e.preventDefault();
    return false;
  }
}

function validarNombre(){
  let nombre = document.getElementById("nombre");

  if(!nombre.checkValidity()){
    if(nombre.validity.pattermismatch){//mismatch da true si encuentra que NO se cumple el patter del HTML
      
      error(nombre, "El nombre solo admite letras MAYÚSCULAS y minúsculas", "nombre");

      return false;
    } 
  }
  return true;
}

function validarContacto(){
  let contacto = document.getElementById("contacto");

  let regExtTLF = /^\d{9}$/;
  let regExtEMAIL = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3,4})+$/;

  if(regExtTLF.test(contacto) || regExtEMAIL.test(contacto)){
    return true;
  }
  else {
    error(contacto,"Ingrese un numero de telefono o correo electronico valido. El telefono debe de contener 9 dígitos y el correo un cominio válido.", "contacto");
    return false;
    }
}

function validarContrasena(){
  let contrasena1 = document.getElementById("contrasena1");
  let contrasena2 = document.getElementById("contrasena2");

  if(contrasena1.validity.pattermismatch){
    
    error(contrasena1, "Introduce una contraseña válida");
    
    return false;
  }

  if(contrasena1.value.toString() !== contrasena2.value.toString()){
    
    error(contrasena1, "Las contraseñas no coinciden", "contrasena");

    return false;
  }

  return true;
}





function error(elemento, mensaje, tipo){

elemento.className = "error";

if(tipo.toString() == "nombre"){

  document.getElementById("avisoNombre").innerHTML = mensaje;

}
else if( tipo.toString() == "contacto"){

  document.getElementById("avisoContacto").innerHTML = mensaje;

}
else{

  document.getElementById("avisoContrasena").innerHTML = mensaje;

}


}

function limpiarError(elemento){
  elemento.className = "";
}

