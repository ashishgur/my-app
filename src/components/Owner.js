// Owner.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import  UserContext  from './Login.js';

const Owner = () => {
  //const{user}=useContext(UserContext);
  return (
    <div>
      <nav className='navbar navbar-expand-sm bg-light mb-3'>
        <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to="/logout" className='nav-link px-3'>Logout</Link>
        </li>
        </ul>
        
      </nav>
      
      <h1>Hi Owner</h1>

    </div>
  );
};

export default Owner;
