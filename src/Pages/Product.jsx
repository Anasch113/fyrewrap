import React from 'react'




import Product1 from '../Components/Products/Product1'
import Product2 from '../Components/Products/Product2'
import Application1 from '../Components/Products/Application1'
import Application2 from '../Components/Products/Application2'
import Carousel from '../Components/Products/Carousel/Carousel'
import Info from '../Components/Products/Info/Info'
import  quality from "../assets/high-quality.png"
import  flexibility from "../assets/flexibility.png"
import  time from "../assets/fast-time.png"

const Product = () => {
  
  
  return (

    <div className='product-container'>

      <div className='w-full flex flex-col items-center gap-20 min-h-900 mb-10 overflow-hidden'>

    <div className='flex flex-col items-center justify-center gap-10'>
    <h2 className='text-5xl font-bold font-poppins mt-10 text-text-gray'>Product Info</h2>


   <div className='flex flex-row items-center justify-start max-[600px]:flex-col '>
    <div className='flex flex-col items-center justify-center gap-5 p-5'>
    <img src={quality} className='w-16' alt="" />
<h2 className='text-text-gray text-2xl' >Quality</h2>

<div className='px-5'>
<p className='text-text-gray  text-center'>Exemplary craftsmanship, ensuring top-tier excellence in every detail</p>
</div>

    </div>

    <div className='flex flex-col items-center justify-center gap-5 p-5'>
<img src={flexibility} className='w-16' alt="" />
<h2 className='text-text-gray text-2xl' >Flexibility</h2>
<div className='px-5'>
<p className='text-text-gray  text-center'>Adaptable solutions tailored to meet diverse needs with ease</p>
</div>
    </div>

    <div className='flex flex-col items-center justify-center gap-5 p-5'>
<img src={time} className='w-16' alt="" />
<h2 className='text-text-gray text-2xl' >Save Time</h2>
<div className='px-5'>
<p className='text-text-gray  text-center'>Efficient timelines, delivering promptly without compromising precision</p>
</div>
    </div>

    

    
   </div>
    </div>
  


<Product1/>
<Product2/>
<Application1/>
<Application2/>
<Carousel/>













    </div>
    </div>
  )
}

export default Product
