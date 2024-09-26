import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/home'
import Add from './Components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Home></Home>
     <Add></Add>
    </>
  )
}

export default App
