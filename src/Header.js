import React from "react";
import "./Header.css";
import logo from "./images/pexels-frank-cone-2235130.jpg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav className="navbar background">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-list">
                    <li>
                        <Link to="/routerpractice">Home</Link>
                    </li>
                    <li>Menu</li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <div className="rightNav">
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
