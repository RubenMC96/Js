import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Football from './Football'
import Gol from './Gol'
import Garage from './Garage'

const listaMarcas = ['Ford', 'BMW', 'Audi'];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Football/>
        <Gol isGoal = {true}/>
        <Garage cars = {listaMarcas}/>
      </div>
    </>
  )
}

export default App
