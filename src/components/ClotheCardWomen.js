import React, { useState, useEffect } from "react";
import "./ClotheCardWomen.css";
import axios from "axios";


const ClotheCardWomen = ({ title, imageUrl, price, description, color }) => {
    const cardpricecontainer = `card-price-container ${color}`;
    // const [loading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/women's clothing",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      // .finally(() => setLoading(false));
  }, []);
  return (
    <div className="card-container1">
      {data.map((product) => {
        return (
          <>
            <div className="card-title1">{product.title}</div>
            <div>
              <img className="image-container1" src={product.image} />
            </div>
            <div className={cardpricecontainer}>
              <div className="card-price1">${product.price}</div>
              <div className="card-description1">{product.description}</div>
            </div>
          </>
        )
      })}
    </div>
  );
};

export default ClotheCardWomen;