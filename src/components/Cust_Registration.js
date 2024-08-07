import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Cust_Registration = () => {
  const [formData, setFormData] = useState({
    custFname: '',
    custLname: '',
    address: '',
    contactNo: '',
    email: '',
    user: {
      userName: '',
      password: '',
      roleId: 3,
    },
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.user) {
      setFormData({
        ...formData,
        user: {
          ...formData.user,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.custFname || !formData.custLname || !formData.address || !formData.contactNo || !formData.email || !formData.user.userName || !formData.user.password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('https://localhost:7196/api/Users/insertCustomer', {
        custId: 0,
        userId: 0,
        ...formData,
      });
      console.log('Customer registration data:', response.data);
      setSuccess('Registration successful!');
      setError('');
      setFormData({
        custFname: '',
        custLname: '',
        address: '',
        contactNo: '',
        email: '',
        user: {
          userName: '',
          password: '',
          roleId: 0,
        },
      });
    } catch (err) {
      if(err.response && err.response.status===400 ){
        setError(err.response.data.message);
      }
      else{
      setError('Registration failed. Please try again.');
    }
      setSuccess('');
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Customer Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="custFname" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="custFname"
                    name="custFname"
                    className="form-control"
                    value={formData.custFname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="custLname" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="custLname"
                    name="custLname"
                    className="form-control"
                    value={formData.custLname}
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
                  <label htmlFor="userName" className="form-label">Username</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    className="form-control"
                    value={formData.user.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={formData.user.password}
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

export default Cust_Registration;
