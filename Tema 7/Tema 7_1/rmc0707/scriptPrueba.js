let pilotos = [];
let totalPaginas;
let listaActual;
let tabla = document.getElementById("tabla");
window.addEventListener("load", iniciar, false);

async function iniciar(){
 try {
    let response = await fetch("pilotos.json");
    let json = await response.json();
    pilotos = [...json];
    listaActual = [...pilotos];
    totalPaginas = Math.ceil((pilotos.length) / numPilotosPorPagina);
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
  listaActual = [...pilotos];
  listaActual.sort((a, b) => {
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
      
  mostrarPilotos(listaActual);
  }
 document.getElementById("ordenarNombreAsc").addEventListener("click",ordenarNombreAsc, false);
 function ordenarNombreAsc() {

 
  listaActual = [...pilotos];
  
  listaActual.sort((a,b) => {
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
      mostrarPilotos(listaActual);  
  }
 document.getElementById("ordenarEquipoDsc").addEventListener("click",ordenarEquipo, false);
 function ordenarEquipo() {

 
  listaActual = [...pilotos];
  listaActual.sort((a, b) => {
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
      
      mostrarPilotos(listaActual);
  }
 document.getElementById("ordenarEquipoAsc").addEventListener("click",ordenarEquipoAsc, false);
 function ordenarEquipoAsc() {

 
  let listaActual = [...pilotos];

  listaActual.sort((a,b) => {
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
      
  mostrarPilotos(listaActual);
  }

  
  document.getElementById("enviar").addEventListener("click", function(){
    let nacionalidad = document.getElementById("nacionalidad").value;
    let nacionalidadLowerCase = nacionalidad.toLowerCase();
    let pilotosFiltrados = pilotos.filter(piloto => piloto.nacionalidad.toLowerCase() === nacionalidadLowerCase);
  mostrarPilotos(pilotosFiltrados);
  pasarLista(pilotosFiltrados);
    
  },false);


/**************************************************************
 **PAGINACION
****************************************************************/

// let listaPaginada = document.getElementById("paginacion");

// function paginarPilotos(pagina){
// if(pagina <1){
//   pagina = 1;
// }
// if(pagina > totalPaginas){
//   pagina = totalPaginas;
// }
// listaPaginada.innerHTML= "";

// for(let i = ((pagina - 1) * numPilotosPorPagina); i <= numPilotosPorPagina * pagina; i++){
//   if(i < pilotos.length){
//     listaPaginada.innerHTML += pilotos[i].nombre +"<br>" ;
//   }
//   else{
//     listaPaginada .innerHTML = "";
//   }
// }

// }


























let numPilotosPorPagina = 3;

//totalPaginas devuelve 0¿?
let pagActual = 1;
let paginaDestino = 1;
//tambien devuelven 0


  document.getElementById("paginaAnterior").addEventListener("click",pagAnterior, false);
  document.getElementById("paginaSiguiente").addEventListener("click",pagSiguiente, false);
  
  function pagAnterior(){
    if(pagActual <= 1 ){
      paginaDestino = 1;
    }
    else{
      paginaDestino -= 1;
    }
  
    paginar(listaActual);
  }
  function pagSiguiente(){
    if(pagActual >= totalPaginas ){
      paginaDestino = totalPaginas;
    }
    else{
      paginaDestino += 1;
    }
    paginar(listaActual);
  }
function paginar(lista){
 
  let inicio = (paginaDestino - 1) * numPilotosPorPagina;
  let fin = inicio + numPilotosPorPagina;
  let pilotosPorMostrar = lista.slice(inicio, fin);
  mostrarPilotos(pilotosPorMostrar);
}

 


 