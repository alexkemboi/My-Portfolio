import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
import * as FaIcons from "react-icons/fa"
import Sidebar from './Sidebar';
function Navbar() {
    
    return (

        <>
            <nav className="lightblue">
                <div className="container">
                <Link to="/Sidebar" className="smallscreen" >
                                    <FaIcons.FaBars  />
                                </Link>
                    <div className="nav-wrapper">
                        {/* <Link to="/" className='brand-logo'>

                        </Link> */}
                       

                        <ul className="right hide-on-med-and-down">
                            

                            <li>
                                <Link to="/" >
                                    <i className='fas fa-home'></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Skill" >
                                    <i className='fas fa-copy'></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/Experience" >
                                    <i className='fas fa-id-badge'></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/Education" >
                                    <i className='fas fa-graduation-cap'></i>Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/Referees" >
                                    <i className='fas fa-address-card'></i>Referees
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;