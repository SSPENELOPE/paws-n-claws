import React from "react";
import dogWalk from '../assets/images/dog-walk.png'

const Home = () => {
    return (
        <div className="d-flex flex-row">
                <div className="homesection fixthis">
                    <img src={dogWalk} />
                </div>
                <div className="homesection text-center fixthis flex-wrap">
                    <h1 className="font">WHO WE ARE</h1>
                    <p className="flex-wrap">Welcome to Paws N Claws Pet Care where we love animals and make it our mission to ensure your's is taken care of while your away.</p>
                </div>
        </div>
    )
}

export default Home;