import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'
export default function Navbar(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toggle,setToggle]=useState(true);

  const [loggedIn,setLogin]=useState(false);
  const [loginDetails,setLoginDetails]=useState([]);
  const [signupDetails,setSignUpDetails]=useState([]);
  const handleLogin=async ()=>{
    if(loginDetails.email!==undefined && loginDetails.password!==undefined){
      await axios.get(`http://localhost:8000/users/login/${loginDetails.email}/${loginDetails.password}`)
      .then((data)=>{
        setLogin(data.data.success)
        handleClose();
      })
      .catch((err)=>{console.log(err)})
    }
  }
  const handleSignUp=async()=>{
    // console.log(signupDetails)
    await axios.post('http://localhost:8000/users/signup',signupDetails)
    .then(()=>{
      setLogin(true)
      handleClose();
    })
  }
  const updateSignup=(e)=>{
    setSignUpDetails({...signupDetails,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <button className='formBtn' onClick={()=>setToggle(true)}><Modal.Title className={toggle?"formHead":""}>Login</Modal.Title></button><h1>/</h1>
    <button className='formBtn' onClick={()=>setToggle(false)}><Modal.Title className={toggle?"":"formHead"}>Signup</Modal.Title></button>
    </Modal.Header>
    <Modal.Body>
  { toggle ?
    <div>
      <form >
        <div className="formInput">
          <label for="email" >Email:</label><br></br>
          <input type='email' name="email" className='text-lowercased' onChange={(e)=>setLoginDetails({...loginDetails,[e.target.name]:e.target.value})} required></input><br></br>
          <div className='underline'></div>
        </div>
        <div className='formInput'>
          <label for='password'>Password:</label><br></br>
          <input type='password' name='password' onChange={(e)=>setLoginDetails({...loginDetails,[e.target.name]:e.target.value})} required></input><br></br>
          <div className='underline'></div>
        </div>
      </form>
    </div>
    :
    <div>
      <form>
        <div className='formInput'>
          <label for="firstName">First Name:</label><br></br>
          <input type='text' name='firstName' onChange={updateSignup} required></input><br></br>
          <div className='underline'></div>
        </div>
        <div className='formInput'>
          <label for="lastName">Last Name:</label><br></br>
          <input type='text' name='lastName' onChange={updateSignup}></input><br></br>
          <div className='underline'></div>
        </div>
        <div className='formInput'>
          <label type='dropdown' for='gender'>Gender: </label>
          <select name='gender' className="formSelect" onChange={updateSignup}>
            <option value=''>--Select--</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select><br></br>
        </div >
        <div className='formInput'>
          <label type='dropdown' for='role'>Role: </label>
          <select name='role' className="formSelect" onChange={updateSignup}>
            <option value=''>--Select--</option>
            <option value='student'>Student</option>
            <option value='tutor'>Tutor</option>
          </select><br></br>
        </div>
        <div className='formInput'>
          <label for="email" >Email:</label><br></br>
          <input type='email' name="email" className='text-lowercased' onChange={updateSignup} required></input><br></br>
          <div className='underline'></div>
        </div>
        <div className='formInput'>
          <label for='password'>Password:</label><br></br>
          <input type='password' name='password' onChange={updateSignup} required></input><br></br>
          <div className='underline'></div>
        </div>
      </form>
    </div>
}
</Modal.Body>
  <Modal.Footer>
    {
      toggle?
      <div>
    <Button variant='primary' onClick={handleLogin}>Login</Button>
      </div>
    :
    <div>
    <Button variant='primary' onClick={handleSignUp}>SignUp</Button>
    </div>
  }
  </Modal.Footer>
</Modal> 
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <img src="../../public/favicon.ico" className="logo" alt="" />
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Learn
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="Courses">Courses</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Universities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Profile">Profile</a>
        </li>
          {loggedIn?
          <>
          <li className='nav-item'>
            <Button className='nav-link'>Profile</Button>
          </li>
          </>
          :
          <>
          <li className="nav-item">
          <Button className="nav-link" aria-current="page" onClick={handleShow}>Login</Button>
          </li>
          </>}
      </ul> 
    </div>
    <div>
    <form className="d-flex search" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="success-btn" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
