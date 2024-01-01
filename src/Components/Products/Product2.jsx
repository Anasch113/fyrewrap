import React from 'react'
import product2 from "../../assets/crmproduct2.png"
const Product2 = () => {
  return (
    <div className =" w-full flex items-center justify-center border-b-2 border-gray-300 overflow-hidden max-[680px]:flex-col ">

 

<div className="min-h-500 w-full flex items-center justify-center  rounded-lg relative  max-[500px]:-mb-0  max-[680px]:min-h-72">
{/* component #1 */}
<img src={product2} loading='lazy' alt="product1" className="w-2/4 rounded-sm wow animate__animated animate__fadeInUp animate__delay-0s max-[800px]:w-full" />

{/* component #2 (Overlayed on top of #1) */}
<div className="absolute inset-y-56 flex justify-center flex-col bg-gray-600 bg-opacity-85  p-10 w-2/4 transform translate-y-56 wow animate__animated animate__fadeInUp animate__delay-1s max-[1200px]:w-2/3 max-[800px]:w-full max-[800px]:inset-y-24 max-[800px]:translate-y-24   max-[500px]:p-1">
<h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg ">
Air Distribution System
</h2>
<p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs ">
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