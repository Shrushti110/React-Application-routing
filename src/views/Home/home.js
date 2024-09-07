import React from 'react'
import Navbar from "./../../components/Navbar/navbar"
import HomeImg from "./House (2).png"
import "./Home.css"
import Footer from '../../Footer/Footer'
import  Toaster  from "react-hot-toast"

function home() {
  return (
    <div>
      <Navbar />
        <h1 className='title'>Home</h1>

        <img src={HomeImg} className='img'/>

        <button type="button" onClick={()=>{
          
        }}>
          Show Toast 
        </button>

        <Footer/>
    </div>
  )
}

export default home