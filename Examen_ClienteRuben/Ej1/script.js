window.addEventListener("load", iniciar, false);

let personas = [];

async function iniciar() {

    try {
        let response = await fetch("personas.json");
        let json = await response.json();
        personas = [...json.results];
        ejecuta();
    } catch (error) {
        alert("Ha ocurrido un error");
    }
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
    let seleccion = document.getElementById("seleccion");
    let opcion;
    let lista = document.createElement("ol");

    for (let i = 0; i <= personas.length - 1; i++) {
        opcion = document.createElement("option");
        opcion.value = (i + 1);
        opcion.text = (i + 1);
        seleccion.appendChild(opcion);
    }

    let mostrarPersonas = document.getElementById("mostrar");

    mostrarPersonas.addEventListener("click", mostar, false);


    function mostar(e) {
        e.preventDefault();
        for (let i = 0; i < seleccion.value; i++) {
            let linea = document.createElement("li");
            let p1 = document.createElement("span");
            let nombre = document.createTextNode("Nombre" + personas[i].name.first);
            p1.appendChild(nombre);
            linea.appendChild(p1);

            let p2 = document.createElement("span");
            let pais = document.createTextNode("País" + personas[i].location.country);
            p2.appendChild(pais);
            linea.appendChild(p2);

            let p3 = document.createElement("span");
            let email = document.createTextNode("Email" + personas[i].email);
            p3.appendChild(email);
            linea.appendChild(p3);

            let imagen = document.createElement("img");
            imagen.src = personas[i].picture.medium;
            linea.appendChild(imagen);


            lista.appendChild(linea);

        }


    }

}



