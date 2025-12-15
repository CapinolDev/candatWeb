import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NasTym from './components/nasTym'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Členové našeho týmu</h1>      
      <NasTym />
    </>
  )
}

export default App
