import React from 'react'
import './CategoryButton.css'

const CategoryButton = ({ title, color }) => {
    const button = `button ${color}`;
    
  return (
    <button className={button}>{title}</button>
  )
}

export default CategoryButton