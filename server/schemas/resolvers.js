const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');
require('dotenv').config();
const fetch = require('node-fetch');


const resolvers = {
    Query: {
      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
      },
    
      appointment: async (parent, { profileId }) => {
          const profile = await Profile.findOne({ _id: profileId })
      /*     console.log("*********************************")
          console.log(profile);
          console.log("*********************************") */



       const token = process.env.BEARER_TOKEN;
          let url = 'https://api.calendly.com/scheduled_events?organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2F9e804a94-97f3-49f3-91f6-60628243be3c&invitee_email='+profile.email+'';

          let options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer '+ token
            }
          };
          
         const response = await fetch(url, options);
         const json = await response.json();
         console.log(json);
         return json; 
      }
    },

    Mutation: {
        addProfile: async (parent, { name, email, password, address, city, state, zip }) => {
          const profile = await Profile.create({ name, email, password, address, city, state, zip });
          const token = signToken(profile);
    
          return { token, profile };
        },
        login: async (parent, { email, password }) => {
          const profile = await Profile.findOne({ email });
    
          if (!profile) {
            throw new AuthenticationError('No profile with this email found!');
          }
    
          const correctPw = await profile.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(profile);
          return { token, profile };
        },
        updateProfile: async (parent, { name, email, password, address, city, state, zip }, context) => {
          if(context.user) {
            const profile = await Profile.findOneAndUpdate( { _id: context.user._id }, { name, email, password, address, city, state, zip });

            const token = signToken(profile);
            return { token, profile };
          }

        }
    }
    
};

module.exports = resolvers;