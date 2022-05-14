import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
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
