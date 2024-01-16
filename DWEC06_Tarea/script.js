window.addEventListener("load", iniciar, false);






function iniciar(){


    let zonadibujo = document.getElementById("zonadibujo");
    let tabla = document.createElement("table");
    tabla.classList.add("tabla");
    for(let i = 1 ; i <= 30; i++){

        let fila = document
        .createElement("tr");
        fila.classList.add("fila");
        for(let j = 1; j <= 30; j++){


            let celda = document.createElement("td");
            celda.classList.add("celda");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    zonadibujo.appendChild(tabla);



    
   
    // Agregar el controlador de eventos a todas las celdas
    zonadibujo.addEventListener("click", celdaSelected);
    zonadibujo.addEventListener("mousedown", ratonPulsado);
    zonadibujo.addEventListener("mouseover", ratonSobreCelda);
    zonadibujo.addEventListener("mouseup", ratonDespulsado);


    document.getElementsByClassName("color1")[0].addEventListener("click", seleccionarColor , false);
    document.getElementsByClassName("color2")[0].addEventListener("click", seleccionarColor , false);
    document.getElementsByClassName("color3")[0].addEventListener("click", seleccionarColor , false);
    document.getElementsByClassName("color4")[0].addEventListener("click", seleccionarColor , false);
    document.getElementsByClassName("color5")[0].addEventListener("click", seleccionarColor , false);
    document.getElementsByClassName("color6")[0].addEventListener("click", seleccionarColor , false);

    // let paleta = document.querySelectorAll('.paleta tr:first-child td');

    // let colorSelected;

    // paleta.forEach((color) => {
        
    //     color.addEventListener("click", function(){
    //         colorSelected.classList.add(color.className);
    //         color.classList("seleccionado");
    //     });
    // });


    let isMouseDown = false;
}



// letiable para rastrear si el ratón está presionado

   
 




