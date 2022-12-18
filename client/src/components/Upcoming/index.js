import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_APPOINTMENT } from "../../utils/queries";
import Auth from '../../utils/auth';

const UpcomingAppointments = (profile) => {


    const profileId = Auth.getProfile().data._id;

    const { loading, data } = useQuery(
        QUERY_APPOINTMENT,
        {
          variables: { profileId: profileId },
        }
      );


      const appointment = data?.appointment.collection;



    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (appointment.length === 0) {
        return (
            <div className="d-flex flex-column">
                <h1 className="font">You have no upcoming appointments</h1>
                <Link to="/appointment/schedule" className="btn my-5 font2 text-center font3">Schedule Appointment</Link>
            </div>
        )
    }

    if (appointment.length >= 1) {
        return (
            <div className="d-flex flex-column w-100">
                <h1 className="text-center">Your Upcoming Appointments</h1>
                <div className="d-flex flex-column flex-wrap">
                    {appointment.map((details, index) => {
                        const date = new Date(details.start_time).toLocaleDateString()
                        const time = new Date(details.start_time).toLocaleTimeString();
                        return (
                            <div key={index} className="d-flex flex-column w-50 flex-wrap my-2">
                                <h3 className="apptInfo">{details.name}</h3> 
                                <h3 className="apptInfo">{date} @ {time}</h3> 
                                <h4 className="apptInfo">{details.status}</h4> 
                                <div className="border-top"></div> 
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    }

export default UpcomingAppointments;