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
    <div className="box" id={id}>
      <img className="horse" src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{breed}</p>
      <p>{formatter.format(price)}</p>
      <button className="btnBuy" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

function HorseShop({ cartItems, setCartItems }) {
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const cartTotal = cartItems.length;
  const horseInfoData = [
    { id: 1, name: "Horse One", breed: "Quarter Horse", price: 4000, imageUrl: horse1Image },
    { id: 2, name: "Horse Two", breed: "Paint Horse", price: 4000, imageUrl: horse1Image },
    { id: 3, name: "Horse Three", breed: "Appaloosa", price: 4000, imageUrl: horse1Image },
    { id: 4, name: "Horse Four", breed: "Appaloosa", price: 4000, imageUrl: horse1Image },
    { id: 5, name: "Horse Five", breed: "Appaloosa", price: 4000, imageUrl: horse1Image },
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
        <div className="horseCard">
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
