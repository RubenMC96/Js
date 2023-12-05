export default class Tarea {
  //Variables

  constructor(texto, realizado) {
    this._texto = texto;
    this._realizado = realizado;
  }

  get texto() {
    return this._texto;
  }

  get realizado() {
    return this._realizado;
  }
}
export { Tarea };
