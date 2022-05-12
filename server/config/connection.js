const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/messages',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rescues',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
