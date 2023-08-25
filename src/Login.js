import React from 'react'
import './Login.css'

const Login = () => {

  return (
    <div className='loginform'>
        <form action="">
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'  style={{margin:"10px", backgroundColor:"black"}}  className='btn'>Login</button>
            <a className='forgot' style={{margin:"5px",}} href="empty">Forgot Password ?</a>
        </form>
    </div>
  )
}

export default Login