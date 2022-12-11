import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { InlineWidget } from "react-calendly";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Appointment = () => {

    return (
        <div>
            <Header />
            <div>
                {Auth.loggedIn() ? (
                    <InlineWidget pageSettings={{
                    backgroundColor: 'black',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '00a2ff',
                    textColor: 'white'
                    }} url="https://calendly.com/pawsnclawspetcare" />

                ) : (
                    <div className="apptLogin">
                        <h1 >Please <Link to="/login">Login</Link> to schedule an appointment</h1>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default Appointment;