let iconos

function cargarIconos() {
  
}
document.getElementById("nuevoJuego").addEventListener("click", crearTablero);
function crearTablero(){
  cargarIconos()
  let tablero = document.getElementById('tablero');
  let tarjetas = [];

  

  for(let i = 0; i< 12; i++){
    tarjetas.push(`<div class="areaTarjeta">
    <div class="tarjeta">
      <div class="cara visible">
        <img src="./img/codificacion.png">
      </div>
      <div class="cara invisible"><img id="java" src="./img/java.png" ></div>
    </div>
  </div>`)
  }
  tablero.innerHTML = tarjetas.join("");
}