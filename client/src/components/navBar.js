import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
export default function Navbar(){
    return(
      <nav className='navbar'>
        
          <Link className='link'  to='/'>Home</Link>
          <Link className='link' to='/information'>Information</Link>
          <Link className='link' to='/messages'>Messages</Link>
          <Link className='link' to='/rescues'>Rescues</Link>          
          <Link className='link' to='/login'>Login</Link>     
          
      </nav>
    )
}