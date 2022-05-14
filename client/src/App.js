// Importing external dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Importing internal dependencies
import Home from './pages/Home';
import Detail from './pages/Information';
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
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/messages" 
                element={<Messages />}
              />
              <Route 
                path="/rescues" 
                element={<Rescues />}
              />
              <Route 
                path="/information" 
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

