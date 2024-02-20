// Formulario Dinámico
// Crea de manera dinámica (es decir, al cargarse la página) 
// el formulario que definimos en el ejercicio 5.5 de la unidad  5
// Ten en cuenta que el formulario deberá tener los atributos 
// necesarios para que, al crearse, tenga la misma funcionalidad 
// que el que creaste en html. Utiliza los métodos vistos en la 
// unidad.

// Al añadir un nuevo disco se debe de mostrar una tabla 
// creada con elementos de manera dinámica que muestre todos los 
// discos del array en orden alfabético y resaltando de alguna 
// manera el disco recién añadido.

// CREACION DEL HTML DESDE JS
// Crear el formulario
let formulario = document.createElement("form");
formulario.setAttribute("id", "formularioDisco");
formulario.setAttribute("name", "formularioDisco");
formulario.setAttribute("action", "");
formulario.setAttribute("method", "post");

// Crear el fieldset
let fieldset = document.createElement("fieldset");
fieldset.setAttribute("id", "grupoDatosDisco");
fieldset.setAttribute("name", "grupoDatosDisco");

// Crear el legend
let legend = document.createElement("legend");
legend.innerHTML = "Formulario para introducir los datos de los discos";
fieldset.appendChild(legend);

// Definir los campos
let campos = [
    { nombre: "nombreDisco", label: "Nombre del disco:" },
    { nombre: "autor", label: "Nombre del grupo o cantante:" },
    { nombre: "anho", label: "Año de publicación:" },
    { nombre: "tipo", label: "Tipo de música (“rock”, “pop”, “punk” o “indie”):" },
    { nombre: "localizacion", label: "Número de estantería:" }
];

// Función para crear una etiqueta y un input
function crearCampo(campo) {
    let label = document.createElement("label");
    label.setAttribute("id", "label" + campo.nombre.charAt(0).toUpperCase() + campo.nombre.slice(1));
    label.setAttribute("for", campo.nombre);
    label.innerHTML = campo.label;

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", campo.nombre);
    input.setAttribute("name", campo.nombre);
    input.setAttribute("required", true);

    return [label, input];
}

// Crear las etiquetas e inputs para cada campo
campos.forEach(function (campo) {
    let [label, input] = crearCampo(campo);
    fieldset.appendChild(label);
    fieldset.appendChild(input);
    let br = document.createElement("br");
    fieldset.appendChild(br);
});



// Crear el input oculto
let hiddenInput = document.createElement("input");
hiddenInput.setAttribute("type", "hidden");
hiddenInput.setAttribute("id", "prestado");
hiddenInput.setAttribute("name", "prestado");
hiddenInput.setAttribute("value", "false");
fieldset.appendChild(hiddenInput);

// Crear el botón de envío
let button = document.createElement("input");
button.setAttribute("id", "boton");
button.setAttribute("type", "button");
button.setAttribute("value", "Enviar");
fieldset.appendChild(button);

// Agregar el fieldset al formulario
formulario.appendChild(fieldset);

// Agregar el formulario al cuerpo del documento
document.body.appendChild(formulario);

//CODIGO DEL EJERCICIO 5.5
//validar que nombreDisco tiene max20 caracteres
function validarNombreOrAutor(name) {
    return /^.{0,20}$/.test(name); //true or false
}

//validar que anho tiene 4 caracteres numéricos
function validarAnho(anho) {
    return /^\d{0,4}$/.test(anho); //true or false
}

//validar que tipo es  “rock”, “pop”, “punk” o “indie”
function validarTipo(tipo) {
    return /^(rock|pop|punk|indie)$/.test(tipo); //true or false
}

//localizacion puede ir vacio o numerico
function validarLocalizacion(localizacion) {
    return /^\d*$/.test(localizacion); //true or false
}

//comprobar que prestado es false
function validarPrestado(prestado) {
    return /^false$/.test(prestado); //true or false
}

//funcion para lanzar comprobación insitu: si no se cumple validación, aplicar css
function comprobarMientrasInput(nameInput, nameValidationFuction) {
    document.getElementById(`${nameInput}`).addEventListener("input",
        function (event) {
            if (!nameValidationFuction(event.target.value)) {
                event.target.labels[0].classList.add("label-error");
                event.target.classList.add("error");
            } else {
                event.target.labels[0].classList.remove("label-error");
                event.target.classList.remove("error");
            }
        }
    );
}

comprobarMientrasInput("nombreDisco", validarNombreOrAutor);
comprobarMientrasInput("autor", validarNombreOrAutor);
comprobarMientrasInput("anho", validarAnho);
comprobarMientrasInput("tipo", validarTipo);
comprobarMientrasInput("localizacion", validarLocalizacion);
comprobarMientrasInput("prestado", validarPrestado);


//comprobar todos los datos al darle a enviar
let discos = [];

document.getElementById("boton").addEventListener("click",
    function (event) {

        let nombreDisco = document.getElementById("nombreDisco").value;
        let autor = document.getElementById("autor").value;
        let anho = document.getElementById("anho").value;
        let tipo = document.getElementById("tipo").value;
        let localizacion = document.getElementById("localizacion").value;
        let prestado = document.getElementById("prestado").value;

        if (!validarNombreOrAutor(nombreDisco) ||
            !validarNombreOrAutor(autor) ||
            !validarAnho(anho) ||
            !validarTipo(tipo) ||
            !validarLocalizacion(localizacion) ||
            !validarPrestado(prestado)) {
            event.preventDefault();
            alert("Por favor, corrija los errores en el formulario antes de enviarlo.");
        } else {
            let disco = {
                nombreDisco: nombreDisco,
                autor: autor,
                anho: anho,
                tipo: tipo,
                localizacion: localizacion,
                prestado: prestado
            };
            discos.push(disco);
            console.log(discos);

            // Verificar si la tabla ya existe
            let tabla = document.getElementById("tablaDiscos");
            let tbody;
            if (!tabla) {
                // Crear la tabla y su cuerpo
                tabla = document.createElement("table");
                tabla.setAttribute("id", "tablaDiscos");
                tbody = document.createElement("tbody");
                tabla.appendChild(tbody);
                // Agregar la tabla al cuerpo del documento
                document.body.appendChild(tabla);
            } else {
                tbody = tabla.getElementsByTagName('tbody')[0];
            }

            // Crear una nueva fila y agregarla a la tabla
            let fila = document.createElement("tr");
            for (let propiedad in disco) {
                let celda = document.createElement("td");
                celda.textContent = disco[propiedad];
                fila.appendChild(celda);
            }
            tbody.appendChild(fila);
        }
    }
);
