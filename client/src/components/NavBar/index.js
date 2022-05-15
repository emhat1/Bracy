/* import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../../utils/auth';
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

 */
// Importing external dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Importing internal dependencies
import Auth from '../../utils/auth';


function NavTabs({ currentPage, handlePageChange }) {
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
    </ul>
  );
}

export default NavTabs;