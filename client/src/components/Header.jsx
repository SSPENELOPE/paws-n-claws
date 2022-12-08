import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Header = ({ loggedIn, setLoggedIn }) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex flex-row justify-content-between">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse bg-dark`} id="navbarNav">
                    <ul className="navbar-nav h4">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-dark" id="navbarNav">
                    {loggedIn ? (
                        <ul className="navbar-nav h4">
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link text-light" >My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-light" onClick={() => setLoggedIn(!loggedIn)}>Log Out</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav h4">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-light">Login</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
            <div className="d-flex flex-row justify-content-center banner">
                <FontAwesomeIcon icon={faPaw} size="6x" />
                <h1 className="text-center display-1 font">PAWS N' CLAWS PET CARE</h1>
                <FontAwesomeIcon icon={faPaw} size="6x" />
            </div>
        </div>
    )
}

export default Header;