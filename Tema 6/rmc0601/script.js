import Cliente, { Tarea } from "./Tarea.js";

let arrTareas = [new Tarea("Tarea1", false), new Tarea("Tarea2", false)];

window.addEventListener("load", iniciar, false);

function iniciar(){

    for(let i = 0; i <= arrTareas.length; i++){
        //Creamos la lista de tareas
        let lista = document.getElementsByClassName("lista")[0];

        //Creamos la lista desordenada
        let tabla = document.createElement("ul");

        //Hacemos hijo la lista desordenada de la lista de tareas
        lista.appendChild(tabla);

        //Creamos la linea de texto
        let elemento = document.createElement("li");
        tabla.appendChild(elemento);
        let texto = arrTareas[i]._texto
        ;
        let linea = document.createElement("span");
        //Asignamos el texto a su span
        linea = document.createTextNode(texto);

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

    //Creamos la linea de texto
    let elemento = document.createElement("li");
    tabla.appendChild(elemento);
    let texto = document.getElementById("nueva").value;
    let linea = document.createElement("span");
    //Asignamos el texto a su span
    linea = document.createTextNode(texto);

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

