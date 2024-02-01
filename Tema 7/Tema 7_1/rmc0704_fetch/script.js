window.addEventListener("load", iniciar, false);

let equipos = [];


async function iniciar(){
    try{
        let response = await fetch("Equipos.json");
        let json = await response.json();
        equipos = [...json];
        ejecuta();
    }catch(error){
        alert("Se ha producido un error");
    }
}

function ejecuta(){

    let seleccion = document.getElementById("equipos");
    let opcion;
    for(let i = 0; i<= equipos.length -1; i++){
        opcion = document.createElement("option");
        opcion.value = i;
        opcion.text = equipos[i].nombre;
        seleccion.appendChild(opcion);
        //Evento a la escucha de que se seleccione ese option        
        };

        seleccion.addEventListener("change", function(){

            let tablanombre = document.getElementById("nombre");
            tablanombre.innerHTML = equipos[seleccion.value].nombre;

            let pj = document.getElementById("PJ");
            pj.innerHTML = equipos[seleccion.value].PJ;
            let pg = document.getElementById("PG");
            pg.innerHTML = equipos[seleccion.value].PG;
            let pp = document.getElementById("PP");
            pp.innerHTML = equipos[seleccion.value].PP;
            let pe = document.getElementById("PE");
            pe.innerHTML = equipos[seleccion.value].PE;

        },false);
    


}



