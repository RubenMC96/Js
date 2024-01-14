import Edificio from "./Edificio.js";


window.addEventListener("load", iniciar, false);

function iniciar(){

  //Div en la que mostraremos el gestor de eidificios(ok)
  let edificios = document.getElementById("edificios");

  //Boton nuevo edificio(ok)
  let botonNewEdificio = document.createElement("button");
  botonNewEdificio.id = "newEdificio";
  let textoBotonNewEdificio = document.createTextNode("Construir un nuevo edificio");
  botonNewEdificio.appendChild(textoBotonNewEdificio);
  edificios.appendChild(botonNewEdificio);
  document.getElementById("newEdificio").addEventListener("click", newEdificio, false);

  //Boton mostrar lista array edificios(ok)
  let botonListEdificios = document.createElement("button");
  botonListEdificios.id = "showLista";
  let textoBotonListEdificios = document.createTextNode("Mostar lista de edificios");
  botonListEdificios.appendChild(textoBotonListEdificios);
  edificios.appendChild(botonListEdificios);
  document.getElementById("showLista").addEventListener("click", showLista, false);

  //Boton editar un propietario(ok)
  let botonEditPropietario = document.createElement("button");
  botonEditPropietario.id = "editPropietario";
  let textoBotonEditPropietario = document.createTextNode("Editar un propietario");
  botonEditPropietario.appendChild(textoBotonEditPropietario);
  edificios.appendChild(botonEditPropietario);
  document.getElementById("editPropietario").addEventListener("click", editPropietario, false);


  //Boton mostrar un edificio(ok)
  let botonShowEdificio = document.createElement("button");
  botonShowEdificio.id = "showEdificio";
  
  let textoBotonShowEdificio = document.createTextNode("Mostrar un edificio");
  botonShowEdificio.appendChild(textoBotonShowEdificio);
  let lista = document.getElementById("listaEdificios");
  lista.appendChild(botonShowEdificio);
  document.getElementById("showEdificio").addEventListener("click", showEdificio, false);

  //Crear lista de edificios
  let listaEdificios = document.createElement("select");
  listaEdificios.name = "listaEdificios";
  listaEdificios.id = "listaEdificios";
  lista = document.getElementById("listaEdificios");
  lista.appendChild(listaEdificios);
  for(let i = 0; i<= arrEdificios.length -1; i++){
    let options = document.createElement("option");
    options.value = i;
    options.name = "option";
    listaEdificios.appendChild(options);
    let textoOptions = document.createTextNode(arrEdificios[i].obtenerNombreCalle());
    console.log(arrEdificios[i]);
    edificios.appendChild(textoOptions);
  }
  

  




}

var arrEdificios = [];



function newEdificio(){

  let nombre = prompt("Indique el nombre de la calle:");
  let numero = prompt("Indique el numero del edificio:");
  let cp = prompt("Indique el CP:");
  let plantas = prompt("Indique el numero de plantas:");
  let puertas = prompt("Indique el numero de puertas:");

  let edificio = new Edificio(nombre, numero, cp);
  edificio.agregarPlantasYPuertas(plantas,puertas);
  arrEdificios.push(edificio);
  console.log(arrEdificios);
}

function showLista(){
  
  for(let i = 0; i <= arrEdificios.length -1; i++){

    let lista = document.createElement("div");
    lista.id = "lista";
    let edificioX = document.createElement("span");
    edificioX.id = "edificioX";
    let textoEdificioX = document.createTextNode(arrEdificios[i].obtenerNombreCalle);
    let opcion = document.createElement("input");
    opcion.type = "radio";
    opcion.name = "radio";
    opcion.value = i;
    edificioX.appendChild(textoEdificioX);
    lista.appendChild(edificioX);
    lista.appendChild(opcion);
  }
}

function editPropietario(){

  let opcion = document.getElementsByName("radio");
  let opcionSelect
  for(let i=0; i<= opcion.length -1; i++){
    if(opcion[i].checked){
      opcionSelect = opcion[i];
    }
  }
  let planta = prompt("Indique la planta");
  let puerta = prompt("Indique la puerta");
  let nombre = prompt("Indique la nombre");

  let edificioSelect = arrEdificios[opcionSelect];

  if (edificioSelect) {
    edificioSelect.agregarPropietario(nombre, planta, puerta);
  }
  

}

function showEdificio(){
  let numEdificioSelect = document.getElementsByTagName("select")[0];
  let opcionSelect;
 
  numEdificioSelect.addEventListener("change", function(){
    opcionSelect = this.value;
    console.log(opcionSelect); 
  });
 
  if (opcionSelect !== undefined) {
    let pos = parseInt(opcionSelect);
    let edificioSelect = arrEdificios[pos];
 
    let tabla = document.createElement("table");
    for(let i = 0; i<= edificioSelect.length -1; i++){
      let fila = document.createElement("tr");
      let columna1 = document.createElement("td");
      let planta = document.createTextNode(`Planta ${i}`);
      columna1.appendChild(planta);
 
      if(edificioSelect[i].obtenerNombreCalle == null){
        let columna2 = document.createElement("td");
        let nombre = "";
        columna2.appendChild(document.createTextNode(nombre));
      }
      else{
        let columna2 = document.createElement("td");
        let nombre = edificioSelect[i].obtenerNombreCalle();
        columna2.appendChild(document.createTextNode(nombre));
      }
      fila.appendChild(columna1);
      fila.appendChild(columna2);
      tabla.appendChild(fila);
    }
 
    lista.appendChild(tabla);
  }
 }
 
