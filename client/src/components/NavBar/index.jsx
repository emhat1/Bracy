// Importing external dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
 
// Importing internal dependencies
import Auth from '../../utils/auth';


function NavTabs({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Information" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Information
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Messages" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Message Board
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Rescues" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Rescue Organisations
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Login" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Signup" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
          Sign up
        </NavLink>
      </li>
      {
        Auth.loggedIn() ?
          <li className="nav-item">
            <NavLink to="/Profile" className={( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'}>
              Profile
            </NavLink>
          </li>
        :
          <></>
      }
      {
        Auth.loggedIn() ?
          <li className="nav-item">
            <NavLink to='/' onClick={logout}>
              Logout
            </NavLink>
          </li>
        :
          <></>
      }
    </ul>
  );
}

export default NavTabs;