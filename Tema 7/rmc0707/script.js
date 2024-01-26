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

    switch(opcion){
        case "1":
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            let celdaEquipo = document.createElement("td");
    }
}