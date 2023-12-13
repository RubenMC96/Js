
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


//Eventos

'click'//clien en un elemento
'mousedown' //presiona el botón del raton sobre él
'mouseup'//soltar el botón del raton
'mousemove'//movimiento del raton
'mosuerover'//raton encima de elemento
'mouseout'//raton sale de elemento
'keydown'//presionar una tecla
'keyup'//soltar una tecla
'load'//Se dispara cuando la pagina termina de cargar
'resize'//Se dispara cuando la ventana del navegador cambia de tamaño
'scroll'//se dispara al hacer scroll por la página
'submit'//Se dispara cuando se envia un formulario
'change'//Se dispara cuando el valor de un elemento de formualario cambia
'focus'//poner foco a un input
'blur'//quitar foco de un input
'input'//se dispara cuando cambien el valor de un input, select o texarea

//Metodos

//borrar evento en elemento
document.getElementById("miEnlace").removeEventListener("click", alertar, false);

//Para evitar la accion prdeterminada en el evento
//Para evitar la propagacion usar stiopPropagacion()

document.getElementById("miEnlace").addEventListener("click", function(event){ event.preventDefault();});


//Regex
//Los espacios se expresan: \s y si lo usamos en una frase: /hola\s+mundo/
const REGEX_LETRAS = /[a-zA-Z]+/; // Letras mayúsculas y minúsculas -> El "+" significa uno o más
const REGEX_NUMEROS = /[0-9]+/; // Números 
const REGEX_SIMBOLOS = /\W+/; // Cualquier carácter que no sea una letra, un número o un guion bajo -> "W"
const REGEX_CUALQUIER_CARACTER = /^.{1,20}$/; // Cualquier caracter "." -> también puede ser "w"

/*
\w	Coincide con cualquier caracter de palabra -> igual a [a-zA-Z0-9_]
\W	Coincide con cualquier otra cosa que no sea una letra, dígito o subrayado
\d	Coincide con cualquier dígito decimal. Equivalente a [0-9]
\D	Coincide con cualquier cosa que no sea un dígito decimal
\s  Coincide con un espacio en blanco
*/

// -------------------------- REGEX HECHAS -----------------------------------------
const REGEX_CUALQUIER_SIMBOLO = /^[\s\S]{1,20}$/; // Cualquier símbolo o caracter, mínimo 1 y máximo 20 (Ej: C19-*2/5&) -> para contraseñas 
const REGEX_NOMBRE = /[a-zA-Z]{2,20}/; // Cualquier letra (Ej: cristina) 
const REGEX_NOMBRE_ESTRICTO = /^(?=.{2,35}$)[A-Z][a-z]+(?: [A-Z][a-z]+)?$/; // Dos palabras que empiezan por mayus y siguen con minus (Ej: Cristina Correa)
const REGEX_NOMBRE_COMPLETO = /[a-zA-Z\s]{1,50}$/; // Cualquier letra minúscula o mayúscula + espacios (Ej: cristina correa)
const REGEX_EDAD = /^([0-9]|[1-9][0-9]|10[0-5])$/; // Cualquier edad del 0 al 105
const REGEX_NUMERO_O_VACÍO = /^(|[\d]+)$/; // Un número o que no esté cubierto (Ej: 5)
const REGEX_FECHA_BARRAS = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // Una fecha de tipo dd/mm/aaaa
const REGEX_FECHA_GUIONES = /^\d{1,2}-\d{1,2}-\d{4}$/; // Una fecha de tipo dd-mm-aaaa
const REGEX_HORA = /^([01][0-9]|2[0-3]):[0-5][0-9]$/; // Una fehca de tipo hh:mm -> hora y minutos
const REGEX_HORAS = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/; // Una fecha de tipo hh:mm:ss -> hora, minutos y segundos
const REGEX_TELEFONO = /^\d{9}$/; // Cualquier número de teléfono (Ej: 666555444)
const REGEX_TELEFONO_PREFIJO = /^\+34\s\d{3}\s\d{3}\s\d{3}$/; // Cualquier número de teléfono con un prefijo español (Ej: +34 666 555 444)
const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Un mail con cualquier dominio (Ej: cristina@hotmail.com)
const REGEX_EMAIL_DOMINIO = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Un mail con un dominio @gmail.com (Ej: cristina@gmail.com)  
const REGEX_DNI = /^\d{8}-[a-zA-Z]$/; // Ocho números, un guión y una letra mayus o minus (Ej: 12345678-A)
const REGEX_PASAPORTE = /^[A-Z]{3}[0-9]{6}$/; // Tres letras y seis números (Ej: ABC123456) 
const REGEX_IBAN = /^([A-Z]{2}\d{2})(\d{4}){5}$/; // Dos mayúsculas y 22 números (Ej: ES1234567890123456789012)
const REGEX_OPCIONES = /^(Casada|Soltera)$/; // Solo dos opciones

