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
      this._plantas.push(new Array(numPuertas).fill(null));
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

  agregarPropietario(nombre, planta, puerta) {
    this._plantas[planta - 1][puerta - 1] = nombre;
    console.log(
      `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`
    );
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
}
export { Edificio };