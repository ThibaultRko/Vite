import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { HomePage } from './Components/myHomePage'
import { MyForms } from './Components/myFormsComponent'
import { MyControlForms } from './Components/myControlFormsComponent'


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/formulaire' element={<MyForms />}/>
        <Route path='/formulaireControle' element={<MyControlForms />}/>
      </Routes>
    </BrowserRouter>
  )
}

// export default App;




