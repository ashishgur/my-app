import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginTxt,setloginTxt]=useState('Login');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      
      const response = await fetch('https://localhost:7196/api/Users/userValidatingService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: username, password: password }), // Adjusted to match expected request body
      });

      const data = await response.json();

      console.log('Response data:', data); // Log the entire response object for debugging

      if (response.ok) {
        alert(JSON.stringify(data))
        setloginTxt('Logout');

        // Check roleId and navigate accordingly
        switch (data.roleId)  {
          case 2:
            navigate('/owner'); // Redirect to owner component
            break;
          case 3:
            navigate('/customer'); // Redirect to customer component
            break;
          default:
            setError('Unexpected role.');
            break;
        }
      } else {
        // Handle server errors
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred.');
    } finally {
      // Reset fields
      setUsername('');
      setPassword('');
    }
  };
      

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">{loginTxt}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/register-customer" className="btn btn-link">
                  Register as Customer
                </Link>
              </div>
              <div className="mt-3 text-center">
                <Link to="/register-owner" className="btn btn-link">
                  Register as Shop Owner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
