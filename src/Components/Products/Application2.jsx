import React from 'react'
import product5 from "../../assets/crmproduct5.mp4"
import product6 from "../../assets/crmproduct1.mp4"
const Application2 = () => {
  return (
   


<div className='w-full flex items-center justify-evenly min-h-500 flex-col mb-24'>
      <div className='flex flex-row w-full  gap-3  justify-center wow animate__animated animate__rotateIn'>

     <div className='flex flex-col items-start justify-center  gap-2 mb-10'>

<h2 className='text-5xl font-poppins text-text-gray font-semibold '>Applications </h2>
<p className=' border w-2/3'></p>
     </div>

</div>

<div className=' flex flex-col items-center w-2/3' >

  
{/* 1 */}
<div className='flex flex-row  w-full group-hover:grayscale-0' >

<div className='w-full   h-56 wow animate__animated animate__fadeIn '>
  <video autoPlay
    loop
    muted src={product5}  className='w-full h-full object-cover  grayscale hover:grayscale-0 ' alt="" />
</div>
<div className='hover:bg-yellow-500 flex justify-center flex-col px-5 w-full cursor-pointer max-[600px]:w-2/5:'>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Kitchen</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Exhaust</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
</div>
{/* 2 */}
<div  className=' w-full flex flex-row  justify-between '>

<div className='hover:bg-yellow-500 flex justify-center items-end px-5 flex-col  w-full cursor-pointer' >
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Smoke</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Extraction</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
<div className='w-full h-56  wow animate__animated animate__fadeIn '>
  <video autoPlay
    loop
    muted src={product6} className='w-full h-full object-cover  grayscale hover:grayscale-0' alt="" />
</div>
</div>
</div>

</div>
  )
}

export default Application2
