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

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'custFname':
        if (!value) error = 'First Name is required';
        break;
      case 'custLname':
        if (!value) error = 'Last Name is required';
        break;
      case 'address':
        if (!value) error = 'Address is required';
        break;
      case 'contactNo':
        if (!value) error = 'Contact Number is required';
        else if (!/^\d{10}$/.test(value)) error = 'Contact Number must be exactly 10 digits';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        break;
      case 'userName':
        if (!value) error = 'Username is required';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value)
        ) {
          error = 'Password must be at least 8 characters, with 1 special character, 1 number, 1 lowercase letter, and 1 uppercase letter';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === '';
  };

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
      validateField(name, value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      validateField(name, value);
    }
  };

  const validateForm = () => {
    let isValid = true;
    for (let key in formData) {
      if (typeof formData[key] === 'object') {
        for (let subKey in formData[key]) {
          isValid = validateField(subKey, formData[key][subKey]) && isValid;
        }
      } else {
        isValid = validateField(key, formData[key]) && isValid;
      }
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('https://localhost:7284/api/Users/insertCustomer', {
        custId: 0,
        userId: 0,
        ...formData,
      });
      console.log('Customer registration data:', response.data);
      setErrors({});
      setFormData({
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
      alert('Registration successful!');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrors({ form: err.response.data.message });
      } else {
        setErrors({ form: 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Customer Registration</h2>
              {errors.form && <p className="text-danger text-center">{errors.form}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">Username</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                    value={formData.user.userName}
                    onChange={handleChange}
                  />
                  {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                    id="password"
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={formData.user.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label className="form-check-label" htmlFor="showPassword">Show Password</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="custFname" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="custFname"
                    name="custFname"
                    className={`form-control ${errors.custFname ? 'is-invalid' : ''}`}
                    value={formData.custFname}
                    onChange={handleChange}
                  />
                  {errors.custFname && <div className="invalid-feedback">{errors.custFname}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="custLname" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="custLname"
                    name="custLname"
                    className={`form-control ${errors.custLname ? 'is-invalid' : ''}`}
                    value={formData.custLname}
                    onChange={handleChange}
                  />
                  {errors.custLname && <div className="invalid-feedback">{errors.custLname}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="contactNo" className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                  {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
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
