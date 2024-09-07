import React from 'react'
import Navbar from "./../../components/Navbar/navbar"
import HomeImg from "./House (2).png"
import "./Home.css"
import Footer from '../../Footer/Footer'

function home() {
  return (
    <div>
      <Navbar />
        <h1 className='title'>Home</h1>

        <img src={HomeImg} className='img'/>

        <Footer/>
    </div>
  )
}

export default home