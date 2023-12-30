import React from 'react'
import "../Components/Login/login.css"
import img from "../assets/login-img.png"
import {Link} from "react-router-dom"
import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Navbar2 from '../Components/Navbar/Navbar2'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <Navbar2/>
    <div className='login-container'>
     <div className='login-main-container'>

<div className='left-container'>
<div className='left-text'>
<h2>Get more things done with login platform</h2>
<span className='p-span'>
<p>FyreWrap® stands as the premier passive fire protection option for commercial ducts. Its 
Insulfrax core is not only lightweight but also provides superior insulation at high 
temperatures. The core is fully enclosed by a fibreglass reinforced scrim, enhancing its 
durability, tear resistance, and antibacterial properties. The solution is characterized by its 
quick, clean, and straightforward application.</p>
</span>

</div>
<div className="left-img">
<img src={img} alt="" />
</div>

</div>

<div className="right-container">

<form className='login-from'>
    <h2>Welcome Back!</h2>
    <div className="login-inputs">
    <input type="text" name='email' placeholder='Email' />
    <div className="flex  items-center gap-3 ml-7">
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div 
            className='show-password-toggle'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEye className='text-text-gray cursor-pointer' /> : <FaRegEyeSlash className='text-text-gray cursor-pointer' />}
          </div>
        </div>
    </div>
<button className='bg-gray-500 text-white px-8 py-3 rounded-xl hover:bg-gray-400'>Login</button>

    <div className='text-text-gray text-sm'>
      <Link to= "/register"> <p>Don't have an account? <span className='text-sm  underline hover:underline hover:text-text-red cursor-pointer'>Register Now</span></p></Link> 
    </div>
    
</form>

</div>

     </div>
    </div>
    </>
  )
}

export default Login
