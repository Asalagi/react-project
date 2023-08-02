import React from 'react';
import { Link } from 'react-router-dom';
import './horse-shop.css';
import horse1Image from './images/horse.jpg';

const HorseItem = ({ name, breed, imageUrl, addToCart }) => {
  return (
    <div className="box">
      <img className="horse" src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{breed}</p>
      <button className="btnBuy" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

function HorseShop({ cartItems, setCartItems }) {
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
      <header className="header">
        <h1>Welcome</h1>
        <p>This will be where horses can be bought</p>
        <div className="cart">
          <Link to="/horseshopCart">
            <button className="btnCart">Cart ({cartTotal})</button>
          </Link>
        </div>
      </header>
      <div className="outerBox">
        <div className="grid">
          {horseInfoData.map((horse, index) => (
            <HorseItem
              key={index}
              imageUrl={horse.imageUrl}
              name={horse.name}
              breed={horse.breed}
              addToCart={() => handleAddToCart(horse.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorseShop;
