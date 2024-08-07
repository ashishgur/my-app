// src/components/Cart.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cart.map((product, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {product.name} - ${product.price.toFixed(2)}
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5 className="text-end">Total Price: ${totalPrice.toFixed(2)}</h5>
        </div>
      )}
    </div>
  );
};

export default Cart;
