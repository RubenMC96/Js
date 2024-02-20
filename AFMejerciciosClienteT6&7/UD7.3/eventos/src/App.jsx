import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Football from './Futbol'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Football/>
      </div>  
    </>
  )
}

export default App
