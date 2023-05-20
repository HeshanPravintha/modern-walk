import React from 'react'
import './CategoryButtonMen.css'
import { Link } from 'react-router-dom'

const CategoryButton = ({ title, color,url }) => {
    const button = `button ${color}`;
    
  return (
    <Link to="./mens-clothing">
    <button className={button}>{title}</button>
    </Link>
  )
}

export default CategoryButton