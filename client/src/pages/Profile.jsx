import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import ProfileData from '../components/ProfileData';
import Appointment from './Appointments';
import { InlineWidget } from "react-calendly";

const Profile = () => {

  const profileId = Auth.getProfile().data._id;

  const [page, setPage] = useState("appointment");
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    QUERY_SINGLE_PROFILE,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.profile || {};
  const renderPage = function() {
    switch(page){
      case "profile": 
        return <ProfileData profile={profile}/>;
      case "appointment": 
      return (
        <div>
          <h2>Schedule an appointment now!</h2>
          <InlineWidget pageSettings={{
           backgroundColor: 'black',
           hideEventTypeDetails: false,
           hideLandingPageDetails: false,
           primaryColor: '00a2ff',
           textColor: 'white'
       }} url="https://calendly.com/pawsnclawspetcare" />
      </div>

          )
          
      case "edit": 
        /* return <Edit /> */
    }
  }

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && profileId) {
    return (
      <div>
        <Header />
        <div className="d-flex flex-column profile">
          <div className="jumbotron p-5 d-flex flex-row profileSection justify-content-around">
            <div>
              <FontAwesomeIcon icon={faDog} size="6x" />
            </div>
            <div>
              <h1 className="font display-4">Hello {profile.name}!</h1>
              <p className="lead">Welcome to your Paws N' Claws Pet Care profile</p>
              <hr className="my-4"></hr>
            </div>
            <div>
              <FontAwesomeIcon icon={faDog} size="6x" />
            </div>
          </div>
          <div className="p-5 d-flex flex-row profileSection">
            <div className="btn-group-vertical d-flex flex-column">
              <button onClick={() => setPage("profile")} className="btn profileBtn font2 my-3">My Profile</button>
              <button className="btn profileBtn font2 my-3">Button</button>
              <button className="btn profileBtn font2 my-3">Button</button>
              <button className="btn profileBtn font2 my-3">Button</button>
            </div>
            <div>
              {renderPage()}
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name && !Auth.loggedIn()) {
    return (

      <h4>
        You need  to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
};

export default Profile;
