import React from 'react';
import Home from './home';
import Login from './login';
import Information from './information';
import Rescues from './rescues';
import Messages from './messages.js';
import Signup from './signUp.js';
import NoMatch from './noMatch.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function RouteConfig() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home /> }/>
        <Route path='/information' element={<Information /> }/>
        <Route path='/rescues' element={<Rescues /> }/>
        <Route path='/messages' element={<Messages /> }/>
        <Route exact path='/login' element={<Login />  }/>
        <Route path='/signUp' element={<Signup /> }/>
        <Route path='/profile' element={<Profile /> }/>
        <Route path='*' element={<NoMatch /> }/>

      </Routes>

    </Router>
  )
}


export default RouteConfig;