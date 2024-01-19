export default class Edificio {
  constructor(calle, numero, cp) {
    this._calle = calle;
    this._numero = numero;
    this._cp = cp;
    this._plantas = [];
    console.log(
      `Construido nuevo edificio en calle: ${this._calle}, nº: ${this._numero}, CP: ${this._cp}.`
    );
  }

  agregarPlantasYPuertas(numPlantas, numPuertas) {
    for (let i = 0; i < numPlantas; i++) {
      let planta = { puertas: [] };
        for(let j = 0; j < numPuertas; j++) {
            planta.puertas.push(null);
        }
        this._plantas.push(planta);
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
    return this._calle;
  }

  imprimeNumero() {
    return this._numero;
  }

  imprimeCp() {
    return this._cp;
  }

   obtenerNombreCalle(){
    return this._calle;
  }

  obtenerNumeroPlantas(){
    return this._plantas[numPlanta - 1];
  }

  obtenerPuertasPorPlanta(numPlanta) {
    return this._plantas[numPlanta - 1];
    }


  /*agregarPropietario(nombre, planta, puerta) {
    this._plantas[planta].puertas[puerta] = nombre;
    console.log(`${nombre} es ahora el propietario del piso ${puerta + 1} en la planta ${planta + 1}`);
  }*/

  agregarPropietario(nombre, planta, puerta) {
    if (this._plantas[planta]) {
      this._plantas[planta].puertas[puerta] = nombre;
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
    for (let i = 0; i < this._plantas.length; i++) {
        for (let j = 0; j < this._plantas[i].puertas.length; j++) {
            console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${this._plantas[i].puertas[j]}`);
        }
    }
}
}
export { Edificio };