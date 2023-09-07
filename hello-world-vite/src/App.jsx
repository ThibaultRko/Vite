import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFunctionComponent } from "./components/MyFunctionComponent"
import { MyClassComponent } from './components/MyClassComponent'
function App() {
  
  const element= <h1>"hello world"</h1>

  
  return (
    <>
      <div>
        {element}
        <MyFunctionComponent></MyFunctionComponent>
        <MyClassComponent></MyClassComponent>
      </div>
    </>
  )
}

export default App
