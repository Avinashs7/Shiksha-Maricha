import { useState } from 'react'
// import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  const [role,setRole]=useState(true)
  
  return (
    <>
      <Navbar title="Shiksha Marichi"/>
      <Home/>
    </>
  )
}
export default App
