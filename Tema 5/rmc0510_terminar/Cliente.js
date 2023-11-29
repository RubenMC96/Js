export default class Cliente {
  constructor(documento, fechaNac, clave) {
    this._documento = documento;
    this._fechaNac = new Date(fechaNac);
    this._clave = clave;
  }

  get documento() {
    return this._documento;
  }

  modPrestado(nuevoPrestado) {
    this.prestado = nuevoPrestado;
  }

  modCaratula(nuevaCaratula) {
    this.caratula = nuevaCaratula;
  }

  showInfo() {
    let showLocal = this.localizacion;
    let showPrestado = this.prestado;
    let showCaratula = this.caratula;

    return `Nombre: ${this.nombre}, Grupo: ${this.grupo}, Año: ${this.anno}, Tipo: ${this.tipo}, Localizacion: ${showLocal}, Prestado: ${showPrestado}, Carátula: ${showCaratula}`;
  }
}
export { Disco };
