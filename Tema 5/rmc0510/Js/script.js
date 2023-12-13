import Cliente from "./Cliente";

document.getElementById("enviar").addEventListener("submit", validar,false);

//Declaramos todas las variables y arrays necesarios para identificar y 
//comprobar clave

//Variables de acceso cliente

const IDENTIFICAR = document.getElementById("identificar");
const CONFIRCLAVE = document.getElementById("confirClave");

const TIPODOC = document.getElementById("tipoDoc");
const NUMERO = document.getElementById("numero");
const DIA = document.getElementById("dia");
const MES = document.getElementById("mes");
const ANNO = document.getElementById("anno");
const RECORDAR = document.getElementById("recordar")

//Declaramos el array con los clientes
let clientes = [
    new Cliente("12345678Z", "2000/06/15"),
    new Cliente("87654321X", "1989/12/08"),
    new Cliente("96385274W", "1995/02/14")
];

//Declaramos las variables y arrays para el apartado de 
//verificacion de clave

const INSERTCLAVE = document.querySelectorAll("#password input");
const KEYBOARD = document.querySelectorAll("#teclado button");
const NUMCLAVE = document.getElementById("clave");

//Declaramos los arrays en los que irán el teclado de 0-9,
//las pos a rellenar en de la clave 

let teclado = [];
let posiciones = [];


//Con todas las variables y arrays delarados comenzamos las validaciones

function validar(e){
    borrarErrores();
    e.preventDefault();

    if(validarDocumento() && validarFecha() && validarCliente(NUMERO.value, DIA.value + "/" + MES.value + "/" + ANNO.value)){

        if(RECORDAR.cheked){
            localStorage.setItem("dni", NUMERO.value);
            localStorage.setItem("fechaNac", DIA.value + "/" + MES.value + "/" + ANO.value);
        }

        IDENTIFICAR.classList = "ocultar";
        CONFIRCLAVE.classList = "show";

        //Visualizamos desde consola la clave sereta generada aleatoriamente
        console.log(showClave(NUMERO.value));

        visualizarCONFIRCLAVE();
    }
    else{
        return false;
    }
}

function error(element, mensaje){

     let elementID = element.id;

     element.classList = "error";
     element.focus();

     switch(elementID){
        case "tipoDoc":
        case "numero":
            document.getElementById("avisoDoc").innerHTML = mensaje;
            document.getElementById("avisoDoc").classList = "mensajeError";
            break;

        case "dia":
        case "mes":
        case "anno":
            document.getElementById("avisoFecha").innerHTML = mensaje;
            document.getElementById("avisoFecha").classList = "mensajeError";
            break;


        //Error al introducir la clave secreta
        case "clave":
            document.getElementById("avisoClave").innerHTML = mensaje;
            document.getElementById("avisoClave").classList = "mensajeError";
            break;
        
     }
}
 
function borrarErrores(){

    let formulario = document.forms[0];
    let avisoDoc = document.getElementById("avisoDoc");
    let avisoFecha = document.getElementById("avisoFecha");

    let aviso = [avisoDoc, avisoFecha];

    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
      }
    
      for (let j = 0; j < aviso.length; j++) {
        aviso[j].className = "normal";
        aviso[j].innerHTML = "";
      }
}

//Validamos los documentos

function validarDocumento(){

    let seleccionado = false;
    let valido = false;
    let ok = false;

    for (let i = 0; i < TIPODOC.length; i++) {
        if (TIPODOC[i].checked) {
          if (TIPODOC[i].value === "dni") {
            if (validarDNI(NUMERO)) {
              valido = true;
            }
          } else if (TIPODOC[i].value === "pasaporte") {
            if (validarPasaporte(NUMERO)) {
              valido = true;
            }
          }
          seleccionado = true;
        }
      }

      //Si se envia el formualrio sin seleccionar tipo de documento
      if (!seleccionado) {
        error(NUMERO, "Selecciona el tipo de documento");
      }
      if (seleccionado && valido) {
        ok = true;
      }
    
      return ok;
}
function validarDNI(element){

    const REGEX = /^[0-9]{8}[a-zA-Z]{1}$/;

    if(REGEX.test(element.value)){

        return true;
    }
    else{
        error(element, "Formato incorrecto");
        return false;
    }
 
}

function validarPasaporte(element){
    const REGEX = /^[A-Z]{3}[0-9]{6}$/;
    if(REGEX.test(element.value)){
    return true;
    }else{
        error(element, "Formato incorrecto");
        return false;
    }
}

function validarFecha(){

    let fecha = fechaNac.split("/");
    DIA.value = fecha[0];
    MES.value = fecha[1];
    ANO.value = fecha[2];
    
    return !isNaN(new Date(fecha));
}



