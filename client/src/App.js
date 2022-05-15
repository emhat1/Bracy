// Importing external dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Importing internal dependencies
import Home from './pages/Home';
import Information from './pages/Information';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Rescues from './pages/Rescues';

// import Nav from './components/Nav';

//Connecting to database
const httpLink = createHttpLink({
  uri: '/graphql',
});

// COOKIES! OMNOMNOM
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Defining app
function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Thank you for your donation - you have made an animal's life better");
    }
    if (query.get("canceled")) {
      setMessage(
        "Donation canceled - feel free to donate at any time"
      );
    }
  }, []);
  return message ? (
    <Message message={message} />
  ) : (
    <SquishiesDonation />
  );

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/Login" 
                element={<Login />}
              />
              <Route 
                path="/Signup" 
                element={<Signup />}
              />
              <Route 
                path="/Profile/:username" 
                element={<Profile />}
              />
              <Route 
                path="/Messages" 
                element={<Messages />}
              />
              <Route 
                path="/Rescues" 
                element={<Rescues />}
              />
              <Route 
                path="/Information" 
                element={<Information />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

