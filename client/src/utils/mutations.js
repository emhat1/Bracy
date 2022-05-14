import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addPost($messageId: ID!, $postText: String!) {
    addPost(messageId: $messageId, postText: $postText) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const ADD_RESCUE = gql`
mutation addRescue(
  $title: String!
  $rescueType: String!
  $suburb: String!
  $state: String!
  $website: String!
) {
  addRescue(
    title: $title
    rescueType: $rescueType
    suburb: $suburb
    state: $state
    website: $website
  ) {
    token
    title {
      _id
    }
  }
}
`;

export const DELETE_RESCUE = gql`
mutation deleteRescue {
  id: ID!
}
`
