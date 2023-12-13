
/*
Formas de gestionar los eventos

-Modelo de registro de eventos en línea
-Modelo de registro de eventos tradicional
-Modelo de eventos avanzados del W3C
*/

La gestión de eventos en JavaScript se puede hacer de tres formas: en línea, tradicional y avanzado. Cada uno de estos métodos tiene sus propias ventajas y desventajas, y la elección entre ellos depende del contexto y las necesidades de tu proyecto.

Eventos en línea// Este método implica escribir el código JavaScript directamente en el atributo del evento del elemento HTML. Por ejemplo, si tienes un botón y quieres que muestre una alerta cuando se haga clic en él, podrías hacerlo de la siguiente manera 1, 5:
<button onclick="alert('¡Hola, mundo!');">Haz clic en mí</button>
//Este método es simple y directo, pero tiene algunas desventajas. Primero, mezcla el código HTML con el código JavaScript, lo que puede dificultar la lectura y el mantenimiento del código. Además, si tienes varios elementos que necesitan manejar el mismo evento, tendrás que repetir el código en línea en cada uno de ellos, lo cual puede ser tedioso y propenso a errores.

Eventos tradicionales// Este método implica asignar una función a una propiedad del objeto del elemento HTML. Por ejemplo, podrías hacerlo de la siguiente manera 1:
<button id="myButton">Haz clic en mí</button>


document.getElementById('myButton').onclick = function() {
 alert('¡Hola, mundo!');
};
//Este método mejora la separación entre el código HTML y el código JavaScript, lo que facilita la lectura y el mantenimiento del código. Sin embargo, si asignas una nueva función a la propiedad del evento, la anterior se sobrescribirá, lo que puede ser un problema si necesitas manejar varios eventos en el mismo elemento.

Eventos avanzados// Este método implica utilizar el método addEventListener para asignar una función al evento de un elemento HTML. Por ejemplo, podrías hacerlo de la siguiente manera 1:
<button id="myButton">Haz clic en mí</button>

document.getElementById('myButton').addEventListener('click', 
    function() {
        alert('¡Hola, mundo!');
});
//Este método permite asignar múltiples funciones al mismo evento en un elemento, lo que proporciona una mayor flexibilidad. Sin embargo, este método no es compatible con versiones antiguas de Internet Explorer (anteriores a la versión 9).

//En resumen, aunque los eventos en línea pueden ser útiles para casos simples, es generalmente mejor utilizar eventos tradicionales o avanzados para proyectos más grandes y complejos. Estos métodos ofrecen una mejor separación entre el código HTML y el código JavaScript, y proporcionan mayor flexibilidad y control sobre el manejo de eventos

//Los eventos más comunes en JavaScript son los que se disparan en respuesta a las interacciones del usuario con la página web. Aquí te presento algunos de los eventos más comunes:

click //Este evento se dispara cuando el usuario hace clic en un elemento. Es comúnmente utilizado con botones o enlaces para iniciar acciones cuando el usuario hace clic en ellos.
button.addEventListener('click', function() {
 console.log('El botón fue clickeado');
});
mouseover //Este evento se dispara cuando el usuario coloca el cursor sobre un elemento. Es útil para mostrar información adicional o cambiar el estilo de un elemento cuando el usuario coloca el cursor sobre él.
element.addEventListener('mouseover', function() {
 console.log('El cursor está sobre el elemento');
});
element.addEventListener('mouseleave ', function() {
 console.log('El cursor sale del elemento');
});
mouseout //Este evento se dispara cuando el usuario retira el cursor de un elemento. Es útil para ocultar información adicional o cambiar el estilo de un elemento cuando el usuario retira el cursor de él.
element.addEventListener('mouseout', function() {
 console.log('El cursor salió del elemento');
});
keydown //Este evento se dispara cuando el usuario presiona una tecla. Es útil para crear atajos de teclado o para capturar la entrada del usuario.
window.addEventListener('keydown', function(event) {
 console.log('La tecla ' + event.key + ' fue presionada');
});
load // Este evento se dispara cuando la página web ha terminado de cargar. Es útil para iniciar acciones que requieren que todos los recursos de la página estén disponibles.
window.addEventListener('load', function() {
 console.log('La página ha terminado de cargar');
});
submit // Este evento se dispara cuando el usuario envía un formulario. Es útil para validar la entrada del usuario o para enviar los datos del formulario a un servidor.
form.addEventListener('submit', function(event) {
 event.preventDefault();
 console.log('El formulario fue enviado');
});
