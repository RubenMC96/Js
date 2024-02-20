let pintando = false;
window.onload = function () {
    let zonadibujo = document.getElementById('zonadibujo');
    let tablero = document.createElement('table');
    tablero.className = 'tablerodibujo';
    // CREAR TABLA
    for (let i = 0; i < 30; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < 30; j++) {
            let celda = document.createElement('td');
            celda.className = 'celda';
            fila.appendChild(celda);
        }
        tablero.appendChild(fila);
    }
    zonadibujo.appendChild(tablero);

    // SELECCIONAR COLOR
    let colores = document.querySelectorAll('#paleta td');
    let colorSeleccionado = '';
    colores.forEach((color) => {
      color.addEventListener('click', function () {
          colores.forEach((c) => c.classList.remove('seleccionado'));
          this.classList.add('seleccionado');
          colorSeleccionado = this.className;
      });
    });

    // PINCEL ACTIVO
    zonadibujo.addEventListener("mousedown", function () {
        pintando = true;
        document.getElementById("pincel").textContent = "Estado del pincel: ACTIVADO";
    });

    zonadibujo.addEventListener("mouseup", function () {
        pintando = false;
        document.getElementById("pincel").textContent = "Estado del pincel: DESACTIVADO";
    });

    zonadibujo.addEventListener("mouseover", function (event) {
        if (pintando) {
            const celda = event.target;
            if (celda.classList.contains("celda")) {
                celda.className = colorSeleccionado;
            }
        }
    });
};
