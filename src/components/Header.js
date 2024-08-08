// src/components/Header.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {


    const searchBoxStyle = {
        width: '200px',  // Adjust width as needed
        marginRight: '10px'  // Space between search box and button
    };
    return (

        <header className="bg-success text-white py-3 shadow-lg">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="mb-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        GrocerEase
                    </h1>
                    <form className="d-flex ms-auto">  {/* Align form to the right */}
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={searchBoxStyle}
                        />
                        <button className="btn btn-light" type="submit">
                            amrut
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
