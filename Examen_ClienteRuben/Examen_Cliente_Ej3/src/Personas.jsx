import React, {useState, useEffect} from "react";
import personasJson from "./personas.json"
import Persona from "./Persona";

function Personas(){

    const [personas, setPersonas] = useState([]);

    useEffect(()=>{
        setPersonas(personasJson.results);
    }, []);


    return(
        <div>
            {personas.map((persona, index) =>(
                <div>
                    <Persona
                        first={persona.name.first}
                        country={persona.location.country}
                        email={persona.email}
                        imagen={persona.picture.medium}
                        key={index}
                    />
                </div>
            ))}
        </div>
    );

}
export default Personas;