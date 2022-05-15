import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../utils/auth';
import { StyledNavbar } from './styles/Navbar.styled';

export default function Navbar() {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const [currentPage, setCurrentPage] = useState('Home');

    const navbarPages = [
                {
            title: 'Dashboard',
            link: '/dashboard',
        },
        {
            title: 'Create Workout',
            link: '/createWorkout',
        },
        {
            title: 'View Workouts',
            link: '/viewWorkouts',
        },
    ];

    return (
        <>
            <StyledNavbar>
                <ul className='navbarList'>
                    <li key='home' className={currentPage === 'Home' ? 'navbarLinkActive' : 'navbarLink'}>
                        <NavLink key='home' to='/' onClick={() => setCurrentPage('Home')}>
                            Home
                        </NavLink>
                    </li>

                    {navbarPages.map((page) => (
                        Auth.loggedIn() ? (
                            <li key={page.link} className={currentPage === page.title ? 'navbarLinkActive' : 'navbarLink'}>
                                <NavLink key={page.link} to={page.link} onClick={() => setCurrentPage(page.title)} >
                                    {page.title}
                                </NavLink>
                            </li>
                        ) : (
                            <li key={page.link}></li>
                        )
                    ))
                    }
                    <li key='login' className={currentPage === 'login' ? 'navbarLinkActive' : 'navbarLink'}>
                        {Auth.loggedIn() ? (
                            <NavLink to='/' onClick={logout}>
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink key='login' to='/login' onClick={() => setCurrentPage('login')}>
                                Login/Signup
                            </NavLink>
                        )}
                    </li>
                </ul>
            </StyledNavbar>
        </>
    );
}


/* // Importing external dependencies
import React from 'react';

// Importing internal dependencies
import Auth from '../../utils/auth';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#information"
          onClick={() => handlePageChange('Information')}
          // Check to see if the currentPage is `Information`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Information' ? 'nav-link active' : 'nav-link'}
        >
          Information
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#messages"
          onClick={() => handlePageChange('Messages')}
          // Check to see if the currentPage is `Messages`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Messages' ? 'nav-link active' : 'nav-link'}
        >
          Message Board
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#rescues"
          onClick={() => handlePageChange('Rescues')}
          // Check to see if the currentPage is `Rescues`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Rescues' ? 'nav-link active' : 'nav-link'}
        >
          Rescue Groups
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          // Check to see if the currentPage is `Login`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          // Check to see if the currentPage is `Signup`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Sign-Up
        </a>
      </li>



      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('Profile')}
          // Check to see if the currentPage is `Profile`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
        </li>
    </ul>
  );
}

export default NavTabs;
 */