import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { InlineWidget } from "react-calendly";
import Auth from '../../utils/auth';
import { QUERY_SINGLE_PROFILE } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Scheduler() {

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

    return (
        <div style={{backgroundColor: "cornsilk"}} className="profileBody">
            <Header />
            <InlineWidget 
                className="h-100 w-100"
                prefill={{
                    email: profile.email,
                    name: profile.name,
                    location: profile.address + "," + " " + profile.city + "," + " " + profile.state  + " " + profile.zip,
                  }}
                pageSettings={{
                    backgroundColor: 'black',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: 'white'
                }} url="https://calendly.com/pawsnclawspetcare" />
                <Footer />
        </div>
    );
}

export default Scheduler;