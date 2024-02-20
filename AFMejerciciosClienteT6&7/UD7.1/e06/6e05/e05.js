// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.5
// 	Cambia el ejercicio 6.1 para que las tareas iniciales se carguen desde un JSON.


//
// Lista de Tareas Interactiva
// Crea un aplicación en javascript que permita realizar una lista de tareas,
//  inicialmente la lista se cargará desde un array de objetos tarea con 
//  dos campos: texto(string) y realizada(boolean) que se irá modificando
//   a la vez que el listado en pantalla.  
// El usuario podrá introducir una nueva tarea desde un input al 
// hacer click en un botón, se ha de utilizar los métodos de creación 
// de elementos vistos en la unidad.

// Amplía la funcionalidad de la lista de tareas permitiendo marcar 
// una tarea como completada. Cada tarea en la lista debe tener un 
// checkbox que, al hacer clic, cambie su estilo para indicar visualmente 
// que ha sido completada.
// Puedes utilizar el siguiente estilo para tachar la tarea:

// .incorrecto {
//     text-decoration:line-through;
//     color: red;
// }

// Será similar a lo siguiente, con un checkbox al lado de cada tarea
// imagen

import { Tarea } from './Tarea.js';

window.addEventListener("load", cargarDatos);

let listaTareasJSON;

function cargarDatos() {
    fetch("tareasData.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        listaTareasJSON = data.tareasData.map( //para cada elemento del array "clienteData" del objeto "data"
            tareasData => new Tarea( //creamos un nuevo Disco con los parametros del json y lo guardamos en listaDiscos
                tareasData.texto,
                tareasData.realizada));
        console.log(listaTareasJSON);
        listaTareasJSON.forEach(tarea => { //para cada Tarea del array listaTareasJSON
            añadirTarea(tarea.texto);
        });
    })
    .catch(function() { //GESTION DE ERROR EN CONTINENTE. Si ocurrió algún error durante la solicitud http o el procesamiento de la respuesta
        console.log("Hubo un problema al cargar los datos.");
    });
}
console.log(listaTareasJSON);
    

// BBDD
let arrayTareas = [];

// Función añadir tarea
function añadirTarea(textoNewTarea) {
    let nt = new Tarea(textoNewTarea)
    arrayTareas.push(nt); //añadir al array

    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + arrayTareas.length;
    checkbox.name = "task" + arrayTareas.length;
    checkbox.value = nt.texto;
    checkbox.class = "";

    li.appendChild(checkbox); //añadir al html
    li.appendChild(document.createTextNode(nt.texto));
    listaTareas.appendChild(li);

    checkbox.addEventListener('change', function () { //agregar interacción al checkbox
        if (this.checked) {
            nt.realizada = true;
            li.classList.add('incorrecto');
            console.log(arrayTareas) //comprobacion de que modifica el array por consola
        } else {
            nt.realizada = false;
            li.classList.remove('incorrecto');
            console.log(arrayTareas) //comprobacion de que modifica el array por consola
        }
    })
}

// // Añadir tareas por defecto
// function showInitArray(){
//     añadirTarea("Tarea1");
//     añadirTarea("Tarea2");
//     añadirTarea("Tarea3");
// }
// document.addEventListener('DOMContentLoaded', showInitArray);

// Añadir tareas al array y mostrarlas al darle al boton
document.getElementById('boton').addEventListener('click',
    function (event) {
        event.preventDefault();
        let textoNewTarea = document.getElementById('textoNuevaTarea').value;
        añadirTarea(textoNewTarea);

    });



