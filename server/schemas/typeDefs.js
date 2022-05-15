const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
  }

  type Query {
    messages: [Message]!
    message(messageId: ID!): Message
    
  }

  type Mutation {
    addMessage(messageText: String!, messageAuthor: String!): Message
    removeMessage(MessageId: ID!): Message
  }
`;

module.exports = typeDefs;
