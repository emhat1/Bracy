// Importing external dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Importing internal dependencies
import Auth from '../../utils/auth'; 


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Squishy Faces</h1>
        <p className="m-0">The joy and pain of being created adorable</p>
      </div>
      <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Profile">
                Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/Signup">
                Signup
              </Link>
            </>
        )}
      </div>
    </header>
  );
};

export default Header;
