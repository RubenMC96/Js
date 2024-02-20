export class Edificio {
    constructor(calle, numero, codPostal){
        this.calle = calle;
        this.numero = numero;
        this.codPostal = codPostal;
        this.plantas = [];

        console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codPostal}`);
    }

    agregarPlantasYPuertas(numplantas, puertas) {
        for(let i = 0; i < numplantas; i++) {
            let planta = [];
            for(let j = 0; j < puertas; j++) {
                planta.push(null);
            }
            this.plantas.push(planta);
        }
     }
 
    modificarNumero(numero) {
        this.numero = numero;
    }
 
    modificarCalle(calle) {
        this.calle = calle;
    }
 
    modificarCodigoPostal(codigo) {
        this.codPostal = codigo;
    }
 
    imprimeCalle() {
        return this.calle;
    }
 
    imprimeNumero() {
        return this.numero;
    }
 
    imprimeCodigoPostal() {
        return this.codPostal;
    }
 
    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta].puertas[puerta] = nombre;
        console.log(`${nombre} es ahora el propietario de la puerta ${puerta + 1} de la planta ${planta + 1}`);
    }

    agregarPropietario(nombre, planta, puerta) {
        if (planta >= 0 && planta < this.plantas.length && puerta >= 0 && puerta < this.plantas[planta].length) {
            this.plantas[planta][puerta] = nombre;
        } else {
            console.error('Número de planta o puerta inválido');
        }
     }
     
 
    imprimePlantas() {
        this.plantas.forEach((planta, indexPlanta) => {
            planta.puertas.forEach((propietario, indexPuerta) => {
                console.log(`Planta ${indexPlanta + 1}, Puerta ${indexPuerta + 1}: ${propietario}`);
            });
        });
    }

    imprimirPropietarios() {
        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].puertas.length; j++) {
                console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${this.plantas[i].puertas[j]}`);
            }
        }
    }


 }