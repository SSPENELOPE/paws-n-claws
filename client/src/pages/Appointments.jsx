import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { InlineWidget } from "react-calendly";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import dogTrainer from '../assets/images/dogTrainer.webp';
import puppies from '../assets/images/puppies.jpg';
import fortMill from '../assets/images/fortMill.jpg'


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
                    <div className="d-flex flex-column m-5">

                        <div className="d-flex flex-row appt">
                            <div className="homesection">
                                <img src={puppies} />
                            </div>
                            <div className="homesection text-center flex-wrap">
                                <h1 className="font2">Appointments</h1>
                                <div className="d-flex justify-content-around h-100 flex-row">
                                    <div className="d-flex flex-column justify-content-center w-50">
                                        <h3><FontAwesomeIcon icon={faBone} /> Availability <FontAwesomeIcon icon={faBone} /></h3>
                                        <p>Don't worry about our availability, we got you covered! We are available 7 days a week to ensure your animal is taken care of. And yes, this does include holidays! 
                                        </p>
                                    </div>
                                    <div  className="d-flex flex-column justify-content-center w-40">
                                        <Link 
                                        to="/login"
                                        className="btn font apptBtn"
                                        >Login to book appointment</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="d-flex flex-row justify-content-center">
                            <div className="apptSection text-center flex-wrap services p-5">
                                <h1 className="font"><u>Areas We Service</u></h1>
                                <p className="paragraph">We apologize for any inconvience but we are only service the south Charlotte suburb and metro area</p>
                                &nbsp;
                                <div>
                                    <h3>Here are some of the services we offer!</h3>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>Dog Walking</li>
                                        <li>Overnight Stays with your pet</li>
                                        <li>Feeding and Bathroom Breaks</li>
                                    </ul>
                                </div>
                                &nbsp;
                                <h6>Click here to get full list of our pricing and services!</h6>
                            </div>
                            <div className="apptSection">
                                <img src={fortMill} />
                            </div>
                            <div className="apptSection2">
                                <h1>Text here soon</h1>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default Appointment;