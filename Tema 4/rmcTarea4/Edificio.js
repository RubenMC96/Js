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
      this.plantas.push(new Array(numPuertas).fill(null));
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

  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta - 1][puerta - 1] = nombre;
    console.log(
      `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`
    );
  }

  imprimePlantas() {
    this.plantas.forEach((planta, i) => {
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