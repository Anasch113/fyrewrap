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

      <div className='w-full flex flex-col items-center gap-2  mb-10 overflow-hidden'>

    
  


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
