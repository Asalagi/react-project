import React, { useState } from 'react';
import './horse-shop.css';
import horse1Image from './images/horse.jpg'

const HorseItem = ({ name, breed, imageUrl, addToCart }) => {
  return (
    <div class="box">
      <img class="horse" src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{breed}</p>
      <button class="btnBuy" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

function HorseShop() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (name) => {
    const newItem = {
      name: name,
    };

    setCartItems([...cartItems, newItem]);
  };
  const cartTotal = cartItems.length;
  const horseInfoData = [
    { name: "Horse One", breed: "Quarter Horse", imageUrl: horse1Image }, 
    { name: "Horse Two", breed: "Paint Horse", imageUrl: horse1Image },
    { name: "Horse Three", breed: "Appaloosa", imageUrl: horse1Image },
    { name: "Horse Three", breed: "Appaloosa", imageUrl: horse1Image },
    { name: "Horse Three", breed: "Appaloosa", imageUrl: horse1Image },
  ];

  return (
    <div>
      <header class="header">
        <h1>Welcome</h1>
        <p>This will be where horses can be bought</p>
          <div class="cart">
            <button class="btnCart">Cart ({cartTotal})</button>
            </div>
      </header>
      <div class="outerBox">
      <div class="grid">
        {horseInfoData.map((horse, index) => (
          <HorseItem 
          key={index}
          imageUrl={horse.imageUrl}
          name={horse.name}
          breed={horse.breed}
          addToCart={() => handleAddToCart(horse.name)} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default HorseShop;