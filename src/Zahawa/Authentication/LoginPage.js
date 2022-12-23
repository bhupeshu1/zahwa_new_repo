import React from 'react'
import './Page.css'

const LoginPage = () => {
  return (
    <div className='Authentication-container'>
      <div className='login-ui'>
        <div className='heading-tilte'><h1>Log in to your account</h1>
          <p>please log in to use our vendor portal</p>
        </div>
        <div className='input-text'>
          <div>Email</div>
          <input type="email"></input>
          <div>Password</div>
          <input type="password"></input>
          <input type="button" className='change-btn'></input>
          <p className='color-text'>Forgot your password</p>
        </div>

      </div>
      <div className='login-ui-logo'></div>

    </div>
  )
}

export default LoginPage
