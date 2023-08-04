import React from 'react';
import { Link } from 'react-router-dom';
import './horse-shop.css';
import horse1Image from './images/horse.jpg';

const HorseItem = ({ id, name, breed, price, imageUrl, addToCart }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div class="box" id={id}>
      <img class="horse" src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{breed}</p>
      <p>{formatter.format(price)}</p>
      <button class="btnBuy" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

function HorseShop({ cartItems, setCartItems }) {
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const cartTotal = cartItems.length;
  const horseInfoData = [
    { id: 1, name: "Horse One", breed: "Quarter Horse", price: 7500, imageUrl: horse1Image },
    { id: 2, name: "Horse Two", breed: "Paint Horse", price: 7500, imageUrl: horse1Image },
    { id: 3, name: "Horse Three", breed: "Appaloosa", price: 6500, imageUrl: horse1Image },
    { id: 4, name: "Horse Four", breed: "Thoroughbred", price: 7000, imageUrl: horse1Image },
    { id: 5, name: "Horse Five", breed: "Arabian", price: 5000, imageUrl: horse1Image },
  ];

  return (
    <div>
      <header class="header">
        <h1>Welcome to Wishlist Horses</h1>
        <p>Where your dream horse is just a click away.</p>
        <div class="cart">
          <Link to="/horseshopCart">
            <button class="btnCart">Cart ({cartTotal})</button>
          </Link>
        </div>
      </header>
      <div class="outerBox">
      <div class="outerBoxTitle"><h2>Available Horses</h2></div>
        <div class="horseCard">
          {        horseInfoData.map((horse) => (
          <HorseItem
            key={horse.id}
            id={horse.id}
            imageUrl={horse.imageUrl}
            name={horse.name}
            breed={horse.breed}
            price={horse.price}
            addToCart={() => handleAddToCart(horse)}
          />
        ))
      }
        </div>
       </div>
      </div>
  );
}

export default HorseShop;
