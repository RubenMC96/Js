export class Disco {
    constructor(nombre, autor, anho, tipo){
        this.nombre = nombre;
        this.autor = autor;
        this.anho = anho;
        this.tipo = tipo; //rock, pop, punk, indie
        this.localizacion = 0; //numero de estanteria
        this.prestado = false;
        this.caratula = "imagen.png"; //nombre de archivo
    }

    mover (newNumber){
        this.localizacion = newNumber;
    }

    prestar (){
        if (this.prestado == false){
            this.prestado = true;
        } else {
            this.prestado = false;
        }
    }

    ver(){
        return `Nombre: ${this.nombre}, 
                Autor: ${this.autor}, 
                Año: ${this.anho}, 
                Tipo: ${this.tipo},
                Localización: ${this.localizacion},
                Prestado: ${this.prestado},
                Caratula: ${this.caratula}`;
    }
}