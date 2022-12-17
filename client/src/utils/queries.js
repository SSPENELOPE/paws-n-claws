import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      address
      city
      state
      zip
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      email
      address
      city
      state
      zip
    }
  }
`;


export const QUERY_APPOINTMENT = gql`
  query appointment($profileId: ID!) {
    appointment(profileId: $profileId) {
      collection {
        name
        start_time
        status
      }
    }
  }
`;