function Tarea({texto, realizada}) {

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return ( <div>
                <span>{texto}</span>
                {/* <input type="checkbox" checked={realizada} onClick={(e)=>{ e.target.checked = !e.target.checked}}></input> */}
                <input
                  type="checkbox"
                  checked={realizada}
                  onChange={handleCheckboxChange}
                />
            </div>
        )
   
}
export default Tarea;