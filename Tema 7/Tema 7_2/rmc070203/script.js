$(document).ready(iniciar);

let equipos = [];

function iniciar(){

    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "Equipos.json", true);
    xhr.addEventListener("readystatechange", function(){

        if(this.readyState == 4 && this.status == 200){
            let json = this.response;
            equipos = [...json];

            ejecuta();
        }
    }, false);

    xhr.send();
    
}


function ejecuta(){

    let seleccion = $("#equipos");
    let opcion;
    for(let i = 0; i<= equipos.length -1; i++){
        opcion = document.createElement("option");
        opcion.value = i;
        opcion.text = equipos[i].nombre;
        seleccion.append(opcion);
        };

        seleccion.on("change", function() {
            let equipoSeleccionado = $(this).val();
            let datosEquipo = equipos[equipoSeleccionado]; 
        
            $("#nombreEquipo").slideUp(function() {
                $(this).slideDown();
                $(this).html("Nombre del equipo");
                
            });
            $("#nombre").slideUp(function() {
                $(this).slideDown();
                $(this).html(datosEquipo.nombre);
                
            });
        
            $("#PJugados").slideUp(function() {
                $(this).html("PJ");
                $(this).slideDown();
            });
            $("#PJ").slideUp(function() {
                $(this).html(datosEquipo.PJ);
                $(this).slideDown();
            });
        
            $("#PGanados").slideUp(function() {
                $(this).html("PG");
                $(this).slideDown();
            });
            $("#PG").slideUp(function() {
                $(this).html(datosEquipo.PG);
                $(this).slideDown();
            });
        
            $("#PPerdidos").slideUp(function() {
                $(this).html("PP");
                $(this).slideDown();
            });
            $("#PP").slideUp(function() {
                $(this).html(datosEquipo.PP);
                $(this).slideDown();
            });
        
            $("#PEmpatados").slideUp(function() {
                $(this).html("PE");
                $(this).slideDown();
            });
            $("#PE").slideUp(function() {
                $(this).html(datosEquipo.PE);
                $(this).slideDown();
            });
        }).trigger('change'); 
        


}



