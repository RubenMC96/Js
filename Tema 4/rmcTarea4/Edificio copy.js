export default class Edificio {
  constructor(calle, num, cp) {
    this.calle = calle;
    this.numero = num;
    this.cPostal = cp;
    this.nombreCalle;
    this.plantas = {};
  }

  agregarPlantasYPuertas(numPlanta, numPuertas) {
    this.plantas.push(numPlanta);
    let planta = new Planta();
    planta.addPuertas(numPuertas);
  }
  modificarNumero(num) {
    this.numero = num;
  }
  modificarCalle(nombre) {
    this.nombreCalle = nombre;
  }
  modificarCodigoPostal(cp) {
    this.cPostal = cp;
  }
  imprimeCalle() {
    return `El nombre de la calle es: ${this.nombreCalle}`;
  }
  imprimeNumero() {
    return `El número del edificio es: ${this.numero}`;
  }
  imprimeCodigoPostal() {
    return `El CP del edificio es: ${this.cPostal}`;
  }

  // modPrestado(nuevoPrestado) {
  //   this.prestado = nuevoPrestado;
  // }

  // modCaratula(nuevaCaratula) {
  //   this.caratula = nuevaCaratula;
  // }

  // showInfo() {
  //   let showLocal = this.localizacion;
  //   let showPrestado = this.prestado;
  //   let showCaratula = this.caratula;

  //   return `Nombre: ${this.nombre}, Grupo: ${this.grupo}, Año: ${this.anno}, Tipo: ${this.tipo}, Localizacion: ${showLocal}, Prestado: ${showPrestado}, Carátula: ${showCaratula}`;
  // }
}
class Planta {
  constructor(num) {
    this.numPlanta = num;
    this.puertas = {};
  }
  addPuertas(puerta) {
    this.puertas.push(puerta);
  }
}
class Puerta {
  constructor(num, propietario) {
    this.numPuerta = num;
    this.propietario = propietario;
  }
  addPropietario(nombre) {
    this.propietario = nombre;
  }
}
export { Edificio };
