// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Our company is dedicated to providing the best products and services. We are committed to quality and customer satisfaction.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-dark">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-dark">About</Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Email</a>
              </li>
              <li>
                <a href="#!" className="text-dark">LinkedIn</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 MyShop
      </div>
    </footer>
  );
};

export default Footer;
