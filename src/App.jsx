
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import { Link } from 'react-scroll'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Banner from './Components/Home/Banner'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Resgister from './Pages/Resgister'
import Footer from './Pages/Footer'
import ChatBotBtn from './Components/Home/ChatBot/ChatBotBtn'

function App() {
 

  return (
    <>
      <Router>
   
<Routes>



<Route path='/' element = {<Home/>}/>
<Route path='/login' element = {<Login/>}/>
<Route path='/register' element = {<Resgister/>}/>




</Routes>

<ChatBotBtn/>
<Footer/> 

      </Router>
      
    </>
  )
}

export default App
