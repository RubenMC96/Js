// Generador de Formularios
// Crea una aplicación que te permitirá generar tus 
// propios formularios de manera dinámica, después de 
// crear cada elemento, se ha de  visualizar una 
// confirmación (confirm) indicando el tipo de elemento 
// creado y su nombre o atributo correspondiente. 
// Para ello dibuja una tabla de una sola fila y varias columnas. 
// En cada columna habrá un botón que realice lo siguiente:

// -Crear un input de tipo texto. Le preguntará al usuario 
// mediante un prompt qué nombre (atributo name) tiene el input.
// -Crear un input de tipo password. Le preguntará al usuario 
// mediante un prompt qué nombre (atributo name) tiene el input.
// -Crear un textarea. Le preguntará al usuario el nombre y 
// generará automáticamente un textarea de 40 columnas y 5 filas.
// -Crear un label. Preguntará al usuario a qué input va referido (atributo for).
// -Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
// -Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value).
// -Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value).
// -Crear un botón (submit). Preguntará al usuario el 
// nombre y el valor (atributos name y value).

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let name;
        let value;
        let element;
        switch (button.innerText) {
            case 'Crear input tipo texto':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                element = document.createElement('input');
                element.type = 'text';
                element.name = name;
                element.id = name;
                break;
            case 'Crear input tipo texto password':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                element = document.createElement('input');
                element.type = 'password';
                element.name = name;
                break;
            case 'Crear textarea':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                element = document.createElement('textarea');
                element.name = name;
                element.id = name;
                element.cols = 40;
                element.rows = 5;
                break;
            case 'Crear label':
                name = prompt(`Ingrese el input al que queieres añadir el label:`);
                element = document.createElement('label');
                element.htmlFor = name;
                element.textContent = "Label creado en este input";
                break;
            case 'Crear img':
                name = prompt(`Ingrese la ruta de la imagen:`);
                element = document.createElement('img');
                element.src = name;
                element.id = name;
                break;
            case 'Crear checkbox':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                value = prompt(`Ingrese el value para el nuevo elemento:`);
                element = document.createElement('input');
                element.type = 'checkbox';
                element.name = name;
                element.value = value;
                element.id = name;
                break;
            case 'Crear radio':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                value = prompt(`Ingrese el value para el nuevo elemento:`);
                element = document.createElement('input');
                element.type = 'radio';
                element.name = name;
                element.value = value;
                element.id = name;
                break;
            case 'Crear button':
                name = prompt(`Ingrese el name para el nuevo elemento:`);
                value = prompt(`Ingrese el value para el nuevo elemento:`);
                element = document.createElement('button');
                element.name = name;
                element.value = value;
                element.id = name;
                element.textContent = name;
                break;
        }
        let br = document.createElement('br');
        document.body.appendChild(element);
        document.body.appendChild(br);
    });
});

