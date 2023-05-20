import React from "react";
import NavBar from "../components/NavBar";
import ClotheCard from "../components/ClotheCardMen";
import '../App.css'

function MensClothing() {
  return (
    <>
      <NavBar />
      <div className="maindiv">
        <h2 className="mens-clothing-right-title">Men's Clothing</h2>
        <div className="mens-clothing-card-row">
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
          <ClotheCard
            title="Mens Cotton Jacket"
            imageUrl="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg"
            color="primary-color"
            price="22"
            description="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."
          />
        </div>
      </div>
    </>
  );
}

export default MensClothing;
