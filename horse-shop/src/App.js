import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route
import HorseShop from './horseshop';

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/horseshop" element={<HorseShop />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;