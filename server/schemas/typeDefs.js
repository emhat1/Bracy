const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
  }

  type Rescue {
    _id: ID
    title: String
    rescueType: String
    suburb: String
    state: String
    website: String
  }

  type Query {
    messages: [Message]!
    message(messageId: ID!): Message
  }

  type Mutation {
    addMessage(messageText: String!, messageAuthor: String!): Message
    removeMessage(MessageId: ID!): Message
    addRescue(title: String!, rescueType: String!, suburb: String!, state: String!, website: String!): Rescue
    removeRescue (RescueId: ID!): Rescue
  }
`;

module.exports = typeDefs;
