export default class Disco {
  constructor(nombre, grupo, anno, tipo, localizacion, prestado, caratula) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.anno = anno;
    this.tipo = tipo;
    this.localizacion = localizacion;
    this.prestado = prestado;
    this.caratula = caratula;
  }

  modLocal(nuevaLocal) {
    this.localizacion = nuevaLocal;
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