// ------------------------- OTROS REGEX USADOS ----------------------------------
const REGEX1 = /^[A-Z]{2}\W\d{4}$/; // dos letras en mayúscula, un símbolo (algo que no sea ni letras ni números) y cuatro dígitos (ej. WW$1234)
const REGEX2 = /^[A-Z]{2,3}_([A-Z][a-z]*):(\d{4})$/; // dos o tres letras mayúsculas, un guión bajo, una palabra con la primera letra Mayúscula y el resto en minúsculas, dos puntos, y 4 dígitos (ej. NM_Madrid:1234).

//Comprobar regex

cadena.match(expresiónRegula);


//Cookies

//Crear una cookie

document.cookie = "usuario = Claudia;";
document.cookie = "sexo = mujer;";

//Leer una cookie
var miCookie = document.cookie;
alert(miCookie);



//Modificar una cookie
document.cookie = "sexo = hombre;";
alert(document.cookie);

//Borrar una cookie
//document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
//document.cookie = "sexo=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);


//Ejemplo de ver, crear y borrar cookies:

/*
    <button type="button" id="verTodas">Ver todas las cookies</button>
    <button type="button" id="crearCookie1">Crear cookie 1</button>
    <button type="button" id="crearCookie2">Crear cookie 2</button>
    <button type="button" id="borrarCookie1">Borrar cookie 1</button>
    <button type="button" id="borrarCookie2">Borrar cookie 2</button>
*/  
document.getElementById("verTodas").addEventListener("click",verTodas);
document.getElementById("crearCookie1").addEventListener("click",crearCookie);
document.getElementById("crearCookie2").addEventListener("click",crearCookie);
document.getElementById("borrarCookie1").addEventListener("click",borrarCookie);
document.getElementById("borrarCookie2").addEventListener("click",borrarCookie);
        function verTodas(){
            alert(document.cookie);
        }
       
        function crearCookie(e){
            if(!e) e = window.event;
            if (e.target.id=="crearCookie1")
                document.cookie ="nombre = Ada";
            else if (e.target.id=="crearCookie2")
                document.cookie ="apellido = Lovelace";
        }
       
        function borrarCookie(e){
            if(!e) e = window.event;
            if (e.target.id=="borrarCookie1")
                document.cookie ="nombre =;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            else if (e.target.id=="borrarCookie2")
                document.cookie ="apellido =;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }

//Ejemplo avanzado de acceso, creación y modificación de cookies
 /*  
            <button type="button" id="verTodas">Ver todas las cookies</button>
            <button type="button" id="crearCookie">Crear cookie </button>
            <button type="button" id="modificarCookie">Modificar cookie </button>
            <button type="button" id="leerCookie">Leer cookie </button>
            <button type="button" id="borrarCookie">Borrar cookie </button>
*/
                document.getElementById("verTodas").addEventListener("click",verCookies);
                document.getElementById("crearCookie").addEventListener("click",crearModifCookie);
                document.getElementById("modificarCookie").addEventListener("click",crearModifCookie);
                document.getElementById("leerCookie").addEventListener("click",leerCookie);
                document.getElementById("borrarCookie").addEventListener("click",borrarCookie);
               
                function verCookies(){
                    alert("Cookies actuales:\n"+document.cookie);
                }
               
                function crearModifCookie(){
                    var nombre = prompt("Introduzca el nombre de la cookie");
                    var valor = prompt("Introduzca su valor");
                    var expiracion = parseInt(prompt("Introduzca el número de días para que expire"));
                    setCookie(nombre, valor, expiracion);
                    verCookies();
                }
               
                function leerCookie(){
                    var nombre = prompt("Introduzca el nombre de la cookie a consultar");
                    var resultado = getCookie(nombre);
                    alert(resultado);
                }
               
                function borrarCookie(){
                    var nombre = prompt("Introduzca el nombre de la cookie a borrar");
                    deleteCookie(nombre);
                    verCookies();
                }
               
                function deleteCookie(nombre){
                    setCookie(nombre,"",0);
                }
               
                function setCookie(nombre, valor, expiracion){
                    var d = new Date();
                    d.setTime(d.getTime()+expiracion*24*60*60*1000);
                    var expiracion = "expires="+d.toUTCString();
                    document.cookie = nombre+"="+valor+";"+expiracion+";path=/";
                }
               
                function getCookie(nombre){
                    var nom = nombre+"=";
                    var array = document.cookie.split(";");
                    for (var i=0; i<array.length; i++){
                        var c = array[i];
                        while (c.charAt(0)==" "){
                            c = c.substring(1);
                        }
                        if (c.indexOf(nombre)==0){
                            return c.substring(nom.length, c.length);
                        }
                    }
                    return "";
                }
        
//LocalStorage

//Comprobar si el navegador soporta webstorage
if (typeof(Storage) !== "undefined"){
    alert ("El navegador soporta webStorage");
}else{
    alert("El navegador NO soporta WebStorage");
}

//window.localStorage: almacena datos SIN fecha de expiración
//Crear un elemento (¡¡siempre son cadenas!!)
localStorage.setItem("nombre", "Ada"); //MEJOR
localStorage.apellido = "Lovelace"; //PEOR

//Consultar un elemento
alert(localStorage.getItem("nombre")); //MEJOR
alert(localStorage.apellido); //PEOR

//Borrar un elemento
localStorage.removeItem("apellido");
alert(localStorage.getItem("nombre")+" "+localStorage.getItem("apellido"));

//Borrar todos los elementos
localStorage.clear();
alert(localStorage.getItem("nombre")+" "+localStorage.getItem("apellido"));

//window.sessionStorage: almacena los datos durante una sesión
//si se cierra la ventana o el navegador, desaparecen


//Ejemplo LocalStorage
/*
    <button type="button" id="incrementar">Incrementar</button>
    <button type="button" id="decrementar">Decrementar</button>    
    <button type="button" id="logout">Log out</button>    
    <p id="saludo"></p>
    <p id="contador"></p>
*/
    //Comprobación de que el navegador soporta Web Storage
    if (typeof(Storage) !== "undefined") {
        alert("El navegador soporta WebStorage");
        if (localStorage.usuario!=null){
            document.getElementById("saludo").innerHTML="¡Bienvenido/a de nuevo, "+localStorage.usuario+"!";
        }else{
            localStorage.usuario=prompt("¿Cómo te llamas?");
            document.getElementById("saludo").innerHTML="¡Tu primera visita, "+  localStorage.usuario+"!";
        }
       
        if(!sessionStorage.getItem("contador"))
            sessionStorage.setItem("contador","0");


        document.getElementById("contador").innerHTML="Contador: "+sessionStorage.getItem("contador");
        document.getElementById("incrementar").addEventListener("click",incrementar);
        document.getElementById("decrementar").addEventListener("click",decrementar);
        document.getElementById("logout").addEventListener("click",logout);
    } else {
        alert ("El navegador no soporta Web Storage");
    }
       
    function incrementar(){
        sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))+1);
        document.getElementById("contador").innerHTML = "Contador: "+ sessionStorage.getItem("contador");
    }
    function decrementar(){
        sessionStorage.setItem("contador",Number(sessionStorage.getItem("contador"))-1);
        document.getElementById("contador").innerHTML = "Contador: "+ sessionStorage.getItem("contador");
    }
    function logout(){
        alert("Se ha cerrado la sesión de "+localStorage.getItem("usuario"));
        localStorage.removeItem("usuario");
        //sessionStorage.clear();
        document.getElementById("saludo").innerHTML = "";
    }
