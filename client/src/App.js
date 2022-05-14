// needs big work

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/home';
import Information from './components/pages/information';
import Profile from './components/pages/profile';
import NoMatch from './components/pages/noMatch';
import Login from './components/pages/login';
import Signup from './components/pages/signUp';
import Profile from './components/pages/profile';
import Rescues from './components/pages/rescues';
import PortfolioContainer from "./components/PortfolioContainer";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">



        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;




const App = () => <PortfolioContainer />;