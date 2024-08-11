import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Owner_Registration = () => {
  const [formData, setFormData] = useState({
    ownerFname: '',
    ownerLname: '',
    address: '',
    adharNo: '',
    contactNo: '',
    email: '',
    status: false,
    user: {
      userName: '',
      password: '',
      roleId: 2
    },
  });

  const [errors, setErrors] = useState({
    ownerFname: '',
    ownerLname: '',
    address: '',
    adharNo: '',
    contactNo: '',
    email: '',
    userName: '',
    password: '',
    general: ''
  });

  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

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

  const handleAdharNoChange = (e) => {
    const value = e.target.value.replace(/\s+/g, '').slice(0, 16);
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
    setFormData({
      ...formData,
      adharNo: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation
    const contactNo = formData.contactNo.replace(/\D/g, ''); // Remove non-digit characters for validation
    if (!formData.ownerFname) newErrors.ownerFname = 'First name is required.';
    if (!formData.ownerLname) newErrors.ownerLname = 'Last name is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.adharNo) newErrors.adharNo = 'Aadhar number is required.';
    if (!contactNo || contactNo.length !== 10) newErrors.contactNo = 'Contact number must be 10 digits.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.user.userName) newErrors.userName = 'Username is required.';
    if (!formData.user.password) newErrors.password = 'Password is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('https://localhost:7284/api/Users/insertOwner', {
        ownerId: 0,
        userId: 0,
        ...formData,
        contactNo: contactNo, // Send only numeric contact number
      });
      
      console.log('Owner registration data:', response.data);
      setSuccess('Registration successful!');
      setErrors({}); // Clear errors on successful registration
      setFormData({
        ownerFname: '',
        ownerLname: '',
        address: '',
        adharNo: '',
        contactNo: '',
        email: '',
        status: false,
        user: {
          userName: '',
          password: '',
          roleId: 2,
        },
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrors({ general: err.response.data.message });
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
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
                {errors.general && <p className="text-danger">{errors.general}</p>}
                
                <div className="mb-3">
                  {errors.userName && <p className="text-danger">{errors.userName}</p>}
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
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                  <label htmlFor="user.password" className="form-label">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                    id="user.password"
                    name="user.password"
                    className="form-control"
                    value={formData.user.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="showPassword"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label className="form-check-label" htmlFor="showPassword">Show Password</label>
                  </div>
                </div>
                <div className="mb-3">
                  {errors.ownerFname && <p className="text-danger">{errors.ownerFname}</p>}
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
                  {errors.ownerLname && <p className="text-danger">{errors.ownerLname}</p>}
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
                  {errors.contactNo && <p className="text-danger">{errors.contactNo}</p>}
                  <label htmlFor="contactNo" className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    className="form-control"
                    value={formData.contactNo}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                </div>
                <div className="mb-3">
                  {errors.adharNo && <p className="text-danger">{errors.adharNo}</p>}
                  <label htmlFor="adharNo" className="form-label">Aadhar Number</label>
                  <input
                    type="text"
                    id="adharNo"
                    name="adharNo"
                    className="form-control"
                    value={formData.adharNo}
                    onChange={handleAdharNoChange}
                    maxLength="19" // 16 digits + 3 spaces
                    required
                  />
                </div>
                <div className="mb-3">
                  {errors.email && <p className="text-danger">{errors.email}</p>}
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
                  {errors.address && <p className="text-danger">{errors.address}</p>}
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
