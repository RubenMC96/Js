import React, {useState, useEffect} from "react";
import tareasJson from "./Tareas.json";
import Tarea from "./Tarea"

function ListTareas(){

    const [tareas, setTareas] = useState([]);

    useEffect(()=>{
       setTareas(tareasJson);
    }, []);

    const chekear = (index) =>{
        let newList = [...tareas];
        newList[index].realizada = !newList[index].realizada;
        setTareas (newList)
        }

    return(
            <div>
            {tareas.map((tarea, index) => (
                    // <div key={index} style={{ marginBottom: '10px' }}>
                    //     <span>{tarea.texto}</span>
                    //     <input type="checkbox"></input>
                    // </div> //Otra forma de hacerlo
                    <div>
                        <Tarea texto = {tarea.texto}
                                realizada = {tarea.realizada}
                                key={index}
                                funcionActualizar = {()=>{chekear(index)}}
                                 />
                        
                    </div>

            ))}
            </div>
            
        );

}




export default ListTareas;