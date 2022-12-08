import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse bg-dark`} id="navbarNav">
                    <ul className="navbar-nav h4">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
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
            </nav>
            <div className="d-flex flex-row justify-content-center">
            <FontAwesomeIcon icon={faPaw} size="6x"/>
             <h1 className="text-center display-1 font">PAWS N' CLAWS PET CARE</h1>
            <FontAwesomeIcon icon={faPaw} size="6x"/>
            </div>
        </div>
    )
}

export default Header;