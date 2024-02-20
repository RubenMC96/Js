function Tarea({ tarea, onChange }) {
    return (
        <li>
            <input  
                type="checkbox"  
                checked={tarea.realizada}  
                onChange={onChange}  
            />
            <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none', color: tarea.realizada ? 'red' : 'black' }}>
                {tarea.texto}
            </span>
        </li>
    );
}

export default Tarea;