import React from 'react'
import img3 from "../../../../assets/crs-img-3.png"
const Card3 = () => {
    
  return (
    <div className='flex items-center flex-col gap-10 '>

    <div className='flex flex-col items-center justify-center gap-2  py-10  wow animate__animated animate__fadeIn'>
   <p className='text-center w-full text-text-gray'>FyreWrap's superior insulation capabilities minimise heat transfer,</p>
   <p className='text-center w-full text-text-gray'>bolstering fire safety while reducing the energy required for climate control.</p>
   <p className='text-center w-full text-text-gray'>The result is a decrease in utility expenses</p>
    </div>

    <div className='w-full'>
<img loading='lazy' decoding='async' className='w-full h-full' src={img3} alt="image" />
    </div>
  </div>
  )
}

export default Card3
