// src/components/About.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Our mission is to provide the best products and services to our customers, ensuring quality and satisfaction at every step.
              </p>
              <h5 className="card-title mt-4">Our Vision</h5>
              <p className="card-text">
                We envision a world where our products and services bring joy and convenience to people's lives, helping them achieve their goals.
              </p>
              <h5 className="card-title mt-4">Our Team</h5>
              <p className="card-text">
                Our team is comprised of dedicated professionals who are passionate about what they do. We strive for excellence and are committed to delivering outstanding value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
