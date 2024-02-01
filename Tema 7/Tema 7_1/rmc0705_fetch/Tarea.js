export default class Tarea {
  //Variables

  constructor(tarea, realizado) {
    this.tarea = tarea;
    this._realizado = realizado;
  }

  get tarea() {
    return this.tarea;
  }

  get realizado() {
    return this._realizado;
  }
}
export { Tarea };
