$(document).ready(crearZonaDibujo);

const zonaDibujo = $("#zonadibujo");
const coloresPaleta = $("#paleta tr:first-child td");
const textoEstadoPincel = $("#textoEstadoPincel");

let estadoPincel = false;
let colorSeleccionado;

function crearZonaDibujo() {
  let numeroLineas =  30;
  let numeroColumnas =  30;
  let anchoCelda =  10;
  let altoCelda =  10;

  let tabla = $("<table>").attr("id", "tablaNueva");

  for (let i =  1; i <= numeroLineas; i++) {
    let fila = $("<tr>");

    for (let j =  1; j <= numeroColumnas; j++) {
      let celda = $("<td>").css({ width: anchoCelda + "px", height: altoCelda + "px" });
      fila.append(celda);
    }

    tabla.append(fila);
  }

  zonaDibujo.append(tabla);

  inicio();
}

function inicio() {
  coloresPaleta.on("click", asignarColorPincel);
}

function asignarColorPincel(event) {
  if (estadoPincel) {
    estadoPincel = !estadoPincel;
    textoEstadoPincel.text("PINCEL DESACTIVADO");
  }

  coloresPaleta.removeClass("seleccionado");

  colorSeleccionado = $(event.target).attr("class");

  $(event.target).addClass("seleccionado");

  $("#tablaNueva td").on("click", asignarEstadoPincel);
}

function asignarEstadoPincel() {
  estadoPincel = !estadoPincel;

  if (estadoPincel) {
    textoEstadoPincel.text("PINCEL ACTIVADO");
    $("#tablaNueva td").on("mouseover", pintar);
  } else {
    textoEstadoPincel.text("PINCEL DESACTIVADO");
  }
}

function pintar(event) {
  if (estadoPincel) {
    $(event.target).addClass(colorSeleccionado);
  }
}
