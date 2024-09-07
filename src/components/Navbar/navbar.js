import React from 'react'
import "./navbar.css"

function navbar() {
  return (
    <div className="navbar">
        <span className='heading'>Sweet🍬</span>

        <div className='links'>
          <a href='/' className='links'>Home</a>
          <a href='/about' className='links'>About</a>
          <a href='/contact' className='links'>Contact</a>

        </div>
    </div>
  )
}

export default navbar