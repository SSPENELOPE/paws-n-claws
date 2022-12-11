import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../../utils/auth";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
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
                            <Link to="/appointment" className="nav-link text-light">Appointments</Link>
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
                    {Auth.loggedIn() ? (
                        <ul className="navbar-nav h4">
                            <li className="nav-item">
                                <Link to="/me" className="nav-link text-light btn" >My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-light bg-dark btn" onClick={logout}>Logout</button>
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
        </header>
    )
}

export default Header;
