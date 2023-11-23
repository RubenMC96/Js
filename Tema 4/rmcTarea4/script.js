import Disco from "./Disco.js";
import * as arrays from "./arrays.js";

let discos = [];

document.getElementById("formDisco").addEventListener("submit", function (e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let grupo = document.getElementById("grupo").value;
  let anno = document.getElementById("anno").value;
  let tipo = document.getElementById("tipo").value;
  let localizacion = document.getElementById("local").value;
  let caratula = document.getElementById("caratula").value;
  let prestamo = document.getElementById("prestamo").value;

  let disco = new Disco(nombre, grupo, anno, tipo);
  disco.modLocal(localizacion);
  disco.modPrestado(prestamo);
  disco.modCaratula(caratula);
  discos.push(disco);
});

document.getElementById("showTotal").addEventListener("click", function () {
  document.getElementById(
    "show"
  ).innerHTML = `Número de discos: ${arrays.showNum(discos)}`;
});

document.getElementById("showTabla").addEventListener("click", function () {
  let respuesta = prompt(
    "¿En qué orden quieres mostrar los discos? \n 1 - Por defecto \n 2 - En orden inverso \n 3- Alfabéticamente"
  );
  let tabla = `<table border="1px"><tr><th>Posicion</th><th>Nombre</th><th>Grupo</th><th>Año</th><th>Tipo</th><th>Localización</th><th>Prestado</th><th>Carátula</th></tr>`;
  let lista;
  let ok = false;
  do {
    switch (respuesta) {
      case "1":
        lista = discos;
        ok = true;
        break;
      case "2":
        lista = arrays.showInv(discos);
        ok = true;
        break;
      case "3":
        lista = discos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        ok = true;
        break;
      default:
        alert(
          "Error, introduce una opcion válida: ¿En qué orden quieres mostrar los discos? \n 1 - Por defecto \n 2 - En orden inverso \n 3- Alfabéticamente"
        );
        return;
    }
  } while (!ok);

  let i = 0;
  lista.forEach((disco) => {
    i++;
    tabla +=
      `<tr><td>` +
      i +
      `</td><td>${disco.nombre}</td><td>${disco.grupo}</td><td>${disco.anno}</td><td>${disco.tipo}</td><td>${disco.localizacion}</td><td>${disco.prestado}</td><td>${disco.caratula}</td></tr>`;
  });

  tabla += `</table>`;

  document.getElementById("tdiscos").innerHTML = tabla;
});

document.getElementById("showInterval").addEventListener("click", function () {
  let intervalo = prompt('Indique el intervalo (separados por un "-"').split(
    "-"
  );
  let inicio = Number.parseInt(intervalo[0]);
  let fin = Number.parseInt(intervalo[1]);

  let discosFiltrados = discos.filter(
    (disco) => disco.anno >= inicio && disco.anno <= fin
  );
  document.getElementById("show").innerHTML = alert(
    `Hay ${discosFiltrados.length} entre los años ${inicio} y ${fin}`
  );
});

document.getElementById("borrarDisco").addEventListener("click", function () {
  let opcion = prompt("Selecciona una opción: 1. Al principio. 2. Al final");

  if (opcion == "1") {
    discos = arrays.removeFrs(discos);
  } else if (opcion == "2") {
    discos = arrays.removeLst(discos);
  }
});

document.getElementById("showDisco").addEventListener("click", function () {
  let opcion = prompt("Seleccione una opción: 1. Por posición  2. Por nombre");

  if (opcion == "1") {
    let posicion = Number(prompt("Indique la posición"));
    if (posicion >= 0 && posicion <= discos.length) {
      document.getElementById("show").innerHTML =
        discos[posicion - 1].showInfo();
    } else {
      document.getElementById(
        "show"
      ).innerHTML = `No se encuentra la posición: ${posicion}`;
    }
  } else if (opcion == "2") {
    let nombre = prompt("Indique el nombre del disco");
    let disco = discos.find((disco) => disco.nombre == nombre);
    if (disco) {
      alert(disco.showInfo());
    } else {
      alert("Disco no encontrado");
    }
  } else {
    alert("Opción no válida");
  }
});
