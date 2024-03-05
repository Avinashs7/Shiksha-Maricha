// App.jsx
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Coursesdetails from './components/coursesdetails'; 
import Videos from './components/videos';

function App() {
  const [role, setRole] = useState(true);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/coursesdetails' element={<Coursesdetails imgSrc="img4.jpg" />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
