import React from 'react'
import "../../app.css"
import { Link } from 'react-router-dom';
import logo from '../../assets/sitelogo.png'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <div className='flex w-full bg-navbar-gray items-center justify-center overflow-x-hidden'>

     <div className="logo py-10 ml-5" >
      <img src={logo} className='w-2/5'></img>
     </div>

<nav>
  <ul className='flex gap-10 max-[860px]:flex-col max-[860px]:gap-0 overflow-hidden'>
   <li className='text-text-gray text-xl font-medium hover:text-text-red cursor-pointer relative max-[860px]:text-lg'>
   <Link to='/'  >Home</Link>   </li>
   
  </ul>
</nav>


     

    </div>
  )
}

export default Navbar2
