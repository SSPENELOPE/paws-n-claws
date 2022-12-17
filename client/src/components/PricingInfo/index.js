import React from "react";
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const PriceInfo = () => {
    return (
        <div className="d-flex flex-column p-3">
            <h1 className="priceInfo display-6"><u>More Details on our services</u></h1>
        <div className="d-flex flex-row justify-content-around flex-wrap">
            <div className="d-flex flex-column">
                <h3 className="silkFont">30 Minute Walk</h3>
                <ul>
                    <li>We reserve the right to cancel or reschedule this appointment in extreme weather circumstances</li>
                    <li>Leash is provided by Paws N Claws if you do not have one</li>
                    <li>Waste Bags provided for cleanup by Paws N Claws </li>
                </ul>
                </div>
         
            <div className="d-flex flex-column">
                <h3 className="silkFont">Overnight Stays With Us</h3>
                <ul>
                    <li>If your animal stays more than 36 hours you will be charged for a second day</li>
                    <li>Food should be provided by the customer</li>
                    <li>Treats Provided by us upon your approval </li>
                </ul>
            </div>

            <div className="d-flex flex-column">
                <h3 className="silkFont">Half Days</h3>
                <ul>
                    <li>If your animal stays more than 12 hours you will be charged the price of an overnight stay</li>
                    <li>Food should be provided by the customer</li>
                    <li>Treats Provided by us upon your approval </li>
                </ul>
            </div>
        </div>
        <div className="d-flex justify-content-end">
            {Auth.loggedIn() ? (
                 <Link to="appointment/schedule" className="mx-5 font2 display-6"><FontAwesomeIcon icon={faCircleArrowRight} />Schedule an appointment</Link>
            ) : (
                <button onClick={() => Auth.redirect()} className="btn mx-5 font2 priceBtn"><FontAwesomeIcon icon={faCircleArrowRight} />Schedule an appointment</button>

            )}
    
        </div>
        </div>
    )
}

export default PriceInfo;