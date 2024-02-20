// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.2
// Realiza el ejercicio 4.4 cargando el array de discos de un XML.

/////
// Necesitamos almacenar en un programa todos los discos de música
//  que tenemos en casa. 

// Crea una clase “Disco” que almacene la siguiente información:
// - Nombre del disco.
// - Grupo de música o cantante.
// - Año de publicación.
// - Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
// - Localización: almacenará un número de estantería.
// - Prestado: almacenará un valor booleano. Por defecto será false.
// - Carátula: nombre del archivo de imagen de la carátula (p.ej: imagen.png)

// Además tendrá los siguientes métodos:
// - Un constructor (la localización será 0 por defecto y prestado 
//     estará a false, carátula por defecto imagen.png).
// - Un método que permitirá cambiar el número de estantería en la localización.
// - Un método que permitirá cambiar la propiedad Prestado.
// - Un método que muestre toda la información de un disco.

// Guarda todo el código en un archivo llamado disco.js y 
// reutiliza en tu página el archivo de arrays que hicimos en la práctica 1.

// Crea un array vacío para almacenar los discos.

// Cuando el usuario cargue la página, se mostrarán las opciones:
// - Mostrar número de discos.
// - Mostrar tabla de discos con todos los datos de 
//     cada disco(y le preguntará si quiere mostrarlos en el orden 
//     que se encuentran en el array, del revés u ordenados alfabéticamente).
// - Mostrar un intervalo de discos por año de publicación(y le 
//     pedirá que introduzca el intervalo en formato inicio-fin)
// - Añadir un disco (y le preguntará si quiere añadir al principio o al final).
// - Borrar un disco (y le preguntará si quiere borrar al principio o al final).
// - Consultar un disco (y le preguntará si quiere consultar por 
//     posición o por nombre).

import { Arrays } from './Arrays.js';
import { Disco } from './Disco.js';

// let d1 = new Disco("nombre1", "autor1", 2023, "pop")
// let d2 = new Disco("nombre2", "autor2", 2013, "rock")
// let listaDiscos = [d1,d2];


document.getElementById("cargarDatos").addEventListener("click", cargarDatos);

let listaDiscos;

function cargarDatos() {
    fetch("discosData.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        listaDiscos = data.discosData.map( //para cada elemento del array "clienteData" del objeto "data"
            discosData => new Disco( //creamos un nuevo Disco con los parametros del json y lo guardamos en listaDiscos
                    discosData.nombre, 
                    discosData.autor,
                    discosData.anho, 
                    discosData.tipo
                    )
        );
    })
    .catch(function() { //GESTION DE ERROR EN CONTINENTE. Si ocurrió algún error durante la solicitud http o el procesamiento de la respuesta
        console.log("Hubo un problema al cargar los datos.");
    });
}
console.log(listaDiscos);





document.getElementById("boton0").addEventListener("click", ejecutar, true);

function limpiarHTML() {
    document.getElementById("li1").innerHTML = "";
    document.getElementById("li2").innerHTML = "";
    document.getElementById("li3").innerHTML = "";
    document.getElementById("textAsk2").innerHTML = "";
    document.getElementById("boton2").innerHTML = "";
    document.getElementById("boton3").innerHTML = "";
    document.getElementById("boton4").innerHTML = "";
    document.getElementById("boton5").innerHTML = "";
    document.getElementById("boton6").innerHTML = "";
}

function ejecutar() {
    let respuesta = Number(document.getElementById("answerAsk1").value);

    if (respuesta == 1) {
        limpiarHTML();
        document.getElementById("resultado").innerHTML =
            "El numero de discos es: " + Arrays.mostrarNumElementos(listaDiscos);
    } else if (respuesta == 2) {
        limpiarHTML();
        document.getElementById("li1").innerHTML =
            "<li>Mostrar discos en orden natural.</li>";
        document.getElementById("li2").innerHTML =
            "<li>Mostrar discos en orden inverso.</li>";
        document.getElementById("li3").innerHTML =
            "<li>Mostrar discos en orden alfabético.</li>";
        document.getElementById("textAsk2").innerHTML =
            "Elige una opción para mostrar los discos: <input type = 'text' id = 'answerAsk2'></input>";
        document.getElementById("boton2").innerHTML =
            "<button> Elegir orden</button><br><br>";
        document.getElementById("boton2").addEventListener("click", elegir2, true);
    } else if (respuesta == 3){
        limpiarHTML();
        document.getElementById("textAsk2").innerHTML =
            "Insertar Intervalo (formato: AñoInicio-AñoFin) <input type = 'text' id = 'answerAsk2'></input>";
        document.getElementById("boton3").innerHTML =
            "<button> Buscar por intervalo </button><br><br>";
        document.getElementById("boton3").addEventListener("click", elegir3, true);
    } else if (respuesta == 4) {
        limpiarHTML();
        document.getElementById("li1").innerHTML =
            "<li>Añadir un disco al principio.</li>";
        document.getElementById("li2").innerHTML =
            "<li>Añadir un disco al final.</li>";
        document.getElementById("textAsk2").innerHTML =
            "Elige una opción para añadir un disco: <input type = 'text' id = 'answerAsk2'></input><br>"
            + "Nombre del disco: <input type = 'text' id = 'newDiscoName'></input><br>"
            + "Autor del disco: <input type = 'text' id = 'newDiscoAutor'></input><br>"
            + "Año del disco: <input type = 'text' id = 'newDiscoAnho'></input><br>"
            + "Tipo del disco(“rock”, “pop”, “punk” o “indie”): <input type = 'text' id = 'newDiscoTipo'></input><br>";
        document.getElementById("boton4").innerHTML =
            "<button> Añadir disco </button><br><br>";
        document.getElementById("boton4").addEventListener("click", elegir4, true);
    } else if (respuesta == 5) {
        limpiarHTML();
        document.getElementById("li1").innerHTML =
            "<li>Borrar el disco del principio.</li>";
        document.getElementById("li2").innerHTML =
            "<li>Borrar el disco del final.</li>";
        document.getElementById("textAsk2").innerHTML =
            "Elige una opción para borrar un disco: <input type = 'text' id = 'answerAsk2'></input>";
        document.getElementById("boton5").innerHTML =
            "<button> Elegir</button><br><br>";
        document.getElementById("boton5").addEventListener("click", elegir5, true);
    } else if (respuesta == 6) {
        limpiarHTML();
        document.getElementById("li1").innerHTML =
            "<li>Consultar un disco por posición.</li>";
        document.getElementById("li2").innerHTML =
            "<li>Consultar posición de un disco.</li>";
        document.getElementById("textAsk2").innerHTML =
            "Elige una opción para consultar un disco: <input type = 'text' id = 'answerAsk2'></input><br>"
            + "Posición/Nombre del disco: <input type = 'text' id = 'posOrName'></input>";
        document.getElementById("boton6").innerHTML =
            "<button> Elegir</button><br><br>";
        document.getElementById("boton6").addEventListener("click", elegir6, true);

    }
}

