// Importing external dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Importing internal dependencies
import Home from './components/pages/Home';
import Information from './components/pages/Information';
import NoMatch from './components/pages/NoMatch';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Messages from './components/pages/Messages';
import Profile from './components/pages/Profile';
import Rescues from './components/pages/Rescues';
import Header from './components/Header';
import Footer from './components/Footer';


//import PortfolioContainer from './components';
import NavBar from './components/NavBar';

//Connecting to database
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Setting tokens
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

// Stripe
/*const Donation = () => (
  <section>
    <div className="donation">
      <img
        src="https://res.cloudinary.com/petrescue/image/upload/h_248,w_333,c_pad/petrescue-production-s3/uploads/group/avatar/10033/Squishies_Flat_Faced_Animal_Rescue_Logo.png"
        alt="Squishies Flat Faced Animal Rescue"
      />
      <div className="description">
      <h3>A $10 donation to Squishies Flat Faced Animal Rescue</h3>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Donate
      </button>
    </form>
  </section>
);

const Note = ({ note }) => (
  <section>
    <p>{note}</p>
  </section>
);*/

// export default function App() {
// const [note, setNote] = useState("");
//  useEffect(() => {
//    // Check to see if this is a redirect back from Checkout
//    const query = new URLSearchParams(window.location.search);
//
//    if (query.get("success")) {
//      setNote("Donation made! Thank you for improving an animal's life");
//    }
//
//    if (query.get("canceled")) {
//      setNote(
//        "Donation canceled - feel free to donate when you're ready."
//      );
//    }
//  }, []);
//
//  return note ? (
//    <Note note={note} />
//  ) : (
//    <Donation />
//  );



function App() {
/*   return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
      </BrowserRouter>
   //</ApolloProvider>
  ); */

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
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
                path="/Profile" 
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
      </BrowserRouter>
    </ApolloProvider>
  )
};

export default App;

