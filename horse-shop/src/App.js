import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HorseShop from './horseshop';
import ShoppingCart from './horseshopCart';

function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/horseshop" element={<HorseShop />} /> 
          <Route path="/horseshopCart" element={<ShoppingCart />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;