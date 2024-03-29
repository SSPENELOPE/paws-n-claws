import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $address: String!, $city: String!, $state: String!, $zip: String!) {
    addProfile(
    name: $name, 
    email: $email, 
    password: $password,
    address: $address,
    city: $city,
    state: $state,
    zip: $zip,
    ) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($name: String!, $email: String!, $password: String!, $address: String!, $city: String!, $state: String!, $zip: String!) {
    updateProfile(
    name: $name, 
    email: $email, 
    password: $password,
    address: $address,
    city: $city,
    state: $state,
    zip: $zip,
    )  {
      token
      profile {
        _id
        name
      }
    }
  }
`;
