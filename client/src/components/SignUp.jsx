import React from 'react'

export default function SignUp({updateSignup}) {
  return (
    <>
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
    </>
  )
}
