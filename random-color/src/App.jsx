import { useState } from 'react'
import './App.css'
import RandomColor from './component/random-color'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColor></RandomColor>
    </>
  )
}

export default App
