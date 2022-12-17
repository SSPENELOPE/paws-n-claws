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
            <nav className="navbar navbar-expand-lg navbar-light nav d-flex flex-row justify-content-between">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav-section`} id="navbarNav">
                    <ul className="navbar-nav h4">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link link" style={{border: "none"}}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/appointment" className="nav-link link">Appointments</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link link" href="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-section" id="navbarNav">
                    {Auth.loggedIn() ? (
                        <ul className="navbar-nav h4">
                            <li className="nav-item">
                                <Link to="/me" className="nav-link link" >My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn link" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav h4">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link link" style={{border: "none"}}>Login</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;
