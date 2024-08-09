// Owner.js
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Owner = () => {
  const location = useLocation();
  const { username } = location.state;
  return (
    <div>
      <h5>welcome {username} !</h5>
      <div className=" inline-block border border-black"><h5>Register Shop ? </h5></div>
     <div className='position-absolute top-10 end-0 me-4'>
     <nav className='navbar navbar-expand-md bg-warning rounded-4'>
      <div className='collapse navbar-collapse'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0 fw-bolder'>
      <li className='nav-item'>
          <Link to="/" className='nav-link active px-3'>Home</Link>
      </li>
      <li className='nav-item'>
          <Link to="/logout" className='nav-link active px-3'>Shop</Link>
      </li>
      <li className='nav-item'>
          <Link to="/logout" className='nav-link active px-3'>Logout</Link>
      </li>
      </ul>
    </div>
        
        
      </nav>
     </div>
      
      
      

    </div>
  );
};

export default Owner;
