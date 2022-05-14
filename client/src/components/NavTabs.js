import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#information"
          onClick={() => handlePageChange('information')}
          // Check to see if the currentPage is `Information`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'information' ? 'nav-link active' : 'nav-link'}
        >
          Information
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#messages"
          onClick={() => handlePageChange('messages')}
          // Check to see if the currentPage is `Messages`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'messages' ? 'nav-link active' : 'nav-link'}
        >
          Message Board
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#rescues"
          onClick={() => handlePageChange('rescues')}
          // Check to see if the currentPage is `Rescues`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'rescues' ? 'nav-link active' : 'nav-link'}
        >
          Rescue Groups
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('login')}
          // Check to see if the currentPage is `Login`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signUp"
          onClick={() => handlePageChange('signUp')}
          // Check to see if the currentPage is `Rescues`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'signUp' ? 'nav-link active' : 'nav-link'}
        >
          Sign-Up
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
