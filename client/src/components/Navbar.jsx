import React, { useEffect } from 'react'
import {Modal,Button} from 'react-bootstrap';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import defaultImage from '../../public/default.jpg'
import Otp from './Otp.jsx'
export default function Navbar(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    

  const handleShow = () => setShow(true);
  const navigate=useNavigate();
  const [err,setError]=useState('');
  const [toggle,setToggle]=useState(true);
  const [streams,setStream]=useState([]);
  const [user,setUser]=useState({});
  const [profile,setProfile]=useState({});
  const [loggedIn,setLogin]=useState(false);
  const [validate,setValidate]=useState(false);
  const [loginDetails,setLoginDetails]=useState([]);
  const [signupDetails,setSignUpDetails]=useState([]);
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setLogin(true);
    }
  },[loggedIn])
  useEffect(()=>{
    const getProfile=async()=>{
      const token=localStorage.getItem('token');
      await axios.get('http://localhost:8000/users/api',{headers:{Authorization:`Bearer ${token}`}})
      .then((response)=>{
        setUser(response.data)
      })
      .catch(err=>{
        console.log(err);
      });
      await axios.get('http://localhost:8000/profile/api',{headers:{Authorization:`Bearer ${token}`}})
      .then((response)=>{
        setProfile(response.data)
      })
      .catch(err=>{
        console.log(err);
      });
    }
    if(localStorage.getItem('token'))
    getProfile()
  },[loggedIn])
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
  const handleGoogleSignIn=async()=>{
    await axios.get('http://localhost:8000/users/google/signin')
    .then((data)=>{
      window.location.replace(data.data.url)
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  const handleLogin=async ()=>{
    if(loginDetails.email!==undefined && loginDetails.password!==undefined){
      await axios.post('http://localhost:8000/users/login',loginDetails)
      .then((data)=>{
        setLogin(data.data.success)
        if(data.data.success){
          localStorage.setItem('token',data.data.token);
          localStorage.setItem('role',data.data.userRole);
          console.log(localStorage.getItem('token'));
          handleClose();
        }
        else{
          setError('Incorrect username or password')
          console.log(err)
        }
      })
      .catch((err)=>{console.log(err)})
    }
  }
  const handleSignUp=async()=>{
    await axios.post('http://localhost:8000/users/signup',signupDetails)
    .then((data)=>{
      if(data.data.success){
        setLogin(true)
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('role',data.data.userRole);
        handleClose();
        setValidate(true);
      }
      else{
        setError('User already exists');
      }
    })
  }
  const updateLogin=(e)=>{
    if(err!=='')setError('');
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value});
  }
  const updateSignup=(e)=>{
    if(err!=='')setError('');
    setSignUpDetails({...signupDetails,[e.target.name]:e.target.value})
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
    <div>
      <form >
        <div className="formInput">
          <label for="email" >Email:</label><br></br>
          <input type='email' name="email" className='text-lowercased' onChange={updateLogin} required></input><br></br>
          <div className='underline'></div>
        </div>
        <div className='formInput'>
          <label for='password'>Password:</label><br></br>
          <input type='password' name='password' onChange={updateLogin} required></input><br></br>
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
      <>
      <button type="button" onClick={handleGoogleSignIn} class="google-sign-in-button" >
          Sign in with Google
        </button>
      <div>
        <Button variant='primary' onClick={handleLogin}>Login</Button>
      </div>
      </>
    :
    <>
    <button type="button" onClick={handleGoogleSignIn} class="google-sign-in-button" >
        Sign up with Google
    </button>
    <div>
      <Button variant='primary' onClick={handleSignUp}>SignUp</Button>
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
      {loggedIn?
          <>
          <li className='nav-item'>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {
              user.photo?
                <img alt='' className='avatar' src={user.photo}></img> 
                :
                <img alt='profile' className='avatar' src={defaultImage}></img> 
              }
              <li to="/profile" className='nav-link username'>{user.firstName+' '+user.lastName}</li>
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/profile">View profile</Link></li>
              <li><a className="dropdown-item" href="#">
                <Button className="nav-link logout" aria-current="page" onClick={()=>{localStorage.clear();setLogin(false);}}>Logout</Button></a>
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
