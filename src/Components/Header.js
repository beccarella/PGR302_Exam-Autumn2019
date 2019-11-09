import React from 'react';
import { NavLink} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink exact to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;