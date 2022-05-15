// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const rescueSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  title: { type: String, required: true },
  rescueType: { type: String, required: true },
  suburb: String,
  state: String,
  website: { type: String, required: true },
});

// Using mongoose.model() to compile a model based on the schema 'rescueSchema'
const Rescue = mongoose.model('Rescue', rescueSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a document
Rescue.create(
  {
    title: 'Squishies Flat Face Animal Rescue',
    rescueType: 'Brachycephalic',
    suburb: 'Wantirna',
    state: 'Victoria',
    website: 'https://www.squishiesrescue.org.au/',
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// Create a new instance with required title, rescue type and website properties
Rescue.create(
  { title: 'Fakey-Fake The Rescue Place', rescueType: 'Very cute but very sad animals', website: 'https://stormy-anchorage-52853.herokuapp.com/' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = Rescue;
