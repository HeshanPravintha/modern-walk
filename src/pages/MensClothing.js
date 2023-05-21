import React from "react";
import NavBar from "../components/NavBar";
import ClotheCardMen from "../components/ClotheCardMen";
import '../App.css'

function MensClothing() {
  return (
    <>
      <NavBar />
      <div className="maindiv">
        <h2 className="mens-clothing-right-title">Men's Clothing</h2>
        <div className="mens-clothing-card-row">
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        <ClotheCardMen 
        color="primary-color"
        />
        </div>
      </div>
    </>
  );
}

export default MensClothing;
