import React from "react";
import NavBar from "../components/NavBar";
import ClotheCardMen from "../components/ClotheCardMen";
import ClotheCardWomen from "../components/ClotheCardWomen"
import '../App.css'
import CategoryButton from "../components/CategoryButton";


function Home() {
  return (
    <>
      <NavBar />
      <div className="maindiv">
        <h3>Flash Sale</h3>
        <div className="card-row">
        <ClotheCardMen 
        
        color="primary-color"
        
        />
        <ClotheCardWomen 
        
        color="secondary-color"
        
        />
        <ClotheCardMen 
        
        color="primary-color"
        
        />
        <ClotheCardWomen 
        
        color="secondary-color"
        
        />
        </div>
        <h3>Categories</h3>
        <div className="category-button-container">
        <CategoryButton
        url="/mens-clothing"
        title="Men's Clothing" 
        color="primary-color"
        />
        <CategoryButton
        url="/womens-clothing"
        title="Women's Clothing" 
        color="secondary-color"
        />
        </div>
        
      </div>
    </>
  );
}

export default Home;
