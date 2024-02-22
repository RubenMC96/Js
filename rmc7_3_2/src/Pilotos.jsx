import React, {useState, useEffect} from "react";
import pilotos from "./pilotos.json"
import Piloto from "./Piloto";


function Pilotos(){
    const [listaPilotos, serListaPilotos] = useState([]);

    useEffect(()=>{
        serListaPilotos(pilotos);
    }, []);

    return(

       
            <Piloto

                pilotos = {pilotos}

            />
    );
}

export default Pilotos;