//En el caso en el que el usuario haya activado el "recordar"

window.addEventListener("DOMContentLoaded", (e) =>{

    let dni = localStorage.getItem("dni");
    let fechaNac = localStorage.getItem("fechaNac");

    if(dni && fechaNac){
        NUMERO.value = dni;

        let opcionDNI = document.querySelector('input[name="tipoDoc"][value="dni"]'); 
        opcionDNI.checked = true;

        let fecha = fechaNac.split("/");
        DIA.value = fecha[0];
        MES.value = fecha[1];
        ANO.value = fecha[2];
    }

});



//Verificamos que el cliente que existe en nuestro array

function validarCliente(documento, fechaNac){
    
    let cliente = clientes.find((e) =>{
        e.documentacion === documento && e.fecha === fechaNac
    });

    if (cliente) {
        alert(`Bienvenido de nuevo usuario ${NUMERO.value}`);
        alert("Por favor introduce tu clave en la siguiente página");
        return true;
      } else {
        alert("Has escrito mal tu documentación o fecha de nacimiento");
        return false;
      }
}

//Ahora que ya sabemos que el cliente es correcto tenemos que verificar
//la clave, para ello hay que buscar la clave de ese cliente.
//Buscamos la clave en funcion del documento del cliente

function findClave(documento){

    if(cliente.documentacion === documento){
        return cliente.clave;
    }
    else{
        return false;
    }
}


//Comenzamos el tratamiento de la verificacion de la clave

function visualizarCONFIRCLAVE(){

    //Lo primero que debemos de hacer es desordenar el teclado de 0-9

    shuffleTeclado();//La función shuffle() se utiliza para mezclar los elementos de un array de manera aleatoria.

    seleccionarOpciones();//Obtiene la eleccion del cliente
    addOpionesClave(); //Introduce la opcion del cliente en el la clave
    verificarClave()//Compara la clave generada por el sistema con la introducida por el cliente

}

function shuffleTeclado(){

    while(teclado.length < 10){
        let num = Math.floor(Math.random() * 10);

        if(!teclado.includes(num)){
            teclado.push(num);
        }
    }
    

    /*Hemos evaluado que mientras que el array del teclado no tenga 10 elementos
    se genere un numero aleatorio de 0-9, si el array aun no contiene uno igual a este
    , se añade al array.
    */

    /*Ahora hay que visualizar el teclado, para ello vamos a recorrer el array
    para mandar a la vista
    En la vista posimos lo id del 0 al 9 */

    for(let i = 0; i< 10; i++){
        document.getElementById("i").innerHTML = teclado[i];
        document.getElementById("i").value = teclado[i];
        /*Con esto pasamos a la vista el numero generado y el value para poder
        introduirlo despues en el div de la clave*/
    }
}

function seleccionarOpciones(){
     /*Necesitamos que el usuario introduzca 3 posciones de su clave
     Para ello al comienzo inicializamos el array "pos" para manejar esta necesidad*/

     while(posiciones.length < 3){}
     //Obtenemos la clave
     let claveCliente = cliente.clave;
     let num = [...claveCliente];//Spread operator itera el string de la clave y la convierte en un array, generando en cada campo una pos del string

     let completarClave = Math.ceil(Math.random() * 6);
     //Generamos las 6 posiciones de la clave

     if (!posiciones.includes(completarClave)) {
        posiciones.push(completarClave);
  
        let input = document.getElementById("opcion" + completarClave);
        input.disabled = true;
        input.value = num[(completarClave - 1)];
      }



    }
      //Pasamos las opciones de del usuario a la vista de la clave

function addOpionesClave(){

    for (let i = 0; i < KEYBOARD.length; i++) {
        KEYBOARD[i].addEventListener("click", function () {
          for (let j = 0; j < INSERTCLAVE.length; j++) {
            if (INSERTCLAVE[j].value === "") {
                INSERTCLAVE[j].value = this.textContent;
                INSERTCLAVE[j].disabled = true;
              validarClave();
              break;
            }
          }
        });
      }
}

//Por ultimo comprobamos que la clave introducida coincice con la clave del usuario

function validarClave(){

    let claveIntroducida;

    for(let i = 0; i < INSERTCLAVE.length; i++){

        if(!INSERTCLAVE[i]){
            return true;//Evaluamos si hay alguna posicion vacia
        }
        claveIntroducida += INSERTCLAVE[i].value;
    }
    //Con esto nos traemos a la funcion la clave introducida por el usuario

    if(claveIntroducida === cliente.clave){
        alert('Acceso permitido');
    }
    else{
    
        error(NUMCLAVE,"Clave incorrecta");
    }
}
