window.addEventListener("load", iniciar, false);

let pilotos = [];
let tablaPilotos = document.getElementById("tablaPilotos");

async function iniciar(){

    try{
        let response = await fetch("pilotos.json");
        let json = await response.json();
        pilotos = [...json];
        ejecuta();
    }catch(error){
        alert("Se ha producido un error");
    }

    
}

function ejecuta(){
    let opcion = document.getElementById("opcion").value;
    let tabla = document.getElementById("tablaPilotos");
    let fila = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    let thNombre = document.createElement("th");
    let textNombre = document.createTextNode("Nombre");
    let celdaEquipo = document.createElement("td");
    let thEquipo = document.createElement("th");
    let textEquipo = document.createTextNode("Equipo");
    let celdaNumero = document.createElement("td");
    let thNumero = document.createElement("th");
    let textNumero = document.createTextNode("Numero");
    let celdaNacionalidad = document.createElement("td");
    let thNacionalidad = document.createElement("th");
    let textNacionalidad = document.createTextNode("Nacionalidad");
    let celdaCampeonatos = document.createElement("td");
    let thCampeonatos = document.createElement("th");
    let textCampeonatos = document.createTextNode("Campeonatos");

    tabla.appendChild(fila);

    fila.appendChild(celdaNombre);
    celdaNombre.appendChild(thNombre);
    thNombre.appendChild(textNombre);

    fila.appendChild(celdaEquipo);
    celdaEquipo.appendChild(thEquipo);
    thEquipo.appendChild(textEquipo);

    fila.appendChild(celdaNumero);
    celdaNumero.appendChild(thNumero);
    thNumero.appendChild(textNumero);

    fila.appendChild(celdaNacionalidad);
    celdaNacionalidad.appendChild(thNacionalidad);
    thNacionalidad.appendChild(textNacionalidad);

    fila.appendChild(celdaCampeonatos);
    celdaCampeonatos.appendChild(thCampeonatos);
    thCampeonatos.appendChild(textCampeonatos);

    switch(opcion){
        case "1":
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            let celdaEquipo = document.createElement("td");
    }
}