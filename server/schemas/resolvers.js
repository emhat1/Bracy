const { AuthenticationError } = require('apollo-server-express');
const { Users, Message, Rescue } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
/*     users: async () => {
      return User.find().populate('messages');
    },
    user: async (parent, { username }) => {
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
};

module.exports = resolvers;