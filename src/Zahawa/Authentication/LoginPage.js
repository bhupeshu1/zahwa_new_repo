import React from 'react'
import './Page.css'
import image from '../../Components/Image/image'
// import { AiFillEyeInvisible } from 'react-icons/AiFillEyeInvisible';
function myFunction(){
  alert("are you sure")
}


const LoginPage = () => {
  return (
    <div className='Authentication-container'>
      <div className='login-ui'>
        <div className='relative'>
          <div className='title'>
            <h1>Log in to your account</h1>
            <p className='vendor'>please log in to use our vendor portal</p>
          </div>
          <div className='text'>Email</div>
          <input type="email" className='input' placeholder='Email'></input>
          <div className='text'>Password</div>
          <input type="password" className='input' placeholder='Password'></input>
          <button id='white-btn' placeholder='Save changes' className='input' onClick="myFunction()">Save changes</button>
          <p className='color-text'>Forgot your password?</p>
        </div>
      </div>
      <div className='login-ui-logo'>
        <img src={image.zahwaLogo} alt="logo" className='logo-image' />
      </div>

    </div>
  )
      
    }

export default LoginPage
