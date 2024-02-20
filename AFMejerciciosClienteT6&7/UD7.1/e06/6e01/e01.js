// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.1
// Realiza el ejercicio 4.3 leyendo la lista de un JSON. 

//
// Crea una clase Cliente y define un array de clientes con los siguientes datos:
// Nombre;Localidad;Cuota
// Laura;Santander;50
// Álvaro;Castro;50
// Igor;Castro;60
// Ivan;Santander;40
// Mónica;Zamora;30
// Javi;Bilbao;30
// David;Bilbao;50

// A partir del mismo, el usuario podrá elegir del menú:
// - Todos los clientes: se mostrará una tabla con los valores 
//     que están en la variable anterior.
// - Usuarios de una localidad: y a partir de la localidad 
//     introducida por el usuario se mostrarán en una tabla los 
//     nombres y cuotas de las personas que viven en esa provincia.
// - Usuarios que tengan una cuota mayor que un valor: y se 
//     mostrarán en una tabla los nombres de usuario, provincias 
//     y cuotas de aquellos que tienen una cuota superior al valor
//      introducido por el usuario (valora cuál es el mejor modo de hacerlo).

import { Cliente } from './Cliente.js';

document.getElementById("cargarDatos").addEventListener("click", cargarDatos);

let clientes;

function cargarDatos() {
    // Petición HTTP para obtener los datos del JSON
    fetch("clienteData.json")
    .then(response => { //GESTION DE ERROR EN CONTENIDO
        if (!response.ok) { //si la respuesta no fue exitosa lanzamos error
            throw new Error("HTTP error " + response.status);
        }
        return response.json(); // si es exitosa, la convertimos a JSON
    })
    .then(data => {
        clientes = data.clienteData.map(
            clienteData => new Cliente(
                clienteData.nombre, 
                clienteData.localidad, 
                clienteData.cuota
            )
        );
    })
    .catch(function() { //GESTION DE ERROR EN CONTINENTE. Si ocurrió algún error durante la solicitud http o el procesamiento de la respuesta
        console.log("Hubo un problema al cargar los datos.");
    });
}
console.log(clientes);



document.getElementById("boton0").addEventListener("click", ejecutar, true);

function ejecutar() {
    let respuesta = Number(document.getElementById("answerAsk1").value);

    if (respuesta == 1) {
        limpiarHTML();
        document.getElementById("resultado").innerHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Cuota</th>
            </tr>
            ${clientes.map(c => `
                <tr>
                    <td>${c.nombre}</td>
                    <td>${c.localidad}</td>
                    <td>${c.cuota}</td>
                </tr>
            `).join('')}
        </table> 
    `;
    } else if (respuesta == 2) {
        limpiarHTML();
        document.getElementById("textAsk2").innerHTML =
            "Introduce la localidad: <input type = 'text' id = 'answerAsk2'></input>";
        document.getElementById("boton2").innerHTML =
            "<button> Buscar</button><br><br>";
        document.getElementById("boton2").addEventListener("click", elegir2, true);
    } else if (respuesta == 3) {
        limpiarHTML();
        document.getElementById("textAsk2").innerHTML =
            "Introduce una cuota: <input type = 'text' id = 'answerAsk2'></input>";
        document.getElementById("boton3").innerHTML =
            "<button> Filtrar</button><br><br>";
        document.getElementById("boton3").addEventListener("click", elegir3, true);
    }
}

function elegir2() {
    let respuesta2 = document.getElementById("answerAsk2").value;
    let clientesPorLocalidad = [];
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].localidad == respuesta2) {
            clientesPorLocalidad.push(clientes[i]);
        }
    }
    document.getElementById("resultado").innerHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Cuota</th>
            </tr>
            ${clientesPorLocalidad.map(c => `
                <tr>
                    <td>${c.nombre}</td>
                    <td>${c.localidad}</td>
                    <td>${c.cuota}</td>
                </tr>
            `).join('')}
        </table> 
    `;

}

function elegir3() {
    let respuesta2 = document.getElementById("answerAsk2").value;
    let clientesPorCuota = [];
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cuota > respuesta2) {
            clientesPorCuota.push(clientes[i]);
        }
    }
    document.getElementById("resultado").innerHTML = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Cuota</th>
            </tr>
            ${clientesPorCuota.map(c => `
                <tr>
                    <td>${c.nombre}</td>
                    <td>${c.localidad}</td>
                    <td>${c.cuota}</td>
                </tr>
            `).join('')}
        </table> 
    `;

}

function limpiarHTML() {
    document.getElementById("textAsk2").innerHTML = "";
    document.getElementById("boton2").innerHTML = "";
    document.getElementById("boton3").innerHTML = "";
}