import React from "react";
import dogWalk from '../assets/images/dog-walk.png'
import dogTrainer from '../assets/images/dogTrainer.webp'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="d-flex flex-row justify-content-center banner">
                <FontAwesomeIcon icon={faPaw} size="6x" />
                <h1 className="text-center display-1 font">PAWS N' CLAWS PET CARE</h1>
                <FontAwesomeIcon icon={faPaw} size="6x" />
            </div>
            <div className="d-flex flex-column m-5">

                <div className="d-flex flex-row">
                    <div className="homesection">
                        <img src={dogWalk} />
                    </div>
                    <div className="homesection text-center flex-wrap">
                        <h1 className="font"><u>WHO WE ARE</u></h1>
                        <p className="flex-wrap mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed. Et magnis dis parturient montes nascetur ridiculus mus mauris. Rhoncus aenean vel elit scelerisque mauris pellentesque. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque viverra justo nec ultrices. Etiam tempor orci eu lobortis elementum. Sit amet purus gravida quis. Id aliquet risus feugiat in ante metus dictum. Diam volutpat commodo sed egestas egestas fringilla phasellus. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Duis at tellus at urna condimentum mattis pellentesque id nibh. Luctus accumsan tortor posuere ac ut consequat. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Posuere morbi leo urna molestie at.</p>
                    </div>
                </div>
                &nbsp;
                <div className="d-flex flex-row">
                    <div className="homesection text-center flex-wrap services">
                        <h1 className="font"><u>OUR SERVICES</u></h1>
                        <p className="paragraph">At PAWS N CLAWS we specialize in animal care. While your away pick from a variety of services we offer to ensure your pet is taken care of while you're on that vaction you'd been wanting to take for months or maybe just out of town visting family. If you're not sure we offer the service always feel free to reach out and ask and we will do our best to ensure your animal is taken care of!</p>
                        &nbsp;
                        <div>
                        <h3>Here are some of the services we offer!</h3>
                            <ul style={{listStyle: "none"}}>
                                <li>Dog Walking</li>
                                <li>Overnight Stays with your pet</li>
                                <li>Feeding and Bathroom Breaks</li>
                            </ul>
                        </div>
                        &nbsp;
                        <h6>Click here to get full list of our pricing and services!</h6>
                    </div>
                    <div className="homesection">
                        <img src={dogTrainer} />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;