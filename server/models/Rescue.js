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

module.exports = Rescue;