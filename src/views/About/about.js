import React from 'react'
import Navbar from './../../components/Navbar/navbar'
import AboutImg from "./about-us.jpg"
import "./About.css"
import Footer from '../../Footer/Footer'

function about() {
  return (
    <div>
      <Navbar />
        <h1 className='title'>About</h1>

        <img src={AboutImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default about