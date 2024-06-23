import React from 'react'

export default function SignIn({updateLogin}) {
  return (
    <>
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
    </>
)
}
