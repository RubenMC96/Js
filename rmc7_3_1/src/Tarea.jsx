import React, {useState, useEffect} from "react";
//import Tarea from "./Tarea"
import './Tarea.css'


function Tarea({texto, realizada,key, funcionActualizar}) {

  return ( <div>
                <span className={realizada? ".claseTachado" : ""}>{texto}</span>
                {/* <input type="checkbox" checked={realizada} onClick={(e)=>{ e.target.checked = !e.target.checked}}></input> */}
                <input
                  type="checkbox"
                  checked={realizada}
                 onChange={funcionActualizar}
                />
            </div>
        )
}
export default Tarea;