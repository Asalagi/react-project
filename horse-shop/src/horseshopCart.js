import React from 'react';
import './horse-shop.css';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <header className="header">
        <h1>Welcome</h1>
        <p>These are the horses you have added to your cart.</p>
      </header>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
