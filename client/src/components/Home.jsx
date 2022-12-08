import React from "react";
import dogWalk from '../assets/images/dog-walk.png'
import dogTrainer from '../assets/images/dogTrainer.webp'

const Home = () => {
    return (
        <div className="d-flex flex-column m-5">
            <div className="d-flex flex-row">
                <div className="homesection">
                    <img src={dogWalk} />
                </div>
                <div className="homesection text-center flex-wrap">
                    <h1 className="font"><u>WHO WE ARE</u></h1>
                    <p className="flex-wrap">Welcome to Paws N Claws Pet Care where we love animals and make it our mission to ensure your's is taken care of while your away.</p>
                </div>
            </div>
            &nbsp; 
            <div className="d-flex flex-row">
                <div className="homesection text-center flex-wrap">
                    <h1 className="font"><u>OUR SERVICES</u></h1>
                    <p className="paragraph">At PAWS N CLAWS we specialize in animal care. While your away pick from a variety of services we offer to ensure your pet is taken care of while you're on that vaction you'd been wanting to take for months or maybe just out of town visting family. If you're not sure we offer the service always feel free to reach out and ask and we will do our best to ensure your animal is taken care of!</p>
                    <h3>Here are some of the services we offer!</h3>
                    <ul>
                        <li>Dog Walking</li>
                        <li>Overnight Stays with your pet</li>
                        <li>Feeding and Bathroom Breaks</li>
                    </ul>
                </div>
                <div className="homesection">
                    <img src={dogTrainer} />
                </div>
            </div>
            
        </div>

    )
}

export default Home;