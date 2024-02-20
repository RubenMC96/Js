import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyForm2 from "./MyForm2"
import Garage from './Garage'




const listaMarcas = ['Ford', 'BMW', 'Audi'];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        {/* <Football/> */}
        {/* <Gol isGoal = {true}/> */}
        <Garage/>

        {/* <MyForm2/> */}
      </div>


    </>
  )
}

export default App
