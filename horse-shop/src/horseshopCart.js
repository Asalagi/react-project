import React from 'react';
import { Link } from 'react-router-dom';
import './horse-shop.css';

const ShoppingCart = ({ cartItems }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <header class="header">
        <h1>Wishlist Horse Cart</h1>
        <p>The perfect horse is waiting for you.</p>
      </header>
      <div class="container">
        <div class="cartContent">
          <div class="cartContentTitle">
            <h2>Cart Items</h2>
          </div>
          <div class="cartContentItem">
            {cartItems.map((item) => (
              <div class="cartHorseCard" key={item.id}>
                <img class="cartImage" src={item.imageUrl} alt={item.name} />
                <div class="cartContentItemText">
                  <h4>{item.name}</h4>
                  <p>{item.breed}</p>
                </div>
                 <div class="cartContentItemPrice">
                    <p>{formatter.format(item.price)}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
        <div class="backLink">
          <Link to="/horseshop">
            <button class="btnShop">Back to Shop</button>
          </Link>
        </div>
        <div class="summary">
          <div class="summaryTitle">
            <h2>Cart Summary</h2>
          </div>
          <div class="summaryBody">
            <p>({cartItems.length}) Items <br /> Total: {formatter.format(cartTotal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
