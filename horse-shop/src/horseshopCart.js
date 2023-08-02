import React from 'react';
import './horse-shop.css';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
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
