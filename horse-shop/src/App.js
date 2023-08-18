import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorseShop from './horseshop';
import ShoppingCart from './horseshopCart';
import Genetics from "./genetics";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/horseshop"
            element={<HorseShop cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/horseshopCart"
            element={<ShoppingCart cartItems={cartItems} />}
          />
          <Route path="/genetics" element={<Genetics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
