import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tarea from './Tarea'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([{ texto: 'Tarea1', realizada: false }, { texto: 'Tarea2', realizada: false }, { texto: 'Tarea3', realizada: false }]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleCheckboxChange = (index) => {
      const newTareas = [...tareas];
      newTareas[index].realizada = !newTareas[index].realizada;
      setTareas(newTareas);
  };

  const handleInputChange = (event) => {
      setNuevaTarea(event.target.value);
  };

  const handleAddTask = () => {
      const newTareas = [...tareas, { texto: nuevaTarea, realizada: false }];
      setTareas(newTareas);
      setNuevaTarea('');
  };

  return (
      <div>
          <h2>Lista de Tareas Interactiva</h2>
          <input  
              type="text"  
              placeholder="Nueva tarea"  
              value={nuevaTarea}  
              onChange={handleInputChange}  
          />
          <button onClick={handleAddTask}>Agregar Tarea</button>
          <ol>
              {tareas.map((tarea, index) => (
                  <Tarea  
                      key={index}  
                      tarea={tarea}  
                      onChange={() => handleCheckboxChange(index)}
                  />
              ))}
          </ol>
      </div>
  );
}

export default App
