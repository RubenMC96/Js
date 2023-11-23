let arr = ["Marcos,Luis,Pepe,Manuel,Lolo",
           "Marcos,Luis,Pepe,Antonio,Lolo", 
           "Marcos,Luis,Pepe,Manuel,David"];
let convocados = [];

let convArray = [];
for(let i = 0; i < arr.length; i++){
    convArray[i] = arr[i].split(/,/g);
  }

let frsConv = convArray[0];
for(let i = 0; i < frsConv.length; i++){
    let jugador = frsConv[i];
    let convTodas = true;
    
    // Recorrer las demás convocatorias
    for(let j = 1; j < convArray.length; j++){
        // Si el jugador no está en una se descarta
        if(!convArray[j].includes(jugador)){
            convTodas = false;
            break;
        }
    }
    
    // if jugador está en todas las convocatorias, add lista de convocados
    if(convTodas){
        convocados.push(jugador);
    }
 }
document.getElementById("convocados").innerHTML = `La lista de los jugadores convocados a todos los partidos: ${convocados.join(", ")}`;

