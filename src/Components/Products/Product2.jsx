import React from 'react'
import product2 from "../../assets/crmproduct2.png"
import filepdf from "../../assets/Fyre-wrap.com.pdf"
import { PiNumberSquareTwo } from "react-icons/pi";
const Product2 = () => {
  return (
   



<div className =" w-full flex items-center justify-center flex-col  gap-10 overflow-hidden min-h-screen">
    
    
    <div className="flex flex-col items-center justify-center gap-5 ">

      <PiNumberSquareTwo className='text-5xl text-text-gray wow animate__animated animate__fadeInLeft'/>
        <h2 className="font-poppins font-semibold text-5xl text-white mb-4 max-[1200px]:text-lg wow animate__animated animate__fadeInLeft">
        Air Distribution System
        </h2>
        <div className='px-52 max-[700px]:px-8'>
        <p className=" text-white text-center leading-8  max-[1200px]:text-sm max-[500px]:text-xs wow animate__animated animate__fadeInLeft">
        FyThis flexible, fire protection wrap meets the requirements defined by the Mechanical 
Code and is an alternative to a traditional fire-rated shaft wall enclosure around ducts. It 
is used to wrap HVAC ducts, stairwell pressurization ducts and smoke extraction ducts 
and provide critical fire protection and life safety.
        </p>
        </div>
        
        <a
      href={filepdf}
      download='file'
      className='bg-red-color px-20 py-3 rounded-3xl text-text-gray wow animate__animated animate__fadeInLeft'
    >
      Read More
    </a>
      </div>



        <div className=" w-2/4  flex items-center justify-center  rounded-lg  mb-3   ">
      {/* component #1 */}
      <img 
  
  src={product2} alt="product1" className="w-full  h-[500px] rounded-xl wow animate__animated animate__fadeInUp animate__delay-0s max-[1200px]:w-2/3 max-[800px]:w-full"  />
    
      {/* component #2 (Overlayed on top of #1) */}
      
    </div>
    
    
    
        </div>
  )
}

export default Product2
