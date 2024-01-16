import Edificio from "./Edificio.js";


window.addEventListener("load", iniciar, false);



function iniciar(){

  let arrEdificios = [];

  //Creacion de formularios

  //Formulario nuevo edificio
  let divNewEdificio = document.getElementById("newEdificio");
  let formulario = document.createElement("form");
  formulario.id = "edificioForm";
  divNewEdificio.appendChild(formulario);

  let labelCalle = document.createElement("label");
  let textLabelCalle = document.createTextNode("Calle");
  
  let calle = document.createElement("input");
  calle.type = "text";
  calle.id = "calle";
  labelCalle.for = calle.id;
  formulario.appendChild(labelCalle);
  formulario.appendChild(textLabelCalle);
  formulario.appendChild(calle);


  let labelNumero = document.createElement("label");
  let textlabelNumero = document.createTextNode("Numero");


  let numero = document.createElement("input");
  numero.type = "text";
  numero.id = "numero";
  labelNumero.for = numero.id;
  formulario.appendChild(labelNumero);
  formulario.appendChild(textlabelNumero);
  formulario.appendChild(numero);

  let labelCP = document.createElement("label");
  let textlabelCP = document.createTextNode("Codigo postal");

  let cp = document.createElement("input");
  cp.type = "text";
  cp.id = "cp";
  labelCP.for = cp.id;

  formulario.appendChild(labelCP);
  formulario.appendChild(textlabelCP);
  formulario.appendChild(cp);

  let labelNumPlantas = document.createElement("label");
  let textlabelNumPlantas = document.createTextNode("Numero de plantas");

  let numPlantas = document.createElement("input");
  numPlantas.type = "number";
  numPlantas.id = "numPlantas";
  labelNumPlantas.for = numPlantas.id;

  formulario.appendChild(labelNumPlantas);
  formulario.appendChild(textlabelNumPlantas);
  formulario.appendChild(numPlantas);

  let labelNumPuertas = document.createElement("label");
  let textlabelNumPuertas = document.createTextNode("Numero de puertas");

  let numPuertas = document.createElement("input");
  numPuertas.type = "number";
  numPuertas.id = "numPuertas";
  labelNumPuertas.for = numPuertas.id;

  formulario.appendChild(labelNumPuertas);
  formulario.appendChild(textlabelNumPuertas);
  formulario.appendChild(numPuertas);

  let botonNewEdificio = document.createElement("button");
  botonNewEdificio.type = "button";
  botonNewEdificio.id = "newEdificio";
  let textbotonNewEdificio = document.createTextNode("Nuevo edificio");

  formulario.appendChild(botonNewEdificio);
  botonNewEdificio.appendChild(textbotonNewEdificio);

  botonNewEdificio.addEventListener("click", crearNuevoEdificio, false);



  //Formulario editar propietario

  let divEditPropietario = document.getElementById("editPropietario");
  let formEditPropietario = document.createElement("form");
  formEditPropietario.id = "editPropietario";
  divEditPropietario.appendChild(formEditPropietario);

  let labelPlanta = document.createElement("label");
  let textlabelPlanta = document.createTextNode("Numero de planta");

  let numeroPlanta = document.createElement("input");
  numeroPlanta.type = "number";
  numeroPlanta.id = "numeroPlanta";
  labelPlanta.for = numeroPlanta.id;

  formEditPropietario.appendChild(labelPlanta);
  formEditPropietario.appendChild(textlabelPlanta);
  formEditPropietario.appendChild(numeroPlanta);

  let labelPuerta = document.createElement("label");
  let textlabelPuerta = document.createTextNode("Numero de puerta");

  let numeroPuerta = document.createElement("input");
  numeroPuerta.type = "number";
  numeroPuerta.id = "numeroPuerta";
  labelPuerta.for = numeroPuerta.id;

  formEditPropietario.appendChild(labelPuerta);
  formEditPropietario.appendChild(textlabelPuerta);
  formEditPropietario.appendChild(numeroPuerta);

  let labelPropietario = document.createElement("label");
  let textlabelPropietario = document.createTextNode("Propietario");

  let propietario = document.createElement("input");
  propietario.type = "text";
  propietario.id = "propietario";
  labelPropietario.for = propietario.id;

  formEditPropietario.appendChild(labelPropietario);
  formEditPropietario.appendChild(textlabelPropietario);
  formEditPropietario.appendChild(propietario);

  let botonEditPropietario = document.createElement("button");
  botonEditPropietario.type = "button";
  botonEditPropietario.id = "botonEditPropietario";
  let textbotonEditEdificio = document.createTextNode("Editar propietario");

  formEditPropietario.appendChild(botonEditPropietario);
  botonEditPropietario.appendChild(textbotonEditEdificio);

  botonEditPropietario.addEventListener("click", editPropietario, false);

  //Formulario para mostrar un edificio

  let divSelectEdificio = document.getElementById("selectEdificio");

  let formSelectEdificio = document.createElement("form");
  formSelectEdificio.id = "listaEdificios";
  divSelectEdificio.appendChild(formSelectEdificio);

  let labelSelectEdificio = document.createElement("label");
  formSelectEdificio.appendChild(labelSelectEdificio);

  let selectEdificio = document.createElement("select");
  selectEdificio.id = "selectEdificio";
  labelSelectEdificio.for = selectEdificio.id;

  formSelectEdificio.appendChild(selectEdificio);

  let botonSelectEdificio = document.createElement("button");
  botonSelectEdificio.type = "button";
  botonSelectEdificio.id = "botonSelectEdificio";
  let textbotonSelectEdificio = document.createTextNode("Mostrar el edificio");
  botonSelectEdificio.addEventListener("click", showEdificio, false)

  formSelectEdificio.appendChild(botonSelectEdificio);
  botonSelectEdificio.appendChild(textbotonSelectEdificio);


  //Fin de formularios

  //Crear nuevo edificio

  function crearNuevoEdificio(){

    let calle = document.getElementById('calle').value;
    let numero = document.getElementById('numero').value;
    let codPostal = document.getElementById('cp').value;
    let numPlantas = document.getElementById('numPlantas').value;
    let numPuertas = document.getElementById('numPuertas').value;
    if (!calle || !numero || !cp || !numPlantas || !numPuertas) {
      alert('Por favor, complete todos los campos');
      return;
    }

    let newEdificio = new Edificio(calle, numero, codPostal);
    newEdificio.agregarPlantasYPuertas(numPlantas, numPuertas);
    arrEdificios.push(newEdificio);

    actualizarListEdificios();
  }

  function actualizarListEdificios(){

      let divListEdificios = document.getElementById("showEdificio");
      let formListEdificios = document.createElement("form");
      formListEdificios.id = "formListEdificios";
      divListEdificios.appendChild(formListEdificios);
      formListEdificios.innerHTML = "";
      if (selectEdificio != null)
          selectEdificio.innerHTML = '';

      //Nombre que mostrará el edificio
      for (let i = 0; i < arrEdificios.length -1; i++) {
        let edificio = arrEdificios[i];
        let direccion = `${edificio.imprimeCalle()}, ${edificio.imprimeNumero()}}`;
      
        let labelInputRadioEdificio= document.createElement('label');
        labelInputRadioEdificio.for = `edificio${i}`;
        labelInputRadioEdificio.textContent = direccion;
        formListEdificios.appendChild(labelInputRadioEdificio);


        let inputRadioEdificio = document.createElement('input');
        inputRadioEdificio.type = 'radio';
        inputRadioEdificio.name = 'edificioSeleccionado';
        inputRadioEdificio.id = `edificio${i}`;
        inputRadioEdificio.value = i;
        formListEdificios.appendChild(inputRadioEdificio);

        let optionInputRadioEdificio = document.createElement('option');
          optionInputRadioEdificio.value = i;
          optionInputRadioEdificio.text = direccion;
            selectEdificio.appendChild(optionInputRadioEdificio);

    }
  }

  function editPropietario(){

    let planta = parseInt(document.getElementById("numPlantas").value) - 1;
    let puerta = parseInt(document.getElementById("numPuerta").value) - 1;
    let propietario = document.getElementById("propietario").value;

    //Obtener el edificio seleccionado

    let edificioSelect;

    for(let i = 0; i <= arrEdificios.length; i++){
      if(document.getElementById(`edificio${i}`).checked){
        edificioSelect = arrEdificios[i];
        break /*En este caso necesitamos break porque 
                una vez encontrado el edificio no queremos
                seguir evaluando */
      }

    }
    edificioSelect.agregarPropietario(propietario, planta, puerta);
    alert(`${propietario} es ahora el propietario del piso en la puerta ${puerta + 1} de la planta ${planta + 1}`);
    actualizarListEdificios();
  }

  function showEdificio(){

    let seleccionado = document.getElementById("selectEdificio").value;
    let divTabla = document.getElementById("tablaEdificio");
    divTabla.innerHTML = "";
    if (isNaN(seleccionado)) {
      alert("Selecciona un edificio");
      return;
    }
    let edificioSelect = arrEdificios[parseInt(seleccionado)];

    let tabla = document.createElement("table");

    for(let i = 0; i<= edificioSelect.plantas.length -1; i++){
      let planta = edificioSelect.plantas[i];
      let fila = document.createElement("tr");

      let encabezado = document.createElement("th");
        encabezado.textContent = `Planta ${i + 1}`;
        fila.appendChild(encabezado);

        for(let j = 0; j <= planta.length; j++){

          let celda = document.createElement("td");
          celda.id = `planta${i}_puerta${j}`;
          let textoCelda;
          if (planta[j]) {
            textoCelda = planta[j];
          } else {
            textoCelda = '&nbsp;'.repeat(10);//Genera una cadena de 10 espacios
          }
          let texto = document.createElement("span");
          texto.innerHTML = textoCelda;

          celda.appendChild(texto);
          fila.appendChild(celda);

          //Evento para poder agregar o modificar un propietario desde la tabla

          celda.addEventListener("click", modPropietario, false);

          function modPropietario(){
            
            let input = document.createElement("input");
            input.value = celda.innerText;
            let label = document.createElement("label");
            label.textContent = "Propietario: ";
            label.appendChild(input);

            celda.innerHTML = '';
            celda.appendChild(label);
            input.focus();

            input.addEventListener('keypress', function(event) {
              if (event.key === 'Enter') {
                  let propietario = input.value;
                  
                  // Obtén la planta y la puerta del propietario separando el ID por "_"
                  let idCelda = celda.id;
                  let partesId = idCelda.split('_');
            
                  // Comprueba que el ID de la celda tiene la forma correcta
                  if (partesId.length !== 2) {
                      console.error(`ID de celda inválido: ${idCelda}`);
                      return;
                  }
                                      
                  //En  partes[0] encontramos la planta y en la pos 6 encontramos el valor de la planta
                  let planta = parseInt(partesId[0].substring(6));
                  let puerta = parseInt(partesId[1].substring(6));
            
                  edificioSelect.agregarPropietario(propietario, planta, puerta);
                  actualizarListEdificios();
                  
                  // Eliminar el input y la etiqueta de la celda
                  celda.innerHTML = '';
                  celda.textContent = propietario;
                  console.log(edificios);
                  //Elimina el input de la celda, dejando el nombre del propietario
                  celda.innerHTML = '';
                  celda.textContent = propietario;

              }
            });
          }
        }
        tabla.appendChild(fila);
    }
    divTabla.appendChild(tabla);
  }
} 
