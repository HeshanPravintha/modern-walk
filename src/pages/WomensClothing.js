import React from 'react'
import NavBar from '../components/NavBar'
import ClotheCardWomen from '../components/ClotheCardWomen'

function WomensClothing() {
  return (
    <>
    <NavBar />
    <div className="maindiv">
      <h2 className='womens-clothing-right-title'>Women's Clothing</h2>
      <div className="womens-clothing-card-row">
      <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
        <ClotheCardWomen 
        color="secondary-color"
        />
      </div>
    </div>
  </>
  )
}

export default WomensClothing