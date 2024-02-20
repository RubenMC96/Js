// EJERCICIO 7.1.7
// Diseña una aplicación web que lea y muestre información de pilotos de Fórmula 1 
// desde un archivo JSON como el del ejemplo.

// Implementa las siguientes funcionalidades interactivas decidiendo tu el diseño que quieras utilizar:
// Ordenar por Nombre o Equipo: Permite al usuario ordenar la lista de pilotos por nombre o equipo, 
// ya sea de forma ascendente o descendente.
// Filtrar por Nacionalidad: Agrega un filtro para que el usuario pueda ver solo los pilotos de una 
// nacionalidad específica.
// Destacar Piloto: Permite al usuario hacer clic en un piloto para destacarlo, cambiando su estilo visual.
// Implementar paginación para la lista de pilotos, se mostrarán 3 pilotos por página e incluirá 
// la opción ver todos.

import {Piloto} from './Piloto.js';

document.getElementById("cargarDatos").addEventListener("click", cargarDatos);

let listaPilotos;
let paginaActual = 1;
let pilotosPorPagina = 3;

function cargarDatos() {
    fetch("pilotos.json")
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`HTTP error! status: ${response.status}, text: ${text}`);
            });
        }
        return response.json();
        })
        .then(data => {
            listaPilotos = data.pilotos.map( //para cada elemento del array "pilotos" del objeto "data"
                pilotos => new Piloto( //creamos un nuevo Disco con los parametros del json y lo guardamos en listaDiscos
                    pilotos.nombre,
                    pilotos.equipo,
                    pilotos.numero,
                    pilotos.nacionalidad
                )
            );

            let listaPilotosContainer = document.getElementById("listaPilotos");

            listaPilotos.forEach(piloto => {
                let li = document.createElement("li");
                li.innerText = `${piloto.nombre}, ${piloto.equipo}, ${piloto.numero}, ${piloto.nacionalidad}`; // Aquí puedes personalizar cómo quieres que se muestre cada piloto.
                listaPilotosContainer.appendChild(li);
                li.addEventListener("click", () => {
                    // Cambia el estilo del piloto cuando se hace clic en él
                    li.style.backgroundColor = 'yellow';
                });
                actualizarLista();
            });
        })
        .catch(function () { //GESTION DE ERROR EN CONTINENTE. Si ocurrió algún error durante la solicitud http o el procesamiento de la respuesta
            console.log("Hubo un problema al cargar los datos.");
        });
}

document.getElementById("anterior").addEventListener("click", () => {
    if (paginaActual > 1) {
        paginaActual--;
        actualizarLista();
    }
});

document.getElementById("siguiente").addEventListener("click", () => {
    if (paginaActual * pilotosPorPagina < listaPilotos.length) {
        paginaActual++;
        actualizarLista();
    }
});

document.getElementById("verTodos").addEventListener("click", () => {
    pilotosPorPagina = Number.MAX_VALUE;
    actualizarLista();
});

document.getElementById("volverAPaginacion").addEventListener("click", () => {
    pilotosPorPagina = 3;
    paginaActual = 1;
    actualizarLista();
});




document.getElementById("ordenarNombreAsc").addEventListener("click", ordenarNombreAsc);
document.getElementById("ordenarNombreDesc").addEventListener("click", ordenarNombreDesc);
document.getElementById("ordenarEquipoAsc").addEventListener("click", ordenarEquipoAsc);
document.getElementById("ordenarEquipoDesc").addEventListener("click", ordenarEquipoDesc);

function ordenarNombreAsc() {
    listaPilotos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    actualizarLista();
}

function ordenarNombreDesc() {
    listaPilotos.sort((a, b) => b.nombre.localeCompare(a.nombre));
    actualizarLista();
}

function ordenarEquipoAsc() {
    listaPilotos.sort((a, b) => a.equipo.localeCompare(b.equipo));
    actualizarLista();
}

function ordenarEquipoDesc() {
    listaPilotos.sort((a, b) => b.equipo.localeCompare(a.equipo));
    actualizarLista();
}

function actualizarLista() {
    let listaPilotosContainer = document.getElementById("listaPilotos");
    listaPilotosContainer.innerHTML = '';
    let inicio = (paginaActual - 1) * pilotosPorPagina;
    let fin = inicio + pilotosPorPagina;
    for (let i = inicio; i < fin && i < listaPilotos.length; i++) {
        let piloto = listaPilotos[i];
        let li = document.createElement("li");
        li.innerText = `${piloto.nombre}, ${piloto.equipo}, ${piloto.numero}, ${piloto.nacionalidad}`;
        li.addEventListener("click", () => {
            // Cambia el estilo del piloto cuando se hace clic en él
            li.style.backgroundColor = 'red';
        });
        listaPilotosContainer.appendChild(li);
    }
}


document.getElementById("aplicarFiltro").addEventListener("click", () => {
    const nacionalidad = document.getElementById("filtrarNacionalidad").value;
    listaPilotos = listaPilotos.filter(piloto => piloto.nacionalidad === nacionalidad);
    actualizarLista();
});
