import React from 'react';
 import { Routes, Route, Link } from 'react-router-dom';
// import Owner from './Owner'; // Owners management component
// import Categories from './Categories'; // Add Category component
// import Feedback from './Feedback'; // Feedback viewing component

const Admin = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Admin-specific navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Manage Owners</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Add Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">View Feedback</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Admin-specific routes */}
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes> */}
    </div>
  );
};

const Dashboard = () => (
  <div>
    <h3>Welcome to the Admin Dashboard</h3>
    <p>Use the navigation links to manage the application.</p>
  </div>
);

export default Admin;