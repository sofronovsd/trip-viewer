import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo center">Trip Viewer</NavLink>
                <ul className="right">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login" exact>Log In</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
