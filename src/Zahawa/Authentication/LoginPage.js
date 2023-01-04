import React, { useState } from 'react';
import './Page.css'
import image from '../../Components/Image/image'
import axios from "axios";
// import { AiFillEye } from 'react-icons/ai';
import { FiEyeOff } from 'react-icons/fi';
import { Toggle2Off } from 'react-bootstrap-icons';
// const LoginPage = () => {
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')
//   console.log({ email, password })
//   const handleEmail = (e) => {
//     setEmail(e.target.value)

//   }
//   const handlePassword = (e) => {
//     setPassword(e.target.value)

//   }
//   const handleApi = () => {
//     console.log({ email, password })
//     axios.post('http://zahawa.highpolar.in/auth/login/', {
//       email: email,
//       password: password
//     })
//       .than(result => {
//         console.log(result.data);
//         alert('success')
//       })
//       .catch(error => {
//         console.log(error)
//         alert('service error')
//       })

//   }
// const [password, setPasswordValue]=useState("password");
// const [passwordInput,setPasswordInput]=useState(" ");
state ={
  ispasswordshow : false
}
TogglePasswordVisivlity=()=>{
  const {ispasswordshow}=this.state;
  this.setState({ispasswordshow:!ispasswordshow})

}
  return (
    <div className='Authentication-container'>
      <div className='login-ui'>
        <div className='relative'>
          <div className='title'>
            <h1>Log in to your account</h1>
            <p className='vendor'>please log in to use our vendor portal</p>
          </div>
          <div className='text'>Email</div>
          <input type="email" className='input' placeholder='Email' value={email} onChange={handleEmail}></input>
          <div className='text'>Password</div>
          <input type={password} value={passwordInput} onChange={onPasswordChange} className='input' placeholder='Password'></input><span>< FiEyeOff id="eyeicon" /></span>
          {/* <span><AiFillEye/></span> */}
          <button id='white-btn' className='input' onClick={handleApi}>Log in</button>
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
