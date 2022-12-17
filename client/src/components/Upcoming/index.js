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

    const appointment = data?.appointment.collection[0] || {};
    const utc = appointment.start_time;
    const date = new Date(utc).toLocaleDateString();
    const time = new Date(utc).toLocaleTimeString();
    console.log(time)
    console.log(date)

    console.log(appointment);

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!appointment || appointment.status === "canceled") {
        return (
            <div className="d-flex flex-column">
                <h1 className="font">You have no upcoming appointments</h1>
                <Link to="/appointment/schedule" className="btn my-5 font2 text-center font3">Schedule Appointment</Link>
            </div>
        )
    }

    if (appointment === data?.appointment.collection[0]) {
        return (
            <div>
                <h1>Your Upcoming Appointments</h1>
                <div>
                    <ul>
                        <h5>{appointment.name}</h5>
                        <li>{date} @ {time}</li>
                    </ul>
                </div>
            </div>
        )
    }

    }

export default UpcomingAppointments;