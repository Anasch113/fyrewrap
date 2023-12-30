import React from 'react'
import "../Components/Login/login.css"
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import Navbar2 from '../Components/Navbar/Navbar2';
const Resgister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };
  return (
    <>
    <Navbar2/>
    <div className='login-container'>
     
    <div className='register-main-container '>

    
     <form className='register-from'>
    <h2 className='text-text-gray text-2xl max-[550px]:text-center'>Register Now</h2>
    <div className="register-inputs">

      <div className='flex items-center gap-3 max-[500px]:flex-col'>

        <div className='flex flex-col gap-2'>
          <label className='text-text-gray'> First Name</label>
        <input className='small-input' type="text" name='firstname'  />
        </div>

     <div  className='flex flex-col gap-2'>
      <label className='text-text-gray'> Last Name</label>
     <input  className='small-input' type="text" name='lastname'  />
     </div>

      </div>
      <div className='flex flex-col gap-2 '>
          <label className='text-text-gray'> Email</label>
        <input   className='long-input' type="email" name='email'  />
        </div>


        <div className="flex flex-col  items-center gap-3 ml-7">
          
         <label className='self-start text-text-gray' htmlFor="">Password</label>
          <div className='flex items-center gap-3 '>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
          
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='long-input'
          />
          <div 
            className='show-password-toggle'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaRegEye className='text-text-gray cursor-pointer' /> : <FaRegEyeSlash className='text-text-gray cursor-pointer' />}
          </div>
          </div>
          
        </div>

        <div className="flex flex-col  items-center gap-3 ml-7">
          
          <label className='self-start text-text-gray' >Confirm Password</label>
           <div className='flex items-center gap-3 '>
           <input
             type={showConfirmPassword ? 'text' : 'password'}
             name='password'
           
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             className='long-input'
           />
           <div 
             
             onClick={toggleConfirmPasswordVisibility}
           >
             {showConfirmPassword ? <FaRegEye className='text-text-gray cursor-pointer' /> : <FaRegEyeSlash className='text-text-gray cursor-pointer' />}
           </div>
           </div>
           
         </div>

        <div className='flex flex-col gap-2'>
          <label className='text-text-gray'>Phone</label>
        <input className='long-input' type="number" name='phone'  />
        </div>
    
    </div>
    <button className='bg-gray-500 text-white px-8 py-3 w-2/3 self-center rounded-xl hover:bg-gray-400'>Submit</button>
    <div className='text-text-gray text-sm flex items-center flex-row justify-center '>
      <Link to= "/login"> <p>Already have an account? <span className='text-sm  underline hover:underline hover:text-text-red cursor-pointer'>login</span></p></Link> 
    </div>
    
</form>
</div>
    </div>
    </>
  )
}

export default Resgister
