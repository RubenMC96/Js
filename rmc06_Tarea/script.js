

window.addEventListener("load", crearZonaDibujo, true);

const zonaDibujo = document.querySelector("#zonadibujo");
const coloresPaleta = document.querySelectorAll("#paleta tr:first-child td");
const textoEstadoPincel = document.querySelector("#textoEstadoPincel");

let estadoPincel = false;
let colorSeleccionado;

function crearZonaDibujo() {

  let numeroLineas = 30;
  let numeroColumnas = 30;
  let anchoCelda = 10;
  let altoCelda = 10;

  let tabla = document.createElement("table");
  tabla.id = "tablaNueva";

  for (let i = 1; i <= numeroLineas; i++) {
    let fila = document.createElement("tr");

    for (let j = 1; j <= numeroColumnas; j++) {
      let celda = document.createElement("td");

      celda.style.width = anchoCelda + "px";
      celda.style.height = altoCelda + "px";
      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

  zonaDibujo.appendChild(tabla);

  inicio();
}


function inicio(){
  coloresPaleta.forEach(color => {
    color.addEventListener("click", asignarColorPincel);
  })
}

function asignarColorPincel(event){    
  
  if(estadoPincel){
        estadoPincel = !estadoPincel;
        textoEstadoPincel.innerHTML = "PINCEL DESACTIVADO";   
  }

  coloresPaleta.forEach(color => {
    color.classList.remove("seleccionado")   
  });

  colorSeleccionado = event.target.className;

  event.target.classList.add("seleccionado");

  let celdas = document.querySelectorAll("#tablaNueva td");
    celdas.forEach(celda => {
    celda.addEventListener("click", asignarEstadoPincel, true);
  })
}


function asignarEstadoPincel(){

  let celdas = document.querySelectorAll("#tablaNueva td");
  estadoPincel = !estadoPincel;

  if(estadoPincel){
      textoEstadoPincel.innerHTML = "PINCEL ACTIVADO";   
      celdas.forEach(celda => {
      celda.addEventListener("mouseover", pintar, true);
    })
  }

  else{
    textoEstadoPincel.innerHTML = "PINCEL DESACTIVADO";
  }
 
}

function pintar(event) {
  if (estadoPincel) {
    event.target.classList.add(colorSeleccionado);
  }
}



