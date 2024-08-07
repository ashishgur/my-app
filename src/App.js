import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import Cust_Registration from './components/Cust_Registration';
import OwnerRegistration from './components/OwnerRegistration';

import Owner from './components/Owner';
import Customer from './components/Customer';

const App = () => {
  // State to manage items in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

   // Function to remove a product from the cart by index
   const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-3" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-customer" element={<Cust_Registration />} />
          <Route path="/register-owner" element={<OwnerRegistration />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/customer" element={<Customer/>} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
