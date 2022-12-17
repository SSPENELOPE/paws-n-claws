const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    address: String
    city: String
    state: String
    zip: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Collection {
    name: String
    start_time: String
    status: String
  }

  type Appointment {
   collection: [Collection]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    appointment(profileId: ID!): Appointment
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, address: String!, city: String!, state: String!, zip: String!): Auth
    login(email: String!, password: String!): Auth
    updateProfile(name: String!, email: String!, password: String!, address: String!, city: String!, state: String!, zip: String!): Auth
  }
`;

module.exports = typeDefs;