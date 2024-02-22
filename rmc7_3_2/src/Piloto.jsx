import React, {useState, useEffect} from "react";
import './Piloto.css'


function Piloto({pilotos}){

    return(

        <div>
            <table className="tabla" >
                    <thead>
                            <th>Nombre</th>
                            <th>Equipo</th>
                            <th>Numero</th>
                            <th>Nacionalida</th>
                            <th>Campeonatos</th>
                    </thead>
                
                
                <tbody>
                        {pilotos.map((piloto, index)=>{
                            return(
                            <tr key = {index}>
                                <td>{piloto.nombre}</td>
                                <td>{piloto.equipo}</td>
                                <td>{piloto.numero}</td>
                                <td>{piloto.nacionalidad}</td>
                                <td>{piloto.campeonatos}</td>
                            </tr>);   
                    })}
                </tbody>
            </table>

            <button id="ordenarNombreAsc" onClick={ordenarNombreAsc}>Ordenar por nombre ascendente</button><br/>
            <button id="ordenarNombreDsc" onClick={ordenarNombreDsc}>Ordenar por nombre descendente</button><br/>
            <button id="ordenarEquipoAsc" onClick={ordenarEquipoAsc}>Ordenar por equipo ascendente</button><br/>
            <button id="ordenarEquipoDsc" onClick={ordenarEquipoDsc}>Ordenar por equipo descendente</button><br/>
            <span>Buscar por nacionalidad</span>
            <input type="text" id="nacionalidad" onChange={obtenerNacionalidad}/><br/>
            <button id="enviar" >Enviar</button>
            
            <div id="paginacion"></div>

        </div>
        


    );

}

export default Piloto;