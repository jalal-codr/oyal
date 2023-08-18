import { useState } from 'react'
import './App.css'
import Signin from './Components/Signin'
import Home from './Components/Home'
import About from './Components/About'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (<>
  <Nav/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </div>
        <Footer/>
  </>)
}

export default App