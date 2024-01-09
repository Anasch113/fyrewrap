import React from 'react'
import img1 from "../../../../assets/crs-img-1.png"
const Card1 = () => {
  return (
    <div className='flex items-center flex-col gap-10  '>

      <div className='flex flex-row items-center justify-evenly  py-10 max-[550px]:flex-col max-[550px]:gap-10 max-[550px]:p-5'>
        <div className='flex flex-col items-center justify-center gap-5  wow animate__animated animate__fadeIn '>
          <span className='text-center text-text-gray text-xl font-semibold'>Quick Application</span>
          <span className='text-center text-text-gray '>Its flexibility facilitate fast
            installation, lowering labor
            costs</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-5  wow animate__animated animate__fadeIn'>
          <span className='text-center text-text-gray text-xl font-medium'>Lighter Loads</span>
          <span className='text-center text-text-gray '>The reduced weight lessens
            the structural burden</span>
        </div>
        <div className='flex flex-col items-center justify-center  gap-5  wow animate__animated animate__fadeIn'>
          <span className='text-center text-text-gray text-xl font-medium'>Waste Reduction</span>
          <span className='text-center text-text-gray '>FyreWrap's custom fit cuts
            down on waste, offering
            material saving</span>
        </div>
      </div>

      <div className='w-full'>
        <img className='w-full h-full' loading='lazy' decoding='async' src={img1} alt="image" />
      </div>
    </div>
  )
}

export default Card1
