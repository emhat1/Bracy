import React from 'react';
import Home from './home.js';
import Login from './login';
import Information from './information';
import Rescues from './rescues';
import Navbar from './navBar.js';
import Messages from './messages.js';
import Signup from './signup.js';
import NoMatch from './NoMatch.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function RouteConfig() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<Home /> }/>
        <Route exact path='/login' element={<Login />  }/>
        <Route path='/information' element={<Information /> }/>
        <Route path='/rescues' element={<Rescues /> }/>
        <Route path='/messages' element={<Messages /> }/>
        <Route path='/signup' element={<Signup /> }/>
        <Route path='*' element={<NoMatch /> }/>

      </Routes>

    </Router>
  )
}


export default RouteConfig;