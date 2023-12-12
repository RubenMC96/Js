//Arrays

//ARRAY: almacena en una misma variable múltiples valores: valores primitivos, objetos, etc. Se referencian con un índice numérico.
    //¡Ojo! Un objeto se referencia con un nombre

    //OPERACIONES BÁSICAS CON UN ARRAY:

    //Crear un array: var nombreArray = [<valores separados por comas>];
    var animales = ["Perro", "Gato", "Hamster"];
    //var nombreArray = new Array(<valores separados por comas>);
     var animales2 = new Array("Perro", "Gato", "Hamster");

     //Acceso a elementos de un array: nombreArray[<índice>]; Desde el 0
     var miAnimal = animales[0];

     //Mostrar todo el array: con una instrucción de mostrar
     alert(animales);
     document.write(animales);

     //PROPIEDADES:
     //length: devuelve la longitud del array (número de elementos)
     document.write("<br/>La longitud del array es: "+animales.length);

     //Mostrar los valores del array uno a uno
    document.write("<br/><br/>Todos los elementos:")
     for (var i=0; i<animales.length; i++){
        document.write("<br/>"+animales[i]);
     }

     //MÉTODOS:
     //Array.isArray(<nombreArray>): devuelve true si es un objeto de tipo Array. Si pusamos typeof <nombreArray> devolverá object.
     document.write("<br/>¿Es un array? "+Array.isArray(animales));
     //<nombreArray> instanceof Array: devuelve true si es un Array.
     document.write ("<br/>¿Seguro? "+(animales instanceof Array));

     //MÉTODOS PARA MOSTRAR EL ARRAY:
     //toString(): convierte el array a cadena
     document.write("<br/>El array en tipo String es: "+animales.toString());

     //join("<separador>"): convierte el array a cadena separado por el separador:
     document.write("<br/>El array con join es: "+animales.join(" * "));


     //MÉTODOS PARA AÑADIR, EXTRAER O BORRAR ELEMENTOS:
     //pop() y shift(): extrae el último y primer elemento respectivamente y lo guarda en una variable (si queremos)
     var ultimo = animales.pop();
     document.write("<br/>Después de sacar "+ultimo+" quedan "+animales.toString());

     //delete nombreArray[<indice>]: elimina el elemento y lo transforma a undefined

     //push(<elemento>) y unshift(<elemento>): añade un elemento al final y al principio del array respectivamente
     animales.push("Jilguero");
     document.write("<br/>Después de meter Jilguero quedan "+animales.toString());
     //Nota: podemos añadirlo con animales[<índice>] = <elemento>; pero hay que tener cuidado de no sobreescribir o dejar huecos.

     //splice(<posicion insertar/borrar>, <elementos a borrar>, [<elementos a añadir separados por comas>]):
     animales.splice(2,1,"Vaca","Toro");
     document.write("<br/>Después de meter 2 y borrar 1 quedan "+animales.toString());
     //animales.splice(0,1): eliminaría el primer elemento.

     //slice(<ini>[,<fin>]): devuelve un subarray desde la posición indicada hasta (sin incluir) la final (no es obligatorio)
     var subarray = animales.slice(1,3);
     document.write("<br/>El subarray entre 1-3 es: "+subarray.toString());

     //concat(<lista de arrays separados por comas>): une el array inicial con un segundo array
     var masAnimales = ["Burro", "Mula"];
     var todos = animales.concat(masAnimales);
     document.write("<br/>El array completo es: "+todos.toString());

     //copyWithin(): copia elementos del array y los sustituye por otros elementos del array.
     //fill("<elemento>"): sustituye los elementos del array por el indicado.

     //MÉTODOS PARA BUSCAR:
     //indexOf(<elemento>[,<pos>]) y lastIndexOf(<elemento>[,<pos>]): devuelve la primera o última posición de un elemento respectivamente; podemos pasarle a partir de qué elemento buscará.
     document.write("<br/>La primera posición de Toro es: "+animales.indexOf("Toro"));
     document.write("<br/>La última posición de Toro es: "+animales.lastIndexOf("Toro"));

     //MÉTODOS PARA ORDENAR E INVERTIR EL ORDEN
     //reverse(): invierte el orden de un array
     animales.reverse();
     document.write("<br/>El array después de invertir es: "+animales.toString());
     //sort(): ordena el array
     animales.sort();
     document.write("<br/>El array después de ordenar es: "+animales.toString());
     //¡Ojo! Los números almacenados como cadenas se comparan caracter a caracter, no como cifras.


//--------------------------------------------------------

     //Spread operator

     /* La sintaxis extendida o spread sintax permite:
- A elementos iterables (array, cadena...) ser expandidos donde se esperan 
cero o más argumentos (para llamadas de función) o elementos (para Array literales)
- A un objeto ser expandido en lugares donde se esperan cero o más
pares de valores clave (para literales de tipo objeto)*/

//SINTAXIS
//Para arrays literales o cadenas
//[...objetoIterable, 'a', 'caracola', 7];

//Para llamadas a funciones
//miFuncion(...objetoIterable);

//Para literales de tipo Object
//let clon = { ...obj };

//ARRAY
console.log(Math.max(3,1,7)); //Devuelve 7
let array = [3,1,7]; 
console.log(Math.max(array)); //Devuelve NaN
console.log(Math.max(...array)); //Devuelve 7
let array2 = [2,6,8];
console.log(Math.max(...array, 5, ...array2, 4)); 
//es igual a:
console.log(Math.max(array[0],array[1],array[2], 5,array2[0],array2[1],array2[2], 4)); 
//Devuelve 8

