
//Eventos
window.addEventListener("texto", crearTexto, false);
window.addEventListener("password", crearPassword, false);
window.addEventListener("textarea", crearTextarea, false);
window.addEventListener("label", crearLabel, false);
window.addEventListener("imagen", crearImagen, false);
window.addEventListener("checkbox", crearCheckbox, false);
window.addEventListener("radio", crearRadio, false);
window.addEventListener("boton", crearBoton, false);


//Funciones

function crearTexto(){
    let nombre = prompt("Indique el nombre del input:");
    
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = nombre;
    confirm(`Se ha creado un input de tipo texto con el nombre de: ${nombre}`);
}
function crearPassword(){
    let contrasenna = prompt("Indique el nombre del input:");
    
    let inputContrasenna = document.createElement("input");
    inputContrasenna.type = "password";
    inputContrasenna.name = contrasenna;
    confirm(`Se ha creado un input de tipo password con el nombre de: ${contrasenna}`);

}
function crearTextarea(){

    let areaNomb = prompt("Indique el nombre del textarea:");

    let area = document.createElement("textarea");
    area.rows = "5";
    area.cols = "40";
    area.name = areaNomb;
    confirm(`Se ha creado un textarea con el nombre de: ${areaNomb}`);

}

function crearLabel(){

}
function crearImagen(){

}
function crearCheckbox(){

}
function crearRadio(){

}
function crearBoton(){

}