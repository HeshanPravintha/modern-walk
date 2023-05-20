import React from "react";
import NavBar from "../components/NavBar";
import ClotheCard from "../components/ClotheCard";
import '../App.css'
import CategoryButton from "../components/CategoryButton";


function Home() {
  return (
    <>
      <NavBar />
      <div className="maindiv">
        <h3>Flash Sale</h3>
        <ClotheCard 
        title='Heshan'
        imageUrl='https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg'
        price='22$'
        description='Hellooooooooo'
        />
        <h3>Categories</h3>
        <div className="category-button-container">
        <CategoryButton
        title="Men's Clothing" 
        color="primary-color"
        />
        <CategoryButton
        title="Women's Clothing" 
        color="secondary-color"
        />
        </div>
        
      </div>
    </>
  );
}

export default Home;
