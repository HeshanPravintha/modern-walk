import React from 'react'
import './CategoryButtonWomen.css'
import { Link } from 'react-router-dom'

const CategoryButton = ({ title, color,url }) => {
    const button1 = `button ${color}`;
    
  return (
    <Link to="./womens-clothing">
    <button className={button1}>{title}</button>
    </Link>
  )
}

export default CategoryButton