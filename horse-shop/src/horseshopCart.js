import React from 'react';
import { Link } from 'react-router-dom';
import './horse-shop.css';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <header className="header">
        <h1>Cart</h1>
        <p>These are the horses you have added to your cart.</p>
      </header>
        <div class="container">
        <Link to="/horseshop"><button class="btnShop">Back to Shop</button></Link>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div class="summary">
        <div class="summaryTitle"><h3>Cart Summary</h3></div>
        <div class="summaryBody"><p>({cartItems.length}) Items <br />
        Total: $0</p></div>
      </div>
    </div>
  </div>
  );
};

export default ShoppingCart;
