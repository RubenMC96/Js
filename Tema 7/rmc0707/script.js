window.addEventListener("load", iniciar, false);

let pilotos = [];
let tablaPilotos = document.getElementById("tablaPilotos");

async function iniciar() {
  try {
    let response = await fetch("pilotos.json");
    let json = await response.json();
    pilotos = [...json];
    // ejecuta();
  } catch (error) {
    alert("Se ha producido un error");
  }
}

document.getElementById("enviar").addEventListener("click", ejecuta, false);

function ejecuta() {
  let opcion = document.getElementById("opcion");
  let tabla = `<table border="1px"><tr><th>Nombre</th><th>Equipo</th><th>Número</th><th>Nacionalidad</th><th>Campeonatos</th></tr>`;
  let listaPilotos;
  switch (opcion) {
    case "1": //Ordenar por Nombre
      listaPilotos = pilotos.sort((a, b) => {
        let nombre1 = a.nombre;
        let nombre2 = b.nombre;
        if (nombre1 < nombre2) {
          return -1;
        }
        if (nombre1 > nombre2) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    case "2": //Ordenar por equipo
      listaPilotos = pilotos.sort((a, b) => {
        let equipo1 = a.equipo;
        let equipo2 = b.equipo;
        if (equipo1 < equipo2) {
          return -1;
        }
        if (equipo1 > equipo2) {
          return 1;
        } else {
          return 0;
        }
        
      });
      let i = 0;
      listaPilotos.forEach((piloto) => {
        i++;
        tabla +=
          `<tr><td>` +
          i +
          `</td><td>${naciolaidadPiloto.nombre}</td><td>${naciolaidadPiloto.equipo}</td><td>${naciolaidadPiloto.numero}</td><td>${naciolaidadPiloto.nacionalidad}</td><td>${naciolaidadPiloto.campeonatos}</td></tr>`;
      });

      tabla += `</table>`;
      break;
    case "3": //Filtrar por Nacionalidad
      let nacionalidad = prompt("Indique la naciolaidad");
      let naciolaidadPiloto = pilotos.filter(
        (pilotos) => pilotos.nacionalidad == nacionalidad
      );
      tabla += `<td>${naciolaidadPiloto.nombre}</td><td>${naciolaidadPiloto.equipo}</td><td>${naciolaidadPiloto.numero}</td><td>${naciolaidadPiloto.nacionalidad}</td><td>${naciolaidadPiloto.campeonatos}</td></tr></table>`;
      break;
  }
}

let trTabla = document
  .getElementById("tablaPilotos").getElementsByTagName("tr")

  for(let i = 0; i<= trTabla.length; i ++){
      trTabla[i].addEventListener("click", destacar, false);
  }
function destacar(e) {
    this.class = "destacado";
}


