import React from 'react'
import img2 from "../../../../assets/crs-img-2.png"
const Card2 = () => {
  return (
    <div className='flex items-center flex-col gap-10 '>

      <div className='flex flex-col items-center justify-center gap-2  py-10 max-[600px]:py-0 max-[550px]:mt-10'>
     <p className='text-center w-full text-text-gray'>Achieve a 2-hour fire rating with a slender 38mm FyreWrap layer, eliminating the need</p>
     <p className='text-center w-full text-text-gray'>for bulkier fireproofing materials and preserving space and design integrity in.</p>
     <p className='text-center w-full text-text-gray'>commercial and residential spaces</p>
      </div>

      <div className='w-full'>
<img className='w-full h-full' src={img2} alt="image" />
      </div>
    </div>
  )
}

export default Card2
