import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className="navbar">
        <span className='heading'>Sweet🍬</span>

        <div className='links'>
          <Link to="/" className="links">
          Home
          </Link>

          <Link to="/about" className="links">
          About
          </Link>
          
          <Link to="/contact" className="links">
          Contact
          </Link>

        </div>
    </div>
  )
}

export default navbar