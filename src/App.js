import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import other pages when you have them
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes like this as needed */}
         <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
}

export default App;
