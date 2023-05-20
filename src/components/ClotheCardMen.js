import React, { useState, useEffect } from "react";
import './ClotheCardMen.css';
import axios from "axios";


const ClotheCardMen = ({ color }) => {
  const cardpricecontainer = `card-price-container ${color}`;
  // const [loading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/men's clothing",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      // .finally(() => setLoading(false));
  }, []);
  return (
    <div className="card-container">
      {data.map((product) => {
        return (
          <>
            <div className="card-title">{product.title}</div>
            <div>
              <img className="image-container" src={product.image} alt='#'/>
            </div>
            <div className={cardpricecontainer}>
              <div className="card-price">${product.price}</div>
              <div className="card-description">{product.description}</div>
            </div>
          </>
        )
      })}
    </div>
  );
};

export default ClotheCardMen;