import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorseShop from './horseshop';
import ShoppingCart from './horseshopCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/horseshop" element={<HorseShop setCartItems={setCartItems} />} />
          <Route path="/horseshopCart" element={<ShoppingCart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
