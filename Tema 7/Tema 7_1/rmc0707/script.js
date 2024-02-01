let pilotos = [];

let tabla = document.getElementById("tabla");
window.addEventListener("load", iniciar, false);

async function iniciar(){
 try {
    let response = await fetch("pilotos.json");
    let json = await response.json();
    pilotos = [...json];
    console.log('Datos cargados:', pilotos);
    mostrarPilotos(pilotos);
 } catch (error) {
  console.log("Error:" ,error);
    alert("Se ha producido un error");
 }

}
function mostrarPilotos(lista) {
  // Recorre la ordenadaDsc de pilotos
  
  tabla.innerHTML = '<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th><th>Campeonatos</th>'
  for (let i = 0; i < lista.length; i++) {
    console.log(`Procesando piloto ${i}:`, lista[i]);
     // Crea una nueva fila
     let fila = document.createElement('tr');
     fila.addEventListener("click",function(){
      if(this.className == ""){
        this.className = "destacado";
      }
      else 
      this.className = "";
     },false);
     // Crea las celdas y las agrega a la fila
     let celdaNombre = document.createElement('td');
     celdaNombre.textContent = lista[i].nombre;
     fila.appendChild(celdaNombre);
 
     let celdaEquipo = document.createElement('td');
     celdaEquipo.textContent = lista[i].equipo;
     fila.appendChild(celdaEquipo);
 
     let celdaNumero = document.createElement('td');
     celdaNumero.textContent = lista[i].numero;
     fila.appendChild(celdaNumero);
 
     let celdaNacionalidad = document.createElement('td');
     celdaNacionalidad.textContent = lista[i].nacionalidad;
     fila.appendChild(celdaNacionalidad);
 
     let celdaCampeonatos = document.createElement('td');
     celdaCampeonatos.textContent = lista[i].campeonatos;
     fila.appendChild(celdaCampeonatos);
 
     // Agrega la fila a la tabla
     tabla.appendChild(fila);

     
  }
 }

 document.getElementById("ordenarNombreDsc").addEventListener("click",ordenarNombre, false);
 function ordenarNombre() {
  let ordenadaDsc = [...pilotos];
  ordenadaDsc.sort((a, b) => {
          let nombreA = a.nombre.toUpperCase();
          let nombreB = b.nombre.toUpperCase();
          if (nombreA < nombreB) {
            return 1;
          }
          if (nombreA > nombreB) {
            return -1;
          }
          return 0;
      });
      
  mostrarPilotos(ordenadaDsc);
  }
 document.getElementById("ordenarNombreAsc").addEventListener("click",ordenarNombreAsc, false);
 function ordenarNombreAsc() {

 
  let ordenadaAsc = [...pilotos];
  
  ordenadaAsc.sort((a,b) => {
          let nombreA = a.nombre.toUpperCase();
          let nombreB = b.nombre.toUpperCase();
          if (nombreA > nombreB) {
            return 1;
          }
          if (nombreA < nombreB) {
            return -1;
          }
          return 0;
      });
      mostrarPilotos(ordenadaAsc);

  
  }
 document.getElementById("ordenarEquipoDsc").addEventListener("click",ordenarEquipo, false);
 function ordenarEquipo() {

 
  let ordenadaEquipoDsc = [...pilotos];
  ordenadaEquipoDsc.sort((a, b) => {
          let equipoA = a.equipo.toUpperCase();
          let equipoB = b.equipo.toUpperCase();
          if (equipoA < equipoB) {
            return 1;
          }
          if (equipoA > equipoB) {
            return -1;
          }
          return 0;
      });
      
      mostrarPilotos(ordenadaEquipoDsc);
  
  }
 document.getElementById("ordenarEquipoAsc").addEventListener("click",ordenarEquipoAsc, false);
 function ordenarEquipoAsc() {

 
  let ordenadaEquipoDsc = [...pilotos];

  ordenadaEquipoDsc.sort((a,b) => {
          let equipoA = a.equipo.toUpperCase();
          let equipoB = b.equipo.toUpperCase();
          if (equipoA > equipoB) {
            return 1;
          }
          if (equipoA < equipoB) {
            return -1;
          }
          return 0;
      });
      
  mostrarPilotos(ordenadaEquipoDsc);
  }

  
  document.getElementById("enviar").addEventListener("click", function(){
    let nacionalidad = document.getElementById("nacionalidad").value;
    let nacionalidadLowerCase = nacionalidad.toLowerCase();
    let pilotosFiltrados = pilotos.filter(piloto => piloto.nacionalidad.toLowerCase() === nacionalidadLowerCase);
  mostrarPilotos(pilotosFiltrados);
    
  },false);


/**************************************************************
 **PAGINACION
****************************************************************/

let numPilotosPorPagina = 3;
let totalPilotos = pilotos.length;
let totalPaginas = Math.ceil(totalPilotos / numPilotosPorPagina);
let pagActual = 1;



