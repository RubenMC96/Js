let pilotos = [];
let tabla = document.getElementById("tabla");
window.addEventListener("load", iniciar, false);

async function iniciar(){
 try {
    let response = await fetch("pilotos.json");
    let json = await response.json();
    pilotos = [...json];
    console.log('Datos cargados:', pilotos);
    mostrarPilotos();
 } catch (error) {
  console.log("Error:" ,error);
    alert("Se ha producido un error");
 }

}
function mostrarPilotos() {
  // Recorre la lista de pilotos
  
  tabla.innerHTML = '<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th><th>Campeonatos</th>'
  for (let i = 0; i < pilotos.length; i++) {
    console.log(`Procesando piloto ${i}:`, pilotos[i]);
     // Crea una nueva fila
     let fila = document.createElement('tr');
 
     // Crea las celdas y las agrega a la fila
     let celdaNombre = document.createElement('td');
     celdaNombre.textContent = pilotos[i].nombre;
     fila.appendChild(celdaNombre);
 
     let celdaEquipo = document.createElement('td');
     celdaEquipo.textContent = pilotos[i].equipo;
     fila.appendChild(celdaEquipo);
 
     let celdaNumero = document.createElement('td');
     celdaNumero.textContent = pilotos[i].numero;
     fila.appendChild(celdaNumero);
 
     let celdaNacionalidad = document.createElement('td');
     celdaNacionalidad.textContent = pilotos[i].nacionalidad;
     fila.appendChild(celdaNacionalidad);
 
     let celdaCampeonatos = document.createElement('td');
     celdaCampeonatos.textContent = pilotos[i].campeonatos;
     fila.appendChild(celdaCampeonatos);
 
     // Agrega la fila a la tabla
     tabla.appendChild(fila);
  }
 }

 document.getElementById("ordenarNombre").addEventListener("click",ordenarNombre, false);
 function ordenarNombre() {

 
  let lista;
  
  lista = pilotos.sort((a, b) => {
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
      
  tabla.innerHTML = '<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th><th>Campeonatos</th>'
  for (let i = 0; i < lista.length; i++) {
    console.log(`Procesando piloto ${i}:`, lista[i]);
     // Crea una nueva fila
     let fila = document.createElement('tr');
 
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
 document.getElementById("ordenarEquipo").addEventListener("click",ordenarEquipo, false);
 function ordenarEquipo() {

 
  let lista;

  lista = pilotos.sort((a, b) => {
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
      
  tabla.innerHTML = '<tr><th>Equipo</th><th>Nombre</th><th>Numero</th><th>Nacionalidad</th><th>Campeonatos</th>'
  for (let i = 0; i < lista.length; i++) {
    console.log(`Procesando piloto ${i}:`, lista[i]);
     // Crea una nueva fila
     let fila = document.createElement('tr');
 
     // Crea las celdas y las agrega a la fila
     let celdaEquipo = document.createElement('td');
     celdaEquipo.textContent = lista[i].equipo;
     fila.appendChild(celdaEquipo);

     let celdaNombre = document.createElement('td');
     celdaNombre.textContent = lista[i].nombre;
     fila.appendChild(celdaNombre);
 
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

  
  document.getElementById("enviar").addEventListener("click", function(){
    let nacionalidad = document.getElementById("nacionalidad").value;
    let nacionalidadLowerCase = nacionalidad.toLowerCase();
    let pilotosFiltrados = pilotos.filter(piloto => piloto.nacionalidad.toLowerCase() === nacionalidadLowerCase);
  pilotosFiltrados;
    tabla.innerHTML = '<tr><th>Nombre</th><th>Equipo</th><th>Numero</th><th>Nacionalidad</th><th>Campeonatos</th>'
  for (let i = 0; i < pilotosFiltrados.length; i++) {
    console.log(`Procesando piloto ${i}:`, pilotosFiltrados[i]);
     // Crea una nueva fila
     let fila = document.createElement('tr');
 
     // Crea las celdas y las agrega a la fila
     let celdaNombre = document.createElement('td');
     celdaNombre.textContent = pilotosFiltrados[i].nombre;
     fila.appendChild(celdaNombre);
 
     let celdaEquipo = document.createElement('td');
     celdaEquipo.textContent = pilotosFiltrados[i].equipo;
     fila.appendChild(celdaEquipo);
 
     let celdaNumero = document.createElement('td');
     celdaNumero.textContent = pilotosFiltrados[i].numero;
     fila.appendChild(celdaNumero);
 
     let celdaNacionalidad = document.createElement('td');
     celdaNacionalidad.textContent = pilotosFiltrados[i].nacionalidad;
     fila.appendChild(celdaNacionalidad);
 
     let celdaCampeonatos = document.createElement('td');
     celdaCampeonatos.textContent = pilotosFiltrados[i].campeonatos;
     fila.appendChild(celdaCampeonatos);
 
     // Agrega la fila a la tabla
     tabla.appendChild(fila);
  }
  },false);

 
 



 

