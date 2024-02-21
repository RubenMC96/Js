import React from "react";

function Persona({first,country,email,imagen,key}){

    return(
        <div>
            <p>{first}</p>
            <p>{country}</p>
            <p>{email}</p>
            <img src= {imagen} alt="imagenPersona" />
        </div>
    )
}
export default Persona