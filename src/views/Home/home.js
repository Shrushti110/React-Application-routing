import React from 'react'
import Navbar from "./../../components/Navbar/navbar"
import HomeImg from "./House (2).png"
import "./Home.css"
import Footer from '../../Footer/Footer'
import toast,{ Toaster } from 'react-hot-toast'

function home() {
  return (
    <div>
      <Navbar />
        <h1 className='title'>Home</h1>

        <img src={HomeImg} className='img'/>

        <button type="button"className='btn' onClick={()=>{
          toast.loading("Wait for few seconds...!")
        }}>
         Enter
        </button>

        <button type="button" className='btn' onClick={()=>{
          toast.dismiss()
          toast.success("Loaded Sucessfully",{
            icon:"🛸",
            duration:4000,
            style:{
              borderRadius:"20px",
              background:"hot-pink",
              color:"black"
            }
          })
        }}>
          Finish
        </button>

        <button type="button" className='btn' onClick={()=>{
          toast.dismiss()
          toast.error("Failed to connect")
        }}>
          Fail
        </button>

        <Footer/>
        <Toaster/>
    </div>
  )
}

export default home