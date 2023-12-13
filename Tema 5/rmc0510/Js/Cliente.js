export default class Cliente{

  constructor(documento, fechaNac){
      this._documentacion = documento;
      this._fecha = fechaNac;
      this._clave = crearClave();
  }

  get documentacion(){
      return this._documentacion;
  }
  set documentacion(documento){
      this._documentacion = documento;
  }

  get fecha(){
      return this._fecha;
  }
  set fecha(fechaNac){
      this._fecha = fechaNac;
  }

  get clave(){
      return this._clave;
  }
  set clave(claveSeguridad){
      this._clave = claveSeguridad;
  }
}

//Métodos

function crearClave() {
      
  let num;
  let clave = "";

  while(clave.length !=6){
      num = Math.floor((Math.random() * 10));
      if(!clave.include(num)){
          clave += num;
      }
  }
  return clave;
}
export{Cliente};