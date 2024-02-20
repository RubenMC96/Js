
//Eventos
document.getElementById("texto").addEventListener("click", crearTexto, false);
document.getElementById("password").addEventListener("click", crearPassword, false);
document.getElementById("textarea").addEventListener("click", crearTextarea, false);
document.getElementById("label").addEventListener("click", crearLabel, false);
document.getElementById("imagen").addEventListener("click", crearImagen, false);
document.getElementById("checkbox").addEventListener("click", crearCheckbox, false);
document.getElementById("radio").addEventListener("click", crearRadio, false);
document.getElementById("boton").addEventListener("click", crearBoton, false);



//Funciones

//const mostrar = document.getElementsByClassName("mostrar")[0];

function crearTexto(){
    let nombre = prompt("Indique el nombre del input:");

    let labelNombre = document.createElement("label");
    labelNombre.for = "texto";
    labelNombre = document.createTextNode(nombre);
    
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "texto";
    inputNombre.name = nombre;
    confirm(`Se ha creado un input de tipo texto con el nombre de: ${nombre}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    
    mostrar.appendChild(labelNombre);
    mostrar.appendChild(inputNombre);
    
    
}
function crearPassword(){
    let contrasenna = prompt("Indique el nombre del input:");
    
    let inputContrasenna = document.createElement("input");
    inputContrasenna.type = "password";
    inputContrasenna.name = contrasenna;
    confirm(`Se ha creado un input de tipo password con el nombre de: ${contrasenna}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(inputContrasenna);

}
function crearTextarea(){

    let areaNomb = prompt("Indique el nombre del textarea:");

    let area = document.createElement("textarea");
    area.rows = "5";
    area.cols = "40";
    area.name = areaNomb;
    confirm(`Se ha creado un textarea con el nombre de: ${areaNomb}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(area);

}

function crearLabel(){

    let labelNombre = prompt("Indique a qué input va referido:");

    let label1 = document.createElement("label");
    label1.for = labelNombre;
    confirm(`Se ha creado un label para el elemento con id: ${labelNombre}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(label1);

}
function crearImagen(){

    let ruta = prompt("Indique la ruta de la imagen");

    let imagen = document.createElement("img");
    imagen.ruta = ruta;
    confirm(`Se ha creado una imagen con la ruta: ${ruta}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(imagen);

}
function crearCheckbox(){

    let nombre = prompt("Indique el nombre");
    let valor = prompt("Indique el valor");

    let checBox = document.createElement("checkbox");
    checBox.name = nombre;
    checBox.value = valor;

    confirm(`Se ha creado un checkbox con el nombre ${nombre}) y un value ${valor}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(checBox);

}
function crearRadio(){

    let nombre = prompt("Indique el nombre");
    let valor = prompt("Indique el valor");

    let radio1 = document.createElement("input");
    radio1.type = "radio";
    radio1.name = nombre;
    radio1.value = valor;

    confirm(`Se ha creado un input tipo radio con nombre: ${nombre}, y un value: ${valor}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(radio1);
    
}
function crearBoton(){

    let nombre = prompt("Indique el nombre");
    let valor = prompt("Indique el valor");

    let boton = document.createElement("button");
    boton.type = "submit";
    boton.name = nombre;
    boton.value = valor;

    confirm(`Se ha creado un botón tipo submit con nombre: ${nombre}, y un value: ${valor}`);
    let mostrar = document.getElementsByClassName("mostrar")[0];
    mostrar.appendChild(boton);
}