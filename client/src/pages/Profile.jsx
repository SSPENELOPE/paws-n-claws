import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import ProfileData from '../components/ProfileData';
import Upcoming from '../components/Upcoming';
import Modal from '../components/Modal';

const Profile = () => {

  // Set the pages natural state to display user information
  const [page, setPage] = useState("profile");
  const [openModal, setOpenModal] = useState(false);
  
  // Set a variable equal to the users profileId
  const profileId = Auth.getProfile().data._id;

  // run the query passing in the variable with the users profileId
  const { loading, data } = useQuery(
    QUERY_SINGLE_PROFILE,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is being returned from the query or return an empty object
  const profile = data?.profile || {};

  // Function to change the state of the page based on a "switch" statement
  const renderPage = function() {
    switch(page){
      case "profile": 
        return <ProfileData profile={profile} openModal={setOpenModal} />;
      case "appointment": 
      return <Upcoming profile={profile}/>
          
      case "edit": 
        /* return <Edit /> */
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need  to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }


  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && profileId) {
    /* console.log(Auth.getProfile().data._id) */
    return (
      <div className="profileBody">
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
          {openModal && <Modal profile={profile} closeModal={setOpenModal} />}
          <div className="p-5 d-flex flex-row profileSection">
            <div className="d-flex flex-column profileBtnPanel">
              <button onClick={() => setPage("profile")} className="btn profileBtn font2 my-3">My Information</button>
              <button onClick={() => setPage("appointment")} className="btn profileBtn font2 my-3">Upcoming Appointments</button>
              <button className="btn profileBtn font2 my-3">Button</button>
              <button className="btn profileBtn font2 my-3">Button</button>
            </div>
            <div className="d-flex profileComponent">
              {renderPage()}
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }

 

 
};

export default Profile;
