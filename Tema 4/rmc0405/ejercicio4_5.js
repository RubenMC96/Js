
    let jugador ={
        fuerza: 1
    }
    
    function incrementarFuerza(){
        jugador.fuerza ++
    }
    function showFuerza(){
        document.getElementById("fuerza").innerHTML = `Tu fuerza es ${jugador.fuerza}`
    }


