import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ownerDog2 from '../../assets/images/ownerDog2.jpg'
import ownerDog3 from '../../assets/images/ownerDog3.jpg'
import ownerDog4 from '../../assets/images/ownerDog4.jpg'
import ownerDog5 from '../../assets/images/ownerDog5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import PriceInfo from "../PricingInfo";

const Pricing = () => {
    return (
        <div className="priceWrapper">
            <Header />
            <div className="d-flex flex-row justify-content-end bg-silk">
                <h1 className="display-3 font mx-5"><u>Pricing and Services</u></h1>
            </div>
            <div className="sectionWrapper">
                <div className="card" style={{width: "22rem"}}>
                    <img src={ownerDog2} className="card-img-top" style={{height: "22rem"}} alt="..."></img>
                        <div className="card-body bg-green customCard">
                            <h5 className="card-title priceFont"><u>30 Minute Walk</u></h5>
                            <p className="card-text">Busy all day with work? No worries, schedule this appointment and we will drop in and take your furry friend for a walk!</p>
                            <h4 className="priceFont align-self-end my-4"><FontAwesomeIcon icon={faDollarSign} />35</h4>
                        </div>
                </div>
                <div className="card" style={{width: "22rem"}}>
                    <img src={ownerDog3} className="card-img-top" style={{height: "22rem"}} alt="..."></img>
                        <div className="card-body bg-green customCard">
                        <h5 className="card-title priceFont"><u>Overnight Stay With Us</u></h5>
                            <p className="card-text">Going somewhere for the night? No worries, drop your animal off with us, or if you prefer we will come stay with your animal!</p>
                            <h4 className="priceFont align-self-end my-4"><FontAwesomeIcon icon={faDollarSign} />85</h4>
                        </div>
                </div>
                <div className="card" style={{width: "22rem"}}>
                    <img src={ownerDog4} className="card-img-top" style={{height: "22rem"}} alt="..."></img>
                        <div className="card-body bg-green customCard">
                        <h5 className="card-title priceFont"><u>Drop Ins</u></h5>
                            <p className="card-text">Busy on a some day adventures? We will drop in and check on your pet, let them out for a bathroom break and ensure they have food and water!</p>
                            <h4 className="priceFont align-self-end my-1"><FontAwesomeIcon icon={faDollarSign} />30</h4>
                        </div>
                </div>
                <div className="card" style={{width: "22rem"}}>
                    <img src={ownerDog5} className="card-img-top" style={{height: "22rem"}} alt="..."></img>
                        <div className="card-body bg-green customCard">
                        <h5 className="card-title priceFont"><u>Half Days</u></h5>
                            <p className="card-text">Give your furry friend a caretaker for part of the day!</p>
                            <h4 className="priceFont align-self-end my-5"><FontAwesomeIcon icon={faDollarSign} />45</h4>
                        </div>
                </div>

            </div>
            <div className="d-flex flex-column bg-green">
                <PriceInfo />
            </div>
            
            <Footer />

        </div>
    )
}

export default Pricing;