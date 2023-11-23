export default class Edificio {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = {};
    document.getElementById(
      "show"
    ).innerHTML = `Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.`;
  }

  agregarPlantasYPuertas(numPlantas, puertas) {
    for (let i = 1; i <= numPlantas; i++) {
      this.plantas[i] = {
        puertas: puertas,
        propietarios: {},
      };
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  showCalle() {
    return this.calle;
  }

  showNumero() {
    return this.numero;
  }

  showCodigoPostal() {
    return this.codigoPostal;
  }

  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta].propietarios[puerta] = nombre;
    document.getElementById(
      "show"
    ).innerHTML = `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`;
  }

  showPlantas() {
    for (let planta in this.plantas) {
      for (let puerta in this.plantas[planta].propietarios) {
        document.getElementById(
          "show"
        ).innerHTML = `Propietario de la puerta ${puerta} en la planta ${planta}: ${this.plantas[planta].propietarios[puerta]}`;
      }
    }
  }
}
/* Mirar los discos y ver como hice un disco nuevo (no el formulario) ademas hay 
que mirar recoger los datos del usuario. */
document
  .getElementById("newEdificio")
  .addEventListener("click", new Edificio());
document
  .getElementById("newPropietario")
  .addEventListener("click", Edificio.agregarPropietario);
document
  .getElementById("changeNumero")
  .addEventListener("click", Edificio.modificarNumero);
document
  .getElementById("changeCalle")
  .addEventListener("click", Edificio.modificarCalle);
document
  .getElementById("changeCP")
  .addEventListener("click", Edificio.modificarCodigoPostal);
document
  .getElementById("showCalle")
  .addEventListener("click", Edificio.showCalle);
document
  .getElementById("showNumero")
  .addEventListener("click", Edificio.showNumero);
document
  .getElementById("showCP")
  .addEventListener("click", Edificio.showCodigoPostal);
document
  .getElementById("showPlantas")
  .addEventListener("click", Edificio.showPlantas);

export { Edificio };
