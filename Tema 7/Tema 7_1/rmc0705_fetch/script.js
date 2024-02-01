import Cliente, { Tarea } from "./Tarea.js";

let arrTareas = [];

window.addEventListener("load", iniciar, false);


async function iniciar(){
    try{
        let response = await fetch("tareas.json");
        let json = await response.json();
        arrTareas = [...json];
        ejecutar();
    }catch(error){
        alert("Se ha producido un error");
    }
}
function ejecutar(){


    for(let i = 0; i <= arrTareas.length -1; i++){
        //Creamos la lista de tareas
        let lista = document.getElementsByClassName("lista")[0];

        //Creamos la lista desordenada
        let tabla = document.createElement("ul");

        //Hacemos hijo la lista desordenada de la lista de tareas
        lista.appendChild(tabla);

        //Creamos la linea de tarea
        let elemento = document.createElement("li");
        tabla.appendChild(elemento);
        let tarea = arrTareas[i].tarea;
        let linea = document.createElement("span");
        //Asignamos el tarea a su span
        linea = document.createTextNode(tarea);

        elemento.appendChild(linea);

        //Creamos el checkbox
        let realizada = document.createElement("input");
        realizada.type = "checkbox";
        realizada.name = "realizada"
        realizada.checked = i[1];
        tabla.appendChild(realizada);

        realizada.addEventListener("change", function(){
            if(this.checked){
                elemento.style.color = "red";
                elemento.style.textDecoration = "line-through";
            }
            else{
                elemento.style.color = "";
                elemento.style.textDecoration = "";
            }
        })

    }
}

document.getElementById("enviar").addEventListener("click", nuevaTarea, false);

function nuevaTarea(){

    //Creamos la lista de tareas
    let lista = document.getElementsByClassName("lista")[0];

    //Creamos la lista desordenada
    let tabla = document.createElement("ul");

    //Hacemos hijo la lista desordenada de la lista de tareas
    lista.appendChild(tabla);

    //Creamos la linea de tarea
    let elemento = document.createElement("li");
    tabla.appendChild(elemento);
    let tarea = document.getElementById("nueva").value;
    let linea = document.createElement("span");
    //Asignamos el tarea a su span
    linea = document.createTextNode(tarea);

    elemento.appendChild(linea);

    //Creamos el checkbox
    let realizada = document.createElement("input");
    realizada.type = "checkbox";
    realizada.name = "realizada"
    realizada.checked;
    tabla.appendChild(realizada);

    realizada.addEventListener("change", function(){
        if(this.checked){
            elemento.style.color = "red";
            elemento.style.textDecoration = "line-through";
        }
        else{
            elemento.style.color = "";
            elemento.style.textDecoration = "";
        }
    })

}

