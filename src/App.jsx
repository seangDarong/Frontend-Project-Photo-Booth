import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import WelcomePage from "./Components/WelcomePage"
import InstructionPage from "./Components/InstructionPage"
import PhotoBoothPage from "./Components/PhotoBoothPage" 
import UploadPage from "./Components/UploadPage"
import StylingPage from "./Components/StylingPage"


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />}></Route>
        <Route path='/Instructions' element={<InstructionPage/>}></Route>
        <Route path='/PhotoBooth' element={<PhotoBoothPage />}></Route>
        <Route path='/Upload' element={<UploadPage/>}></Route>
        <Route path='/Styling' element={<StylingPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
