import React from 'react'

import Banner from '../Components/Home/Banner'
import Product from "./Product"
import Login from "./Login"
import Register from "./Resgister"
import Footer from './Footer'
import Contact from './Contact'
import Navbar from '../Components/Navbar/Navbar'
import Info from '../Components/Products/Info/Info'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
   
     <Banner id='home'/>
     </div>
     <div className='product'>
     <Product id='product'/>
     </div>
     <div className='info'>
     <Info id='info'/>
     </div>

     <div className='contact'>
     <Contact id= 'contact'/>
     </div>
    
    

   
     
 
    
    </>
  )
 
}

export default Home
