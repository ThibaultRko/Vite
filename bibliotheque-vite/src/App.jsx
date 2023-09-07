import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PokemonData } from './Component/MyImgComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='grid'>
        <h1 className='container'>Mon Pokedex</h1>
        <PokemonData></PokemonData>
      </div>
  )
}

export default App
