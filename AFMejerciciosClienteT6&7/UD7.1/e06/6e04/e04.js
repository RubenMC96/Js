// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.4
//  Crea un archivo JSON que contenga un array de equipos de fútbol con un mínimo de 5 equipos :
//  Nombre, PartidosJugados(PJ), PartidosGanados(PG),PartidosPerdidos(PP),PartidosEmpatados(PE) 

// Tu página web debe cargar ese JSON directamente desde el archivo y mostrará un <select> para 
//seleccionar el nombre del equipo. Al seleccionar un equipo mostrará sus datos en la página.

window.addEventListener("load", cargarDatos);

let listaEquipos;

function cargarDatos() {
    fetch("equiposData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            listaEquipos = data.equiposData.map(
                equiposData => ({
                    nombre: equiposData.nombre,
                    partidosJugados: equiposData.partidosJugados,
                    partidosGanados: equiposData.partidosGanados,
                    partidosPerdidos: equiposData.partidosPerdidos,
                    partidosEmpatados: equiposData.partidosEmpatados
                })
            );

            // Agregamos las opciones al select
            let select = document.getElementById('equiposSelect');
            listaEquipos.forEach((equipo, index) => {
                let option = document.createElement('option');
                option.value = index;
                option.text = equipo.nombre;
                select.appendChild(option);
            });

            // Agregamos un event listener al select
            select.addEventListener('change', function () {
                let equipoSeleccionado = listaEquipos[this.value];
                document.getElementById('equipoDetalle').innerText =
                    `Nombre: ${equipoSeleccionado.nombre}
                Partidos Jugados: ${equipoSeleccionado.partidosJugados}
                Partidos Ganados: ${equipoSeleccionado.partidosGanados}
                Partidos Perdidos: ${equipoSeleccionado.partidosPerdidos}
                Partidos Empatados: ${equipoSeleccionado.partidosEmpatados}`;
            });
        })
        .catch(function() { //GESTION DE ERROR EN CONTINENTE. Si ocurrió algún error durante la solicitud http o el procesamiento de la respuesta
            console.log("Hubo un problema al cargar los datos.");
        }
    );
}