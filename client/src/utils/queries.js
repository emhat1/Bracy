import { gql } from '@apollo/client';

export const QUERY_MESSAGES = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getMessages {
    messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getEmail {
    users {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;

export const QUERY_RESCUES = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getRescues {
    rescues {
      _id
      title
      rescueType
      suburb
      state
      website
    }
  }
`;
