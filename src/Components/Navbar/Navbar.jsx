import React from 'react'
import "../../app.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/sitelogo.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='navbar-container overflow-x-hidden'>

     <div className="logo py-10 ml-5" >
      <img src={logo} className='w-2/5'></img>
     </div>

<nav>
  <ul className='flex gap-10 max-[860px]:flex-col max-[860px]:gap-0 overflow-hiddenhidden'>
   <li className='text-text-gray text-xl font-medium hover:text-text-red cursor-pointer relative max-[860px]:text-lg'>
   <Link to='/'>Home</Link>   </li>
   <li className='text-text-gray text-xl font-medium hover:text-text-red  cursor-pointer max-[860px]:text-lg'><Link to='/product'>Products</Link></li>
  
   <li className='text-text-gray text-xl font-medium hover:text-text-red  cursor-pointer max-[860px]:text-lg'><Link to='/contact'>Contact</Link></li>
  </ul>
</nav>

<div className="others">
  <button onClick={()=> navigate('/login')} className='text-text-gray text-xl font-medium px-8 py-3 bg-red-color rounded-lg hover:bg-red-500  max-[860px]:px-5 max-[860px]:py-2'>Login</button>
</div>
     
    </div>
  )
}

export default Navbar
