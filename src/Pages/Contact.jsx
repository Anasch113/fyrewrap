import React from 'react'
import '../Components/Contact/contact.css'
import { MdPlayArrow } from "react-icons/md";
const Contact = () => {
  return (
    <div className='contact-container'>


      <div className='contact-main-container'>



<div className='ai-chat-box'>
<h1 className='text-5xl text-white font-poppins font-bold self-start max-[550px]:text-2xl  wow animate__animated animate__fadeIn'>Want to find out more?</h1>
<div className="chatting">
  <h3 className=' wow animate__animated animate__fadeIn'>FyreWrap</h3>
  <div className='flex flex-col'>
  <span className='bg-yellow-500 p-3 rounded-full w-2 h-2  -left-7  -top-1  relative'></span>
  <h5 className=' wow animate__animated animate__fadeIn'>Hello and welcome to FyreWrap Assistance! I'm your dedicated FyreWrap Agent, ready to help with all your needs. please share your name and email. 
Whether it's about product details, installation guidance, compliance with fire safety codes, quote or any other inquiries regarding FyreWrap, I'm here to 
assist. How can I help you today?</h5>
  </div>
 
</div>
</div>

<form className='contact-form' >

<div className='form-inputs'>
<div className="form-heads">
<p>Register/Login</p>
</div>
<div className="inputs">


  <label htmlFor=""> Name</label>
  <input type="text" name='name' />
 <label htmlFor="">Email</label>

  <input type="email" name='email'  />
</div>


</div>

<div className="form-button">
<button><MdPlayArrow className='text-6xl text-white'/></button>
</div>


</form>


      </div>
      

    </div>
  )
}

export default Contact
