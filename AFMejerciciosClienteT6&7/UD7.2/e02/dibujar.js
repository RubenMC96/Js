$(document).ready(function() {
    let pintando = false;
    let zonadibujo = $('#zonadibujo');
    let tablero = $('<table/>').addClass('tablerodibujo');
    
    // CREAR TABLA
    for (let i = 0; i < 30; i++) {
        let fila = $('<tr/>');
        for (let j = 0; j < 30; j++) {
            let celda = $('<td/>').addClass('celda');
            fila.append(celda);
        }
        tablero.append(fila);
    }
    zonadibujo.append(tablero);

    // SELECCIONAR COLOR
    $('#paleta td').each(function() {
        $(this).click(function() {
            $('#paleta td').removeClass('seleccionado');
            $(this).addClass('seleccionado');
            colorSeleccionado = $(this).attr('class');
        });
    });

    // PINCEL ACTIVO
    zonadibujo.mousedown(function() {
        pintando = true;
        $("#pincel").text("Estado del pincel: ACTIVADO");
    });

    zonadibujo.mouseup(function() {
        pintando = false;
        $("#pincel").text("Estado del pincel: DESACTIVADO");
    });

    zonadibujo.mouseover(function(event) {
        if (pintando) {
            let celda = $(event.target);
            if (celda.hasClass("celda")) {
                celda.attr('class', colorSeleccionado);
            }
        }
    });
});
