export default class Edificio {
  constructor(calle, numero, cp) {
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;
    this.plantas = [];
    console.log(
      `Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.cp}.`
    );
  }

  agregarPlantasYPuertas(numPlantas, numPuertas) {
    for (let i = 0; i < numPlantas; i++) {
      let planta = { puertas: [] };
        for(let j = 0; j < numPuertas; j++) {
            planta.puertas.push(null);
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

  modificarCp(codigo) {
    this.cp = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCp() {
    return this.cp;
  }

   obtenerNombreCalle(){
    return this.calle;
  }

  obtenerNumeroPlantas(){
    return this.plantas.length;
  }

  obtenerPuertasPorPlanta(numPlanta) {
    return this.plantas[numPlanta - 1].length;
    }

  agregarPropietario(nombre, planta, puerta) {
    if (this.plantas[planta]) {
      this.plantas[planta].puertas[puerta] = nombre;
      console.log(`${nombre} es ahora el propietario del piso ${puerta + 1} en la planta ${planta + 1}`);
    } 
    else {
      console.log(`No existe la planta ${planta + 1}`);
    }
   }




  imprimePlantas() {
    this._plantas.forEach((planta, i) => {
      planta.forEach((puerta, j) => {
        console.log(
          `Propietario del piso ${j + 1} de la planta ${i + 1}: ${
            puerta ? puerta : ""
          }`
        );
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
export { Edificio };