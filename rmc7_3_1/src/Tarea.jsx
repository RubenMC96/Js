function Tarea({texto, realizada}) {
  return ( <div>
                <span>{texto}</span>
                <input type="checkbox" checked={realizada} onClick={(e)=>{ e.target.checked = !e.target.checked}}></input>
            </div>
        )
   
}
export default Tarea;