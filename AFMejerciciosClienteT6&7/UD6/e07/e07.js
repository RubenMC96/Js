// Vamos a hacer unas modificaciones a partir de la tarea de la unidad 4, 

// Crea un Formulario que permita crear un edificio pidiendo sus datos 
// principales y las plantas y las puertas, haciendo las validaciones 
// que consideres oportunas. Cuando los datos sean correctos se añadirá 
// a un array de edificios.
// En otro formulario se mostrará la lista de edificios que tenemos 
// en el array, con su dirección y un radio button. 

// Después de la lista habrá 3 campos de texto (planta, puerta y propietario) 
// para modificar el propietario de un piso del edificio seleccionado.

// 	Crea otro formulario que permita mostrar un edificio, seleccionandolo 
//     a partir de su dirección mostrada en un elemento <select> y un 
//     botón mostrar edificio que muestre un edificio en forma de tabla 
//     con sus propietarios. La salida será similar a lo siguiente, 
//     utilizando los métodos de creación de elementos vistos en la unidad:

// imagen7

//Al hacer click sobre un propietario nos mostrará una etiqueta que
//  ponga propietario y una caja de texto con el propietario, podremos 
//  modificarlo y al pulsar enter, quedará ese propietario modificado en el array.

import { Edificio } from './Edificio.js';

let edificios = [];

document.getElementById('edificioForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let calle = document.getElementById('calle').value;
    let numero = document.getElementById('numero').value;
    let codPostal = document.getElementById('codPostal').value;
    let numPlantas = document.getElementById('numPlantas').value;
    let numPuertas = document.getElementById('numPuertas').value;

    if (!calle || !numero || !codPostal || !numPlantas || !numPuertas) {
        alert('Por favor, complete todos los campos');
        return;
    }

    let nuevoEdificio = new Edificio(calle, numero, codPostal);
    nuevoEdificio.agregarPlantasYPuertas(numPlantas, numPuertas);
    edificios.push(nuevoEdificio);
    console.log(edificios);

    alert('Edificio creado exitosamente');
    actualizarListaEdificios();
});


function actualizarListaEdificios() {
    let form = document.getElementById('listaEdificiosForm');
    let selectEdificio = document.getElementById('edificioSeleccionado');
    form.innerHTML = ''; // Borra los botones de radio existentes
    if (selectEdificio != null)
        selectEdificio.innerHTML = ''; // Borra las opciones existentes

    for (let i = 0; i < edificios.length; i++) {
        let edificio = edificios[i];
        let direccion = `${edificio.imprimeCalle()}, ${edificio.imprimeNumero()}, ${edificio.imprimeCodigoPostal()}`;

        // Crea un nuevo botón de radio para este edificio
        let inputRadio = document.createElement('input');
        inputRadio.type = 'radio';
        inputRadio.name = 'edificioSeleccionado';
        inputRadio.id = `edificio${i}`;
        inputRadio.value = i;

        // Crea una nueva etiqueta para este botón de radio
        let label = document.createElement('label');
        label.htmlFor = `edificio${i}`;
        label.textContent = direccion;

        // Agrega el botón de radio y la etiqueta al formulario
        form.appendChild(inputRadio);
        form.appendChild(label);
        form.appendChild(document.createElement('br')); // Para separar cada par de botón de radio y etiqueta

        // Agrega la dirección como una opción en el select
        let option = document.createElement('option');
        option.value = i;
        option.text = direccion;
        selectEdificio.appendChild(option);
    }
}


// Llama a esta función para actualizar la lista de edificios cuando se carga la página
actualizarListaEdificios();

// Modificar datos del edificio seleccionado
document.getElementById('modificarPropietarioButton').addEventListener('click', function () {
    let planta = parseInt(document.getElementById('planta').value) - 1;
    let puerta = parseInt(document.getElementById('puerta').value) - 1;
    let propietario = document.getElementById('propietario').value;

    // Encuentra el edificio seleccionado en el array `edificios`
    let edificioSeleccionado = null;
    for (let i = 0; i < edificios.length; i++) {
        if (document.getElementById(`edificio${i}`).checked) {
            edificioSeleccionado = edificios[i];
            break;
        }
    }

    if (edificioSeleccionado === null) {
        alert('Por favor, selecciona un edificio antes de modificar el propietario');
        return;
    }

    // Modifica el propietario del piso seleccionado
    edificioSeleccionado.agregarPropietario(propietario, planta, puerta);
    alert(`Propietario modificado exitosamente en la planta ${planta + 1} y puerta ${puerta + 1}`);
    actualizarListaEdificios();
});

document.getElementById('mostrarEdificioButton').addEventListener('click', function () {
    let edificioSeleccionadoIndex = document.getElementById('edificioSeleccionado').value;

    if (isNaN(edificioSeleccionadoIndex)) {
        alert('Por favor, selecciona un edificio antes de ver su información');
        return;
    }

    let edificioSeleccionado = edificios[parseInt(edificioSeleccionadoIndex)];
    generarTabla(edificioSeleccionado);
});

function generarTabla(edificio) {
    let tablaContainer = document.getElementById('tablaEdificio');
    tablaContainer.innerHTML = ''; // Borra la tabla existente
   
    // Crea un elemento de tabla
    let tabla = document.createElement('table');
   
    // Recorre las plantas en orden inverso y crea una fila para cada una
    for (let i = edificio.plantas.length - 1; i >= 0; i--) {
        let planta = edificio.plantas[i];
        let fila = document.createElement('tr');
    
        // Agrega una celda para el encabezado de la columna de plantas
        let celdaEncabezado = document.createElement('th');
        celdaEncabezado.textContent = `Planta ${i + 1}`;
        fila.appendChild(celdaEncabezado);
    
        // Agrega una celda para cada puerta
        for (let j = 0; j < planta.length; j++) {
            let celda = document.createElement('td');
            let textoCelda = planta[j] ? planta[j] : '&nbsp;'.repeat(10);
            let span = document.createElement('span');
            span.innerHTML = textoCelda;
            celda.appendChild(span);
            fila.appendChild(celda);
            celda.id = `planta${i}_puerta${j}`;
        celda.addEventListener('click', function() {
            // Crear una caja de texto y una etiqueta
            let input = document.createElement('input');
            input.value = celda.innerText;
            let label = document.createElement('label');
            label.textContent = 'Propietario: ';
            label.appendChild(input);
            
            // Agregar el input y la etiqueta a la celda
            celda.innerHTML = '';
            celda.appendChild(label);
            
            // Poner el foco en la caja de texto
            input.focus();
            
            // Agregar un controlador de eventos al input
            input.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    let propietario = input.value;
                    
                    // Obtén la planta y la puerta del ID de la celda
                    let idCelda = celda.id;
                    let partesId = idCelda.split('_');
              
                    // Comprueba que el ID de la celda tiene la forma correcta
                    if (partesId.length !== 2) {
                        console.error(`ID de celda inválido: ${idCelda}`);
                        return;
                    }
              
                    let planta = parseInt(partesId[0].substring(6));
                    let puerta = parseInt(partesId[1].substring(6));
              
                    edificio.agregarPropietario(propietario, planta, puerta);
                    actualizarListaEdificios();
                    
                    // Eliminar el input y la etiqueta de la celda
                    celda.innerHTML = '';
                    celda.textContent = propietario;
                    console.log(edificios);

                }
              });   
           }); 
    }
    // Añade la fila a la tabla
    tabla.appendChild(fila);
    }
   
    // Añade la tabla al contenedor de la tabla
    tablaContainer.appendChild(tabla);
}
   

 
   