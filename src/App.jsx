
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home'
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Resgister from './Pages/Resgister'
function App() {
 

  return (
    <>
      <Router>
      <Navbar/>
<Routes>

<Route path='/' element = {<Home/>}/>
<Route path='/product' element = {<Product/>}/>
<Route path='/contact' element = {<Contact/>}/>
<Route path='/login' element = {<Login/>}/>
<Route path='/register' element = {<Resgister/>}/>




</Routes>



      </Router>
      
    </>
  )
}

export default App
