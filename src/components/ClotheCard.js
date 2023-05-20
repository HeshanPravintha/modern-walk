import React from "react";
import "./ClotheCard.css";


const ClotheCard = ({ title, imageUrl, price, description, color }) => {
  const cardpricecontainer = `card-price-container ${color}`;
  return (
    <div className="card-container">
    <div className="card-title"> 
      {title}
    </div>
    <div>
    <img className="image-container" src={imageUrl} />
    
    </div>
    <div className={cardpricecontainer}>
    <div className="card-price">
${price}
    </div>
    <div className="card-description">
{description}    
</div>
    </div>
    </div>
  );
};

export default ClotheCard;
