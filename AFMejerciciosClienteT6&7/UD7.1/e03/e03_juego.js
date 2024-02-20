// En los ejercicios 7.1, 7.2, 7.3, 7.4 y 7.5 utiliza el objeto XHR
// EJERCICIO 7.1.3
// Realiza el ejercicio 5.6 obteniendo las 6  imágenes desde la API REST  en formato XML 
// https://randomuser.me/api/?results=6&format=XML

// Al colocarse encima de la foto volteada ha de mostrar la dirección de correo de la persona,
// donde consideres oportuno.



////
// Vas a crear un juego que consiste en encontrar parejas 
// en 12 cartas con 6 parejas de imágenes.
// El juego consistirá en lo siguiente:
// - La aplicación deberá tener una tabla con 3 filas y cuatro 
// columnas de un color (puede ser también una imagen con un color) . 
// Además se mostrará un cuadro de texto de aciertos con el valor inicial 0.
// - Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
// - Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
// - Si las dos imágenes son iguales, se quedarán a la vista y se añadirá 1 
// al cuadro de texto de aciertos.
// - Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente
//  el color inicial.
// Además al entrar en la página al usuario se le pedirá un nombre la 
// primera vez que entre, ese nombre será almacenado en una cookie 
// además de un contador de visitas a la página. 
// 	Si vuelve a entrar en la página se le mostrará un mensaje 
//     en la misma página diciendo Hola “nombre” y el número de 
//     veces que visitó la página.

// 	Puede ser de utilidad el atributo src del elemento <img>. 
//     Podremos acceder desde event.target.src o this.src


//cargar imagenes inicialmente
window.addEventListener('load', cargarImagenes, true); //obtenemos las imagenes y correos

let imagenes = [];
let correos = [];

function cargarImagenes() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
            repartirCartas();
        }
    };
    xhr.open("GET", "https://randomuser.me/api/?results=6&format=XML", true);
    xhr.send();
}

function cargarXML(xml) {
    
    let docXML = xml.responseXML;
    let p = docXML.getElementsByTagName("results");
    for (let j = 0; j < 2; j++){
        for (let i = 0; i < 6; i++) {
            correos.push(p[i].getElementsByTagName("email")[0].textContent);
            imagenes.push(p[i].getElementsByTagName("picture")[0].getElementsByTagName("large")[0].textContent);
        }
    }
    console.log(correos);
    console.log(imagenes);
}


//jugar

// let imagenes = ['./img1.png', './img2.png', './img3.png', './img4.png',
//     './img5.png', './img6.png', './img1.png', './img2.png',
//     './img3.png', './img4.png', './img5.png', './img6.png'];
let contador = 0;
let cartasVolteadas = []

function repartirCartas() {
    let celdas = document.getElementsByTagName('td');

    let cartasEscogidas = [];
    for (let i = 0; i < celdas.length; i++) {
        let num;
        do {
            num = Math.floor(Math.random() * imagenes.length); //num es una carta aleatorio
        } while (cartasEscogidas.includes(num)); //que todavía no se escogió
        cartasEscogidas.push(num); //se guarda esta carta como escogida ya

        let img = document.createElement('img'); //creamos elemento img
        img.src = imagenes[num]; //asignamos a esta img i la url de la carta num
        img.title = correos[num]; //le asigno el correo
        img.style.display = 'none'; //ocultamos la imagen
        celdas[i].style.backgroundColor = "blue"; //ponemos color azul
        celdas[i].style.width = '120px'; // Establece el ancho de la celda
        celdas[i].style.height = '192px'; // Establece la altura de la celda
        celdas[i].appendChild(img); //asignamos a este td este elemento img
        

        celdas[i].addEventListener("click",
            function () {
                img.style.display = 'block'; //
                jugar(img);
            }
        );


    }
}


function jugar(img) {
    if (cartasVolteadas.length === 0) {
        cartasVolteadas.push(img);
    } else if (cartasVolteadas.length === 1) {
        cartasVolteadas.push(img);
        if (cartasVolteadas[0].src === img.src) {
            
            contador++;
            document.getElementById("numAciertos").value = contador;
            cartasVolteadas = [];
        } else {
            setTimeout(function () {
                cartasVolteadas[0].style.display = 'none';
                cartasVolteadas[0].style.backgroundColor = 'blue';
                cartasVolteadas[1].style.display = 'none';
                cartasVolteadas[1].style.backgroundColor = 'blue';
                cartasVolteadas = [];
            }, 1000);

        }
    }

}

