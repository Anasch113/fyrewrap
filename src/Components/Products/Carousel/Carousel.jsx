import React, { useState } from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'

const Carousel = () => {

    const [activatedCard, setActivatedCard] = useState(1)

    const handleCardClick = (cardNumber)=>{
setActivatedCard(cardNumber)
    }
  return (
    <div className='w-full  flex items-center justify-center '>
        
<div className='flex  items-center justify-center flex-col  w-2/3 max-[700px]:w-2/3 '>

    <div className= ' flex gap-8   bg-gray-300 px-16 rounded-2xl max-[550px]:px-5 max-[550px]:gap-2'>
<button onClick={()=> handleCardClick(1)} className={` font-semibold ${activatedCard === 1 ? 'text-white font-bold text-2xl  bg-gray-500 rounded-xl p-5 max-[550px]:p-1 max-[500px]:text-lg' : 'text-gray-500 text-lg hover:text-gray-400'}`}>Cost Savings</button>
<button onClick={()=> handleCardClick(2)} className={` font-semibold ${activatedCard === 2 ? 'text-white font-bold text-2xl  bg-gray-500 rounded-xl p-5 max-[550px]:p-1 max-[500px]:text-lg' : 'text-gray-500 text-lg hover:text-gray-400'}`}>Space-Efficient</button>
<button onClick={()=> handleCardClick(3)} className={` font-semibold ${activatedCard === 3 ? 'text-white font-bold text-2xl  bg-gray-500 rounded-xl p-5 max-[550px]:p-1 max-[500px]:text-lg' : 'text-gray-500 text-lg hover:text-gray-400'}`}>Enery-Savings</button>

    </div>

    <div className='flex flex-col'>
  {activatedCard === 1 &&  <Card1 />} 
  {activatedCard === 2 &&  <Card2 />} 
  {activatedCard === 3 &&  <Card3 />} 
    
    </div>
   
    
</div>
    </div>
  )
}

export default Carousel
