import React from 'react';
import Home from './Home';
import Login from './Login';
import Information from './Information';
import Rescues from './Rescues';
import Profile from './Profile';
import Messages from './Messages.js';
import Signup from './Signp.js';
import NoMatch from './NoMatch.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home /> }/>
        <Route path='/Information' element={<Information /> }/>
        <Route path='/Rescues' element={<Rescues /> }/>
        <Route path='/Messages' element={<Messages /> }/>
        <Route exact path='/Login' element={<Login />  }/>
        <Route path='/Signup' element={<Signup /> }/>
        <Route path='/Profile' element={<Profile /> }/>
        <Route path='*' element={<NoMatch /> }/>

      </Routes>

    </Router>
  )
}


export default RouteConfig;