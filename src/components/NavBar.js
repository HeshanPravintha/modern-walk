import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/home'>
        <h1>Modern Walk</h1>
        </Link>
        <div style={{ borderTop: "4px solid #d9d8d4 "}}></div>
    </div>
  )
}

export default NavBar