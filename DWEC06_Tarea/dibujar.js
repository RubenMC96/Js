document.addEventListener('load', iniciar, false);


function iniciar(){

    // Obtener el contenedor principal donde se insertará el tablero
      
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
   
    // letiable para rastrear si el ratón está presionado
    let isMouseDown = false;
   
    // Función para manejar el clic en una celda
    function celdaSelected(e) {
      // Obtiener el color del botón seleccionado
      let selectedColor = colors.find(color => color.selected);
   
      // Aplicar el color a la celda
      e.style.backgroundColor = selectedColor;
    }
   
    // Controlador de eventos para mousedown
    function ratonPulsado() {
      isMouseDown = true;
      messageElement.textContent = "PINCEL ACTIVADO";
    }
   
    // Controlador de eventos para mouseover
    function ratonSobreCelda(e) {
      if (!isMouseDown) return;
   
      // Obtiene el color del botón seleccionado
      let selectedColor = colors.find(color => color.selected);
   
      // Aplica el color a la celda
      e.style.backgroundColor = selectedColor;
    }
   
    // Controlador de eventos para mouseup
    function ratonDespulsado() {
      isMouseDown = false;
      messageElement.textContent = "PINCEL DESACTIVADO";
    }
   
    // Obtiener el elemento para mostrar el mensaje
    let messageElement = document.getElementById("message");
   
    // Agregar el controlador de eventos a todas las celdas
    container.addEventListener("click", celdaSelected);
    container.addEventListener("mousedown", ratonPulsado);
    container.addEventListener("mouseover", ratonSobreCelda);
    container.addEventListener("mouseup", ratonDespulsado);
}