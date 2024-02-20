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

function getNumberOfParagraphs() {
    return document.getElementsByTagName("p").length;
}

function getSecondParagraphText() {
    return document.getElementsByTagName("p")[1].textContent;
}

function getNumberOfLinks() {
    return document.getElementsByTagName("a").length;
}

function getFirstLinkAddress() {
    return document.getElementsByTagName("a")[0].getAttribute("href");
}
function getPenultimateLinkAddress() {
    let links = document.getElementsByTagName("a");
    return links[links.length - 2].getAttribute("href");
}

function getNumberOfWikiMunicipioLinks() {
    let count = 0;
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").includes("/wiki/Municipio")) {
            count++;
        }
    }
    return count;
}

function getNumberOfFirstParagraphLinks() {
    let firstParagraph = document.getElementsByTagName("p")[0];
    return firstParagraph.getElementsByTagName("a").length;
}

function displayParagraphTexts() {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i].textContent);
    }
}

window.onload = function() {
    let resultDiv = document.createElement("div");
    document.body.appendChild(resultDiv);
 
    resultDiv.innerHTML += "Número de párrafos: " + getNumberOfParagraphs() + "<br>";
    resultDiv.innerHTML += "Texto del segundo párrafo: " + getSecondParagraphText() + "<br>";
    resultDiv.innerHTML += "Número de enlaces: " + getNumberOfLinks() + "<br>";
    resultDiv.innerHTML += "Primer enlace: " + getFirstLinkAddress() + "<br>";
    resultDiv.innerHTML += "Penúltimo enlace: " + getPenultimateLinkAddress() + "<br>";
    resultDiv.innerHTML += "Número de enlaces a /wiki/Municipio: " + getNumberOfWikiMunicipioLinks() + "<br>";
    resultDiv.innerHTML += "Número de enlaces en el primer párrafo: " + getNumberOfFirstParagraphLinks() + "<br>";
 
    displayParagraphTexts();
 };
 