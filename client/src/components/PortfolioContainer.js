import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/home';
import Information from './pages/information';
import Login from './pages/login';
import Messages from './pages/messages';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Rescues from './pages/rescues';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Information') {
      return <Information />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Messages') {
        return <Messages />;
    }
    if (currentPage === 'Profile') {
        return <Profile />;
    }
    if (currentPage === 'Signup') {
        return <Signup />;
    }
    if (currentPage === 'Rescues') {
        return <Rescues />;
    }
    return <NoMatch />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
