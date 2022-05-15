const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Rescue {
    _id: ID
    title: String
    rescueType: String
    suburb: String
    state: String
    website: String
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type Query {
    messages: [Message]!
    message(messageId: ID!): Message
    rescues: [Rescue]!
    users: [User]!
  }

  type Mutation {
    addMessage(messageText: String!, messageAuthor: String!): Message
    removeMessage(MessageId: ID!): Message
    addRescue(title: String!, rescueType: String!, suburb: String!, state: String!, website: String!): Rescue
    removeRescue (RescueId: ID!): Rescue
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;