// Concatenar dos arrays en uno
let arrayResultante = [...array, ...array2];

//Copiar un array en otro array, clonariamos el array2, podriamos también utilizar el metodo .slice()
let arrayCopia = [...array2];

//CADENAS
let saludo = "Hola, caracola";
console.log([...saludo]);

//FUNCIONES
function suma (a, b, c){
    return a + b + c;
}
const valores = [1, 3, 5];
console.log(suma(...valores));

//OBJETOS
let persona1 = {nombre: "Ada", nacimiento: 1815};
let persona2 = {nombre2: "Charles", nacimiento2: 1791};
//Tenemos que cambiar los nombres de los elementos si no queremos que se sobreescriban

let clonAda = {...persona1}; //Modo correcto de crear una copia de un objeto
console.log(clonAda); 

let adaCharles = {...persona1, ...persona2};
console.log(adaCharles);

//-----------------------------------------


/* DESTRUCTURING 
Destructuring es un modo de extraer valores de datos almacenados en objetos y arrays, 
descomponiéndolos y asignándolos a un grupo de variables.
Mediante patrones se pueden especificar cómo extraer los valores. */

//Destructuring de arrays (asignación básica)
const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const [c, lu, ou] = galicia;
console.log(c);
console.log(ou);

//Destructuring de arrays (asignación separada de la declaración)
let cc, ba;

[cc, ba="Merida"] = ["Cáceres", "Badajoz"];
console.log(cc);
console.log(ba);

//Destructuring de objetos (asignación básica)
const varios = {p: 11, q: true, r: "Hola" };
const {p,r} = varios;
console.log(p);
//console.log(q);
console.log(r);

//Destructuring de objetos (asignando a nuevos nombres de variables)
const objeto = {nombre: "Ada", apellido: "Lovecode"};
//Tomamos del objeto la propiedad llamada nombre y la asignamos a la variable n
const {nombre: n, apellido: a} = objeto;
console.log(n + " "+ a);
//Tomamos del objeto el valor del nombre y del apellido
const {nombre, apellido} = objeto;
console.log(nombre + " " + apellido);

//Destructuring de objetos (asignación sin declaración)
let x, y;
({x, y} = {x: 1, y: 2}); //Es obligatorio el paréntesis en este tipo de asignación
console.log(x);
console.log(y);

//---------------------------------------------------------

//Clases

/*
Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.
- Ofrecen una sintaxis más simple para crear objetos.
- No utiliza la palabra function, sino la palabra class.
- Las propiedades se asignan en un método constructor(), no en la clase en sí.
*/

//Constuctor de una clase
class Telefono {
    constructor (marca, modelo){
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  let miTelefono = new Telefono ("Google", "Pixel");
  console.log(miTelefono.marca + " " + miTelefono.modelo);

//--------------------------------------------------------

//Herencia


/*
Para crear herencia de clases hay que utilizar la palabra extends.
Una clase creada con herencia hereda todos los métodos de la otra clase.
*/

    class Telefono {
        constructor (marca){
            this.marca = marca;
        }
        anuncio () {
            return "Ha llegado el nuevo teléfono de " + this.marca;
        }
    }
    class Modelo extends Telefono {
        constructor (marca, modelo){
            super(marca);
            this.modelo = modelo;
        }
        anuncioCompleto(){
            return super.anuncio() + ": el modelo " + this.modelo;
        }
    }                 
    let miTelefono = new Modelo ("Google", "Pixel");  
    mensaje.innerHTML = miTelefono.anuncioCompleto();
    
    //----------------------------------------------------

    //Getters y Setters

    /*
  Los métodos get y set se utilizan para asignar y extraer atributos de un objeto.
  Es muy importante tener en cuenta que el nombre de los getters/setters no puede ser
  el mismo que la propiedad porque se produciría un bucle: al acceder a la propiedad
  invocaríamos al método que a su vez accede a la propiedad que invoca al método...
  Por ello, muchos desarrolladores utilizan el guión bajo para nombrar la propiedad.
*/
    class Telefono {
      constructor(marca){
        this._marca = marca;
      }
      get marca() {
        return this._marca;
      }
      set marca (mar) {
        this._marca = mar;
      }
    }
    let miTelefono = new Telefono ("Google");
    miTelefono.marca = "iPhone";
    mensaje.innerHTML = "Mi telefono es un " + miTelefono.marca;             

    /*
    En Js para llamar al getter basta con usar el ".Atributo", 
    sin el get delante.
    */

    //----------------------------------------------------

    //Métodos estaticos
    
    /*
Utilizamos static para definir un método estático en una clase.
Al igual que en otros lenguajes de programación, un método estático se llama diréctamente
sin instanciar la clase (de hecho, no puede hacerse mediante una instancia de clase).
Se suelen utilizar para crear funciones útiles en una aplicación.
No es necesario crear un objeto para llamar a un método estático.
*/
window.addEventListener("load",function() {
    class Rectangulo {
      constructor(x, y){
        this.x = x;
        this.y = y;
      }
      static area ( a, b) {
        return a * b;
      }
      static perimetro (a, b){
        return a + a + b + b;
      }
    }  
    let rectangulo1 = new Rectangulo (2,3);
    //console.log(rectangulo1.area(2,3));
    //console.log(rectangulo1.perimetro(2,3));
    mensaje.innerHTML = Rectangulo.perimetro(2,3);
  
  },true);

  

