$(window).on("load", iniciar);

let equipos = [];

async function iniciar() {
    try {
        let response = await fetch("Equipos.json");
        let json = await response.json();
        equipos = [...json];
        ejecuta();
    } catch (error) {
        alert("Se ha producido un error");
    }
}

function ejecuta() {
    let seleccion = $("#equipos");
    for (let i =   0; i <= equipos.length -   1; i++) {
        seleccion.append($("<option>", {
            value: i,
            text: equipos[i].nombre
        }));
    }

    seleccion.on("change", function () {
        let index = $(this).val();
        let nombreDiv = $("#nombre");
        let PJDiv = $("#PJ");
        let PGDiv = $("#PG");
        let PPDiv = $("#PP");
        let PEDiv = $("#PE");

        // Hide the current information with a slide up effect
        nombreDiv.slideUp("slow", function() {
            // Update the content and show with a slide down effect
            nombreDiv.text(equipos[index].nombre).slideDown("slow");
        });

        PJDiv.slideUp("slow", function() {
            PJDiv.text(equipos[index].PJ).slideDown("slow");
        });

        PGDiv.slideUp("slow", function() {
            PGDiv.text(equipos[index].PG).slideDown("slow");
        });

        PPDiv.slideUp("slow", function() {
            PPDiv.text(equipos[index].PP).slideDown("slow");
        });

        PEDiv.slideUp("slow", function() {
            PEDiv.text(equipos[index].PE).slideDown("slow");
        });
    });
}
