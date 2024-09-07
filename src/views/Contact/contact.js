import React from 'react'
import Navbar from './../../components/Navbar/navbar'
import ContactImg from "./Contact us-amico.png"
import "./Contact.css"
import Footer from '../../Footer/Footer'

function contact() {
  return (
    <div>
      <Navbar />
        <h1 className='title'>Contact</h1>
        <img src={ContactImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default contact