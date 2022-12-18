import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import puppies from '../assets/images/puppies.jpg';
import fortMill from '../assets/images/fortMill.jpg'
import romarepark from '../assets/images/romarepark.jpg'


const Appointment = () => {

    return (
        <div>
            <Header />
            <div>
                {/* Wrapper for both page Sections */}
                <div className="d-flex flex-column m-5">

                   {/*  Availability Page Section */}
                    <div className="d-flex flex-row appt">
                        <div className="homesection">
                            <img src={puppies} />
                        </div>
                        <div className="homesection text-center flex-wrap">
                            <h1 className="font2">Appointments</h1>
                            <div className="h-100 avail">
                                <div className="d-flex flex-column justify-content-center p-4 widthDiv">
                                    <h3><FontAwesomeIcon icon={faBone} /> Availability <FontAwesomeIcon icon={faBone} /></h3>
                                    <p>Don't worry about our availability, we got you covered! We are available 7 days a week to ensure your animal is taken care of. And yes, this does include holidays!
                                    </p>
                                </div>

                                {/* If the user is logged in render the link to the schedule component */}
                                <div className="d-flex flex-column justify-content-center w-40">
                                    {Auth.loggedIn() ? (
                                        <Link
                                            to="/appointment/schedule"
                                            className="btn font apptBtn"
                                            >Schedule an appointment</Link>
                                    ) : (
                                    /* Else render link to the login component */
                                        <Link
                                        to="/login"
                                    ><h3 className="btn font apptBtn">Login to book appointment</h3></Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;

                   {/*  Areas Serviced page section */}
                    <div className="apptWrapper">
                        <div className="apptSection">
                            <img src={fortMill} />
                        </div>

                        <div className="apptSection text-center flex-wrap services p-5">
                            <h1 className="font"><FontAwesomeIcon icon={faLocationDot} /><u>Areas We Service</u><FontAwesomeIcon icon={faLocationDot} /></h1>
                            <p className="paragraph">We apologize for any inconvience but we are currently only servicing the south Charlotte Suburb and Metro Area</p>
                            &nbsp;
                            <div>
                                <h3>Areas:</h3>
                                <ul className="list-unstyled d-flex flex-column">
                                    <div className="areaList">
                                        <li className="areas font">Ballantyne</li>
                                        <li className="areas font">Myers Park</li>
                                        <li className="areas font">Uptown Charlotte</li>
                                    </div>
                                    <div className="areaList">
                                        <li className="areas font">South Park</li>
                                        <li className="areas font">Dillworth</li>
                                        <li className="areas font">Fort Mill</li>
                                        <li className="areas font">Lake Wylie</li>
                                    </div>
                                </ul>
                            </div>
                            &nbsp;
                            <h6>If your not sure we service your area, feel free to <Link to="#">Contact Us</Link></h6>
                        </div>
                       
                        <div className="apptSection2">
                        <img src={romarepark} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Appointment;