import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import CustRegistration from './components/CustRegistration';
import OwnerRegistration from './components/OwnerRegistration';
import LogoutComp from './components/LogoutComp';
import Owner from './components/Owner';
import Customer from './components/Customer';
// import Admin from './components/Admin';
import { useSelector } from 'react-redux';
import Admin from './components/Admin';


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

  //myState refering intial state of logged store action is loggedIn:false
  const myState=useSelector((state)=>state.logged.loggedIn)

  return (
    <>
     <Router>
{!myState && <Navbar/>}
<div className="container mt-3" style={{ minHeight: 'calc(100vh - 120px)' }}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products addToCart={addToCart} />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/admin" element={<Admin/>}/> */}
    <Route path="/register-customer" element={<CustRegistration />} />
    <Route path="/register-owner" element={<OwnerRegistration />} />
    <Route path="/owner" element={<Owner />} />
    <Route path="/customer" element={<Customer/>} />
    <Route path="/logout" element={<LogoutComp/>}/>
    <Route path="/admin" element={<Admin/>}/>
    
  </Routes>
</div>
<Footer />
</Router>
    </>
   
  );
};

export default App;
