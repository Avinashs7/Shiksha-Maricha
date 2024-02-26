import { useState } from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'

import Footer from './components/Footer'
import Profile from './components/Profile'

function App() {
  const [role,setRole]=useState(true)
  
  return (
    <>
        <Navbar/>
       
        <BrowserRouter>
        <Routes><Route path='/' element={<Home/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
         < Route path='/Profile' element={<Profile/>}></Route>
        </Routes>
          </BrowserRouter>
          {/* <Footer/> */}
        
        
    </>
       
   
  )
}
export default App
