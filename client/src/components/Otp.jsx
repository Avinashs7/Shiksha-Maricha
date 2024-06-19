import React, { useState } from 'react'
import {Modal} from 'react-bootstrap';
import OtpInput from './OtpInput';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Otp({validate,handleValidate}) {
  const [show,setShow]=useState(validate);
  const navigate=useNavigate();
  const handleSubmit=(otp)=>{
    console.log(otp);
    const token=localStorage.getItem('token');
    axios.post('http://localhost:8000/users/verify',{otp:otp},{headers:{Authorization:`Bearer ${token}`}})
    .then((response)=>{
        console.log(response)
        navigate("/");
        handleValidate();
    })
    .catch((err)=>console.error(err))
  }
    return (
    <>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header>
                <Modal.Title>OTP validation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>The email has been sent to provided email. Please enter the otp sent. </p>
                </div>
                <OtpInput length={6} onOtpSubmit={handleSubmit}/>
            </Modal.Body>
        </Modal>
    </>
)
}
