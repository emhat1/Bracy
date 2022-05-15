const { AuthenticationError } = require('apollo-server-express');
const { Users, Message, Rescue } = require('../models');
const User = require('../models/Users');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return Users.find();
    },
/*     user: async (parent, { username }) => {
      return User.findOne({ username }).populate('messages');
    }, */
    messages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Message.find(params).sort({ createdAt: -1 });
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },
    rescues: async (parent, {}) => {
      return await Rescue.find( { } );
    },
  },
  Mutation: {
    addUser: async (_, { email, password, firstName, lastName }) => {
      const user = new Users({
        email, password, firstName, lastName
      });
      const userDoc = await user.save();
      if ( userDoc ) {
        return {
          token: Buffer.from( email ).toString( 'base64' ),
          user,
        }
      }
    },
  }
};

module.exports = resolvers;