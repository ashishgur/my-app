import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Owner_Registration = () => {
  const [formData, setFormData] = useState({
    ownerFname: '',
    ownerLname:'',
    address: '',
    adharNo: '',
    contactNo: '',
    email: '',
    status: false,
    user: {
      userName: '',
      password: '',
      roleId:2
    },
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      const nameParts = name.split('.');
      if (nameParts.length === 1) {
        setFormData({
          ...formData,
          [name]: value,
        });
      } else {
        setFormData({
          ...formData,
          [nameParts[0]]: {
            ...formData[nameParts[0]],
            [nameParts[1]]: value,
          },
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.ownerFname || 
      !formData.ownerLname || 
      !formData.address ||
      !formData.adharNo ||
      !formData.contactNo ||
      !formData.email ||
      !formData.user.userName ||
      !formData.user.password
    ) {
      setError('Please fill out all fields.');
      return;
    }
    var response="";
    try {

      response = await axios.post('https://localhost:7196/api/Users/insertOwner', {
        ownerId: 0,
        userId: 0,
        ...formData,
        
      });
      
      console.log('Owner registration data:', response.data);
      setSuccess('Registration successful!');
      setError('');
      setFormData({
        ownerFname: '',
        ownerLname:'',
        address: '',
        adharNo: '',
        contactNo: '',
        email: '',
        status: false,
        user: {
          userName: '',
          password: '',
          roleId: 0,
        },
      });
    } catch (err) {
      if(err.response && err.response.status===400){
        setError(err.response.data.message);
        
      }
      else{
      setError('Registration failed. Please try again.');
    }
      setSuccess('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Owner Registration</h2>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="user.userName" className="form-label">Username</label>
                  <input
                    type="text"
                    id="user.userName"
                    name="user.userName"
                    className="form-control"
                    value={formData.user.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user.password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="user.password"
                    name="user.password"
                    className="form-control"
                    value={formData.user.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ownerFname" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="ownerFname"
                    name="ownerFname"
                    className="form-control"
                    value={formData.ownerFname}
                    onChange={handleChange}
                    required
                  />
                </div>
               
                <div className="mb-3">
                  <label htmlFor="ownerLname" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="ownerLname"
                    name="ownerLname"
                    className="form-control"
                    value={formData.ownerLname}
                    onChange={handleChange}
                    required
                  />
                </div>
               
                
                <div className="mb-3">
                  <label htmlFor="contactNo" className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    className="form-control"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="adharNo" className="form-label">Aadhar Number</label>
                  <input
                    type="text"
                    id="adharNo"
                    name="adharNo"
                    className="form-control"
                    value={formData.adharNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    className="form-control"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner_Registration;
