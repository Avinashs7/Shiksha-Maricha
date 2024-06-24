import { useEffect, useState } from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import Profile from './components/Profile'
import LectureForm from './components/LectureForm'
import Footer from './components/Footer'
import CourseForm from './components/CourseForm'
import Course from './components/Course'
import Lecture from './components/Lecture'
import GoogleAuth from './components/GoogleAuth'
import { CourseProvider } from './contexts/CourseContext'
import {LectureProvider} from './contexts/LectureContext'
import {UserProvider} from './contexts/UserContext'
import { ProfileProvider } from './contexts/ProfileContext'
function App() {
  const [role,setRole]=useState()
  useEffect(()=>{
    if(localStorage.getItem('role'))
    setRole(localStorage.getItem('role'));
  },[])

  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/users/google" element={<><GoogleAuth/></>}></Route>
          <Route exact path="/" element={<>
          <Navbar title="Shiksha Marichi"/>
          <Home/>
          </>}></Route>
          <Route exact path="/courses" element={<><CourseProvider><Navbar title="Shiksha Marichi"/><Courses role={role}/></CourseProvider></>}></Route>
          <Route exact path="/profile" element={<><ProfileProvider> <Navbar title="Shiksha Marichi"/><Profile role={role}/></ProfileProvider></>}></Route>
          <Route exact path='/add/course' element={role==='tutor'?<><Navbar title="Shiksha Marichi"/><CourseForm/></>:<h1>Unauthorized</h1>}></Route>
          <Route exact path='/add/lecture/:cid' element={role==='tutor'?<><Navbar title="Shiksha Marichi"/><LectureForm/></>:<h1>Unauthorized</h1>}></Route>
          <Route exact path='/lecture/:url' element={<>  <Navbar title="Shiksha Marichi"/>  <Lecture/></>}></Route>
          <Route exact path='/course/:courseId' element={<> <LectureProvider> <Navbar title="Shiksha Marichi"/>  <Course role={role}/></LectureProvider></>}></Route>
        </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
    <Footer/>
    </>
  )
}
export default App
