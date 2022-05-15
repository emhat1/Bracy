// Import the express package
const express = require('express');
const cors = require('cors');


// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth')

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Initialise the app variable to the value of express()
const app = express();

const PORT = 1984;

// Setting up Stripe
// REMEMBER TO PUT IN PROPER SECRET sk-test-etc key before deploying to Heroku!!
const stripe = require('stripe')('sk_test_blahBLAHblahPSK');
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'pr_10',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});
app.listen(4242, () => console.log('Running on port 4242'));

// Initialise the server variable as a new ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Middleware: parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// If in production, serve client/build as static assets
//if (process.env.NODE_ENV === 'production') {
  console.log('asd')
  app.use(express.static(path.join(__dirname, '../client/build')));
// }


// app.use( express.static( '../client/public/') );

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
}); */

// #CREATE: a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

// call the async function to start the server
startApolloServer(typeDefs, resolvers);
/* 
// connect databases
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
 */