import React from 'react'
import './CategoryButton.css'
import { Link } from 'react-router-dom'

const CategoryButton = ({ title, color,url }) => {
    const button = `button ${color}`;
    
  return (
    <Link to={url}>
    <button className={button}>{title}</button>
    </Link>
  )
}

export default CategoryButton