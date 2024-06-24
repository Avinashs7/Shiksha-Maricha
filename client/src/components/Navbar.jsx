import React, { useEffect } from 'react'
import {Modal,Button} from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import defaultImage from '../../public/default.jpg'
import Otp from './Otp.jsx'
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import { useUser } from '../contexts/UserContext.jsx';
export default function Navbar(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    

  const handleShow = () => setShow(true);
  const [err,setError]=useState('');
  const [toggle,setToggle]=useState(true);
  const [streams,setStream]=useState([]);
  const [validate,setValidate]=useState(false);

  const UserContext=useUser();
  
  useEffect(()=>{
    if(localStorage.getItem('token')){
      UserContext?.setLogin(true);
      handleClose();
    }
  },[UserContext?.loggedIn])
  
  
  useEffect(()=>{
    const handleCourse=async()=>{
      await axios.get(`http://localhost:8000/course/stream/getStream`)
      .then((data)=>{
        setStream(data?.data.stream);
      })
      .catch(err=>console.log(err))
    }
    handleCourse();
  },[])

  const updateLogin=(e)=>{
    if(err!=='')setError('');
    UserContext?.setLoginDetails({...UserContext?.loginDetails,[e.target.name]:e.target.value});
  }
  const updateSignup=(e)=>{
    if(err!=='')setError('');
    UserContext?.setSignUpDetails({...UserContext?.signupDetails,[e.target.name]:e.target.value})
  }
  return (
    <>
    {validate && <Otp validate={validate} handleValidate={()=>setValidate(false)}/>}
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <button className='formBtn' onClick={()=>setToggle(true)}><Modal.Title className={toggle?"formHead":""}>Login</Modal.Title></button><h1>/</h1>
    <button className='formBtn' onClick={()=>setToggle(false)}><Modal.Title className={toggle?"":"formHead"}>Signup</Modal.Title></button>
    </Modal.Header>
    <Modal.Body>
  { toggle ?
    <SignIn updateLogin={updateLogin}/>
    :
    <SignUp updateSignup={updateSignup}/>
}
</Modal.Body>
  <Modal.Footer>
    {
      toggle?
      <>
      <button type="button" onClick={UserContext?.handleGoogleSignIn} class="google-sign-in-button" >
          Sign in with Google
      </button>
      <div>
        <Button variant='primary' onClick={UserContext?.handleLogin}>Login</Button>
      </div>
      </>
    :
    <>
    <button type="button" onClick={UserContext?.handleGoogleSignIn} class="google-sign-in-button" >
        Sign up with Google
    </button>
    <div>
      <Button variant='primary' onClick={UserContext?.handleSignUp}>SignUp</Button>
    </div>
    </>
  }
  </Modal.Footer>
</Modal> 
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <img src="../../public/shiksha-marichi.png" className="logo" alt="" />
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Streams
          </a>
          <ul className="dropdown-menu">
            {streams && streams.map(stream=>
              <li key={stream}><Link className='dropdowm-item nav-link' to='/'>{stream}</Link></li>
              )}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Universities</a>
        </li>
      </ul> 
      <ul className="navbar-nav me-lg-0">
      {UserContext?.loggedIn?
          <>
          <li className='nav-item'>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {
              UserContext?.user?.photo?
                <img alt='' className='avatar' src={UserContext?.user.photo}></img> 
                :
                <img alt='profile' className='avatar' src={defaultImage}></img> 
              }
              <li to="/profile" className='nav-link username'>{UserContext?.user?.firstName+' '+UserContext?.user?.lastName}</li>
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/profile">View profile</Link></li>
              <li><a className="dropdown-item" href="#">
                <Button className="nav-link logout" aria-current="page" onClick={()=>{localStorage.clear();UserContext?.setLogin(false);}}>Logout</Button></a>
              </li>
            </ul>
            </li>
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
        <button className="success-btn" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
