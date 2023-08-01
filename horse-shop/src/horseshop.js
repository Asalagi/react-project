import React from 'react';
import horseImage from './images/horse.jpg';
import './horse-shop.css';

function HorseShop() {

  return (
    <div>
      <header class="header">
        <h1>Welcome</h1>
        <p>This will be where horses can be bought</p>
          <div class="cart"><button class="btn-cart">Cart (0) $0</button></div>
      </header>
      <div class="outer-box">
      <div class="box">
        <img class="horse" src={horseImage} alt="horse"></img>
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button class="buy-btn">Add to Cart</button>
      </div>
      <div class="box">
      <img class="horse" src={horseImage} alt="horse"></img>
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button class="buy-btn">Add to Cart</button>
      </div>
      <div class="box">
      <img class="horse" src={horseImage} alt="horse"></img>
        <h2>Horse Name</h2>
        <p>Horse info</p>
        <button class="buy-btn">Add to Cart</button>
      </div>
      </div>
    </div>
  );
}

export default HorseShop;