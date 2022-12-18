import React from "react";
import { Link } from "react-router-dom";
import dogPark from '../assets/images/ownerDogPark1.jpg'
import ownerDog from '../assets/images/ownerDog1.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faDog, faHouseCircleCheck, faShoePrints, faBowlFood, faCalendarDays, faPerson, faCreditCard } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div>
            <Header />
            <div className="d-flex flex-row justify-content-center banner">
                <FontAwesomeIcon icon={faPaw} size="6x" />
                <h1 className="text-center display-1 font">PAWS N' CLAWS PET CARE</h1>
                <FontAwesomeIcon icon={faPaw} size="6x" />
            </div>
            <div className="d-flex flex-column m-5 home">

                <div className="homeBody">
                    <div className="imgSection">
                        <img src={dogPark} />
                    </div>
                    <div className="homesection text-center flex-wrap">
                        <h1 className="font display-5"><u>WHO WE ARE</u></h1>
                        <p className="flex-wrap mission">Here at Paws N Claws it is our Mission to not only make you feel comfortable, but also make your furry little ones too. We take great pride in making a connection with our customers furry family member(s) as if they were our own. One of our top goals is to have a great line of communication between our clients and us. We value your time, and the time of others!</p>
                        <div className="d-flex flex-column">
                            <h2 className="text-dark display-6"><u>Why Choose us?</u></h2>
                            <ul className="list-unstyled">
                                <li className="media">
                                <FontAwesomeIcon className="mr-3 homeIcon" icon={faCalendarDays} size="3x" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">Flexible Schedule</h5>
                                            We are available 24/7 to ensure your animal gets the care it needs!
                                        </div>
                                </li>
                                <li className="media my-4">
                                <FontAwesomeIcon className="mr-3 homeIcon" icon={faPerson} size="3x" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">Strong Customer Connection</h5>
                                            Our relationship and communication with you is second to none, ensure your animal is in the hands of someone you can trust and will consistenly stay in contact with you!
                                        </div>
                                </li>
                                <li className="media">
                                <FontAwesomeIcon className="mr-3 homeIcon" icon={faCreditCard} size="3x" />
                                        <div className="media-body">
                                            <h5 className="mt-0 mb-1">Easy and Affordable</h5>
                                            Traditonal animal boarding can be expensive and we know that, we make it easy and affordable for your pets care!
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                &nbsp;
                <div className="homeBody">
                    <div className="homesection2 text-center flex-wrap services">
                        <h1 className="font"><u>OUR SERVICES</u></h1>
                        <p className="paragraph">At Paws N Claws we specialize in animal care. While your away pick from a variety of services we offer to ensure your pet is taken care of while you're on that vaction you'd been wanting to take for months or maybe just out of town visting family. If you're not sure we offer the service, always feel free to reach out and ask and we will do our best to ensure your animal is taken care of!</p>
                        &nbsp;

                        <ul className="d-flex flex-row flex-wrap list-unstyled servList">
                            <li className="servicesBorder mx-2 my-2 p-1">
                                <FontAwesomeIcon icon={faDog} size="4x" className="servIcon" />
                                <h6 className="text-light">Drop Your Dog off</h6>
                            </li>
                            <li className="servicesBorder mx-2 my-2 p-1">
                                <FontAwesomeIcon icon={faHouseCircleCheck} size="4x" className="servIcon" />
                                <h6 className="text-light">Inhome stays/checkups</h6>
                            </li>
                            <li className="servicesBorder mx-2 my-2 p-1">
                                <FontAwesomeIcon icon={faShoePrints} size="4x" className="servIcon"/>
                                <h6 className="text-light">30min walk for your dog</h6>
                            </li>
                            <li className="servicesBorder mx-2 my-2 p-1">
                                <FontAwesomeIcon icon={faBowlFood} size="4x" className="servIcon"/>
                                <h6 className="text-light">Food/Water/Treats</h6>
                            </li>
                        </ul>
                        &nbsp;
                        <h5>Click <Link to="/pricing">here</Link> to get full list of our pricing and services!</h5>
                    </div>
                    <div className="imgSection">
                        <img src={ownerDog} />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;