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




$(window).on('load', function () {
    // Rellenar datos con cookies
    let nombreJugador = $('#nombreJugador');
    let numVisitas = $('#numVisitas');

    let nombre = obtenerCookie("nombre");
    let visitas = obtenerCookie("visitas");

    if (nombre != null) {
        nombreJugador.val(nombre);
        numVisitas.text("Número de visitas: " + visitas);
    }
});

$("#jugar").click(function () {
    window.location.href = "juegoView.html";

    let nombre = $("form[name='formularioJugador'] input[name='nombreJugador']").val();
    document.cookie = "nombre=" + nombre + ";";
    let visitas = obtenerCookie("visitas");
    if (!visitas) {
        visitas = 0;
    } else {
        visitas++;
    }

    document.cookie = "visitas=" + visitas + ";";
});

function obtenerCookie(nombre) {
    let nombreCookie = nombre + "=";
    let decodificarCookie = decodeURIComponent(document.cookie);
    let arrayCookie = decodificarCookie.split(';');
    for (let i = 0; i < arrayCookie.length; i++) {
        let c = arrayCookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombreCookie) == 0) {
            return c.substring(nombreCookie.length, c.length);
        }
    }
    return "";
}
