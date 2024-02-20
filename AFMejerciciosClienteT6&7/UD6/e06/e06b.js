// Análisis de página HTML
// Crea una página HTML e incorpora las siguientes funciones 
// Javascript para analizar los elementos de la página web, 
// mostrando la información al final de la página:
// -El número de párrafos de la página.
// -El texto del segundo párrafo.
// -El número de enlaces de la página.
// -La dirección del primer enlace.
// -La dirección del penúltimo enlace.
// -El número de enlaces que apuntan a /wiki/Municipio
// -El número de enlaces del primer párrafo.
// -En consola se mostrará el texto de todos los elementos que sean <p>
//
// Haz lo mismo permitiendo al usuario elegir una página html de tu 
// mismo sitio web y cargándola dentro de un <iframe> . La página HTML 
// la puede elegir el usuario con un <input type=”file”> (Comprueba si 
//     te es de utilidad la propiedad .contentDocument de un iframe).


document.getElementById('fileInput').addEventListener('change', function (event) {
    let file = event.target.files[0]; // obtiene el primer archivo seleccionado del event.target.files que es una lista de archivos seleccionados

    let reader = new FileReader(); // permite leer los contenidos de los archivos de manera asíncrona
    reader.onload = function (event) {  //una vez leído el contenido...
        let fileContent = event.target.result; // lo guardamos como cadena de texto

        // Dividir el contenido del archivo HTML en dos partes para añadirle la referencia al script en el head
        let splitPoint = fileContent.indexOf('</title>');
        let firstPart = fileContent.substring(0, splitPoint + 9); // incluye '</title>'
        let secondPart = fileContent.substring(splitPoint + 9);

        // Insertar la etiqueta script entre las dos partes
        let modifiedContent = firstPart + '\n<script type="text/javascript" src="e06a.js" defer></script>\n' + secondPart;

        // Usando .contentDocument (se recomienda .contentWindow.document por incompatibilidades con navegadores antiguos)
        let iframe = document.getElementById('myIframe');
        iframe.contentDocument.open();
        iframe.contentDocument.write(modifiedContent);
        iframe.contentDocument.close();

        // Usando srcdoc para cargar el contenido directamente en el iframe seria asi
        //document.getElementById('myIframe').srcdoc = modifiedContent; // carga el contenido del archivo HTML directamente en el iframe
    };
    reader.readAsText(file);
});





