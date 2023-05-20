import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className='title'>Modern Walk</h1>
        </Link>
        <div style={{ borderTop: "4px solid #d9d8d4 "}}></div>
    </div>
  )
}

export default NavBar