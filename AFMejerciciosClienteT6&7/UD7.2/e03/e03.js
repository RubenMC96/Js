// EJERCICIO 7.2.3

// 	Modifica el ejercicio 7.1.4 para que los datos del equipo aparezcan 
//     con una animación tipo persiana, al cambiar de equipo se ha de ocultar 
//     la información del anterior y mostrar con el mismo efecto los datos 
//     del nuevo equipo seleccionado.


// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.4
//  Crea un archivo JSON que contenga un array de equipos de fútbol con un mínimo de 5 equipos :
//  Nombre, PartidosJugados(PJ), PartidosGanados(PG),PartidosPerdidos(PP),PartidosEmpatados(PE) 

// Tu página web debe cargar ese JSON directamente desde el archivo y mostrará un <select> para 
//seleccionar el nombre del equipo. Al seleccionar un equipo mostrará sus datos en la página.

$(document).ready(function() {
    $.ajax({
        url: "equiposData.json",
        type: "GET",
        success: function(data) {
            let listaEquipos = data.equiposData.map(function(equiposData) {
                return {
                    nombre: equiposData.nombre,
                    partidosJugados: equiposData.partidosJugados,
                    partidosGanados: equiposData.partidosGanados,
                    partidosPerdidos: equiposData.partidosPerdidos,
                    partidosEmpatados: equiposData.partidosEmpatados
                };
            });

            // Agregamos las opciones al select
            let select = $('#equiposSelect');
            $.each(listaEquipos, function(index, equipo) {
                select.append($('<option>', {
                    value: index,
                    text: equipo.nombre
                }));
            });

            // Agregamos un event listener al select
            select.change(function() {
                let equipoSeleccionado = listaEquipos[$(this).val()];
                let infoHTML = `Nombre: ${equipoSeleccionado.nombre}<br>
                                Partidos Jugados: ${equipoSeleccionado.partidosJugados}<br>
                                Partidos Ganados: ${equipoSeleccionado.partidosGanados}<br>
                                Partidos Perdidos: ${equipoSeleccionado.partidosPerdidos}<br>
                                Partidos Empatados: ${equipoSeleccionado.partidosEmpatados}`;

                // Ocultar o mostrar los datos con animación tipo persiana
                $('#equipoDetalle').slideUp("slow", function() {
                    $(this).html(infoHTML);
                    $(this).slideDown("slow");
                });
            });
        }
    });
});
