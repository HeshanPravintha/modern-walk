import React from "react";
import NavBar from "../components/NavBar";
import ClotheCardMen from "../components/ClotheCardMen";
import ClotheCardWomen from "../components/ClotheCardWomen"
import '../App.css'
import CategoryButtonMen from "../components/CategoryButtonMen";
import CategoryButtonWomen from "../components/CategoryButtonWomen";


function Home() {
  return (
    <>
      <NavBar />
      <div className="maindiv">
        <h2 className="flash-sale">Flash Sale</h2>
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
        <h2>Categories</h2>
        <div className="category-button-container">
        <CategoryButtonMen
        title="Men's Clothing" 
        color="primary-color"
        />
        <CategoryButtonWomen
        title="Women's Clothing" 
        color="secondary-color"
        />
        </div>
        
      </div>
    </>
  );
}

export default Home;
