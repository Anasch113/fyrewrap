import React from 'react'
import product2 from "../../assets/crmproduct2.png"
const Product2 = () => {
  return (
    <div className =" max-[680px]:px-5 w-full   max-[400px]:-top-8 relative "> 

 

<div className=" min-h-screen max-h-screen   w-full flex    justify-center   relative  max-[500px]:max-h-none max-[500px]:min-h-min  ">
{/* component #1 */}

<img src={product2} loading='lazy' alt="product1" className="w-full   rounded-sm wow animate__animated animate__fadeIn  " />



{/* component #2 (Overlayed on top of #1) */}
<div className= "w-full absolute inset-y-48 flex justify-center flex-col bg-gray-600 bg-opacity-85  transform translate-y-48 wow animate__animated animate__fadeIn p-10   max-[800px]:w-full max-[800px]:inset-y-16 max-[800px]:translate-y-16   max-[500px]:p-1">
<h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg wow animate__animated animate__fadeInUp animate__delay-1s">
Air Distribution System
</h2>
<p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs wow animate__animated animate__fadeInUp animate__delay-1s">
  FyThis flexible, fire protection wrap meets the requirements defined by the Mechanical 
Code and is an alternative to a traditional fire-rated shaft wall enclosure around ducts. It 
is used to wrap HVAC ducts, stairwell pressurization ducts and smoke extraction ducts 
and provide critical fire protection and life safety.
</p>
</div>
</div>



</div>
  )
}

export default Product2