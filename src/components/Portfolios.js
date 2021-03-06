import React, { Component } from 'react';
import "./navbar.css";
import { HashLink as Link } from 'react-router-hash-link'

import Modal from 'react-modal'
export default class Portfolios extends Component {
  render() {
    return (

      <>
        {/* <nav className="lightblue">
          <div className="container">
            <div className="nav-wrapper">
            designed by @ikonex softwares 0726837210 ikonetwork3@gmail.com 
            </div>
          </div>
        </nav> */}
         <Modal isOpen={true}>
              <nav   >
                <ul className='nav-menu-items'>
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
                        <Link to="/Portolios" >
                            <i className='fas fa-address-card'></i>Portfolios
                        </Link>
                    </li>
                </ul>
                </nav>
              </Modal > 
        
      </>
    );
  }
}