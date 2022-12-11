import React from 'react';
import { Navigate ,useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {

/* const profileData = Auth.getProfile()

const { loading, error, data } = useQuery(
  QUERY_SINGLE_PROFILE,
   {
    variables: profileData._id,
  }
)

if (loading) {
  return (
    <div>Loading...</div>
  )
} 

if (error) {
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  )
}

return (
  <div>
    <h1>Welcome to your profile {data.name}</h1>
  </div>
) */

  const profileId = Auth.getProfile().data._id;
 /*  const { profileId } = useParams(); */

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    QUERY_SINGLE_PROFILE,
    {
      variables: {profileId: profileId},
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  const you = Auth.getProfile().data.name;
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return (
      <h1>Welcome {profileId.data._id}</h1>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      
      <h4>
       You need  to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        Welcome {profile.name}
      </h2>
    </div>
  );
};

export default Profile;
