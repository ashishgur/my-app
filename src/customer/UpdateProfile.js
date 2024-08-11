// src/components/UpdateProfileForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfileForm = () => {
  const [formData, setFormData] = useState({
    cust_fname: '',
    cust_lname: '',
    address: '',
    contact_no: '',
    email: '',
  });

  useEffect(() => {
    // Fetch the user's data from the API when the component mounts
    axios.get('/api/customer/profile') // Replace with your API endpoint
      .then(response => {
        setFormData(response.data); // Assuming the API returns an object with the correct structure
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to the update API
    axios.post('/api/customer/update', formData) // Replace with your API endpoint
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
        alert('Failed to update profile. Please try again.');
      });
  };

  return (
    <div className="container">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cust_fname" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="cust_fname"
            name="cust_fname"
            value={formData.cust_fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cust_lname" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="cust_lname"
            name="cust_lname"
            value={formData.cust_lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_no" className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contact_no"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
