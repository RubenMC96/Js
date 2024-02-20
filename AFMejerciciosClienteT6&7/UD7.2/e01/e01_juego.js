// EJERCICIO 7.2.1
// Realiza el ejercicio 7.1.3 utilizando JQuery.

/////

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
$(window).on('load', cargarImagenes);

let imagenes = [];
let correos = [];


function cargarImagenes() {
    $.ajax({
        url: "https://randomuser.me/api/?results=6&format=XML",
        type: "GET",
        dataType: "xml",
        success: function (data) {
            cargarXML(data);
            repartirCartas();
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function cargarXML(xml) {
    let p = $(xml).find("results");
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 6; i++) {
            correos.push($(p[i]).find("email").text());
            imagenes.push($(p[i]).find("picture").find("large").text());
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
    let celdas = $('td');

    let cartasEscogidas = [];
    celdas.each(function (i) {
        let num;
        do {
            num = Math.floor(Math.random() * imagenes.length);
        } while (cartasEscogidas.includes(num));
        cartasEscogidas.push(num);

        let img = $('<img>').attr({
            src: imagenes[num],
            title: correos[num]
        }).css({
            display: 'none',
            width: '120px',
            height: '192px'
        });

        $(this).css({
            backgroundColor: 'blue',
            width: '120px',
            height: '192px'
        }).append(img);

        $(this).click(function () {
            img.css('display', 'block');
            jugar(img);
        });
    });
}


function jugar(img) {
    if (cartasVolteadas.length === 0) {
        cartasVolteadas.push(img);
    } else if (cartasVolteadas.length === 1) {
        cartasVolteadas.push(img);
        if (cartasVolteadas[0].attr('src') === img.attr('src')) {
            contador++;
            $('#numAciertos').val(contador);
            cartasVolteadas = [];
        } else {
            setTimeout(function () {
                cartasVolteadas[0].css({
                    display: 'none',
                    backgroundColor: 'blue'
                });
                cartasVolteadas[1].css({
                    display: 'none',
                    backgroundColor: 'blue'
                });
                cartasVolteadas = [];
            }, 1000);
        }
    }
}