function tablaDiscos(lista){
    document.getElementById("resultado").innerHTML = `
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Autor</th>
                    <th>Año</th>
                    <th>Tipo</th>
                    <th>Localización</th>
                    <th>Prestado</th>
                    <th>Caratula</th>
                </tr>
                ${lista.map(d => `
                    <tr>
                        <td>${d.nombre}</td>
                        <td>${d.autor}</td>
                        <td>${d.anho}</td>
                        <td>${d.tipo}</td>
                        <td>${d.localizacion}</td>
                        <td>${d.prestado}</td>
                        <td>${d.caratula}</td>
                    </tr>
                `).join('')}
            </table> 
        `;
}


function elegir2() {
    let respuesta2 = Number(document.getElementById("answerAsk2").value);

    if (respuesta2 == 1) {
        tablaDiscos(listaDiscos);
    } else if (respuesta2 == 2) {
        let listaDiscosInv = Arrays.mostrarTodosElementosInv(listaDiscos);
        tablaDiscos(listaDiscosInv);
    } else if (respuesta2 == 3) {
        let listaDiscosAbc = Arrays.mostrarTodosElementosAbc(listaDiscos);
        tablaDiscos(listaDiscosAbc);
    }
}

function elegir3(){
    let respuesta2 = document.getElementById("answerAsk2").value;
    let [inicio, fin] = respuesta2.split("-").map(Number);
    let listaDiscosIntervalo = listaDiscos.filter(
        d => d.anho >= inicio && d.anho <= fin);
    tablaDiscos(listaDiscosIntervalo);
}

function elegir4(){
    let respuesta2 = document.getElementById("answerAsk2").value;
    let newDiscoName = document.getElementById("newDiscoName").value;
    let newDiscoAutor = document.getElementById("newDiscoAutor").value;
    let newDiscoAnho = document.getElementById("newDiscoAnho").value;
    let newDiscoTipo = document.getElementById("newDiscoTipo").value;
    if (newDiscoTipo == "rock" ||
        newDiscoTipo == "pop"  ||
        newDiscoTipo == "punk" ||
        newDiscoTipo == "indie"){
        let newDisco = new Disco(`${newDiscoName}`,`${newDiscoAutor}`,`${newDiscoAnho}`,`${newDiscoTipo}`)
        if (respuesta2 == 1) {
            Arrays.addElementoInicio(listaDiscos,newDisco);
            document.getElementById("resultado").innerHTML =
                "El disco añadido al principio es: "
                + newDisco.ver();
        } else if (respuesta2 == 2) {
            Arrays.addElementoFinal(listaDiscos,newDisco);
            document.getElementById("resultado").innerHTML =
                
                "El disco añadido al final es: "
                + newDisco.ver();
        }
    } else document.getElementById("resultado").innerHTML ="Tipo no permitido"
}
function elegir5() {
    let respuesta2 = Number(document.getElementById("answerAsk2").value);
    if (respuesta2 == 1) {
        let discoABorrar = listaDiscos[0];
        Arrays.borrarPrimero(listaDiscos);
        document.getElementById("resultado").innerHTML =
            "El disco borrado del principio es: "
            + discoABorrar.ver();
    } else if (respuesta2 == 2) {
        let discoABorrar = listaDiscos[listaDiscos.length-1];
        Arrays.borrarUltimo(listaDiscos);
        document.getElementById("resultado").innerHTML =
            "El disco borrado del final es: "
            + discoABorrar.ver();
    }
}
function elegir6() {
    let respuesta2 = Number(document.getElementById("answerAsk2").value);
    let posOrName = document.getElementById("posOrName").value;
    if (respuesta2 == 1) {
        posOrName = Number(posOrName);
        document.getElementById("resultado").innerHTML =
            `El disco en la posición ${posOrName} es: <br>`
            + Arrays.elementoByPos(listaDiscos, posOrName).ver();
    } else if (respuesta2 == 2) {
        let disc = listaDiscos.find(disco => disco.nombre === posOrName);
        document.getElementById("resultado").innerHTML =
            `La posición del disco con nombre ${posOrName} es: `
            + Arrays.posByElemento(listaDiscos, disc);
    }
}
