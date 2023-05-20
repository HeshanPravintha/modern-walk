<<<<<<< HEAD
import React from "react";
import "./ClotheCard.css";


const ClotheCard = ({ title, imageUrl, price, description }) => {
  return (
    <div style={{  margin :0, }}>
      <div classname="card-title" className="container">
        <h3>{title}</h3>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      
      <div style={{ color: "#d9d8d4 "}} >
        <h3 >${price}</h3>
      </div>
      <div classname="card-description">
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default ClotheCard;
=======
import React from 'react'

function ClotheCard() {
  return (
    <div>ClotheCard</div>
  )
}

export default ClotheCard
>>>>>>> bbad7428a7576fb20b4aa9a5495126c1801c9acb
