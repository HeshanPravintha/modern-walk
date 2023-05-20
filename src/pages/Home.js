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
        <div className="card-row">
        <ClotheCard 
        title='Mens Cotton Jacket'
        imageUrl='https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg'
        color="primary-color"
        price='22'
        description='Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...'
        />
        <ClotheCard 
        title='Mens Cotton Jacket'
        imageUrl='https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg'
        color="secondary-color"
        price='22'
        description='Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...'
        />
        <ClotheCard 
        title='Mens Cotton Jacket'
        imageUrl='https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg'
        color="primary-color"
        price='22'
        description='Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...'
        />
        <ClotheCard 
        title='Mens Cotton Jacket'
        imageUrl='https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg'
        color="secondary-color"
        price='22'
        description='Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...'
        />
        </div>
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
