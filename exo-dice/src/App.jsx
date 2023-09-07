import { useState } from 'react'
import { Dice } from './component/DiceComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (

    <div>
      <h1>DICE BATTLE</h1>
      <Dice></Dice>
    </div>

  )
}

export default App
