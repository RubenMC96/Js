$(document).ready(iniciar);


const personas = [];

function iniciar() {
    $.ajax({
        url: "./personas.json",
        dataType: "json",
        success: function (data) {
            personas = [...data.results];
            ejecuta();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Ha ocurrido un error al obtener los clientes");
        }
    });
}




// function ordena() {
//     let ordenada = [...personas];

//     ordenada.sort((a, b) => {
//         let nombreA = a.location.country.toUpperCase();
//         let nombreB = b.location.country.toUpperCase();
//         if (nombreA > nombreB) {
//             return 1;
//         }
//         if (nombreA < nombreB) {
//             return -1;
//         }
//         return 0;
//     });
//     mostar(ordenada);
// }

function ejecuta() {
    //personas = person.getElementsByTagName("results");
    let seleccion = $("#seleccion");
    let opcion;
    let lista = $("<ol/>");

    
    for (let i = 0; i <= personas.length - 1; i++) {
        opcion = $("<option/>");
        opcion.value = (i + 1);
        opcion.text = (i + 1);
        seleccion.append(opcion);
    }
    let mostrarPersonas = $("#mostrar");

    mostrarPersonas.on("click", mostar, false);

    function mostar(personas) {

        for (let i = 0; i < seleccion; i++) {
            let linea = $("<li/>");
            let p1 = $("<span/>");
            let nombre = $("Nombre" + personas[i].name.first);
            let p2 = $("<span/>");
            let pais = $("País" + personas[i].location.country);
            let p3 = $("<span/>");
            let email = $("Email" + personas[i].email);
            let imagen = $("<img/>");
            imagen.src = personas[i].picture.medium;

            p1.append(nombre);
            p2.append(pais);
            p3.append(email);

            linea.append(p1);
            linea.append(p2);
            linea.append(p3);
            linea.append(imagen);

            lista.append(linea);

        }


    }

}



