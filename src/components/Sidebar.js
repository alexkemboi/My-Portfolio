import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
import * as AiIcons from "react-icons/ai"
import Navbar from './Navbar';
import Footer from './Footer';
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const show = () => setSidebar(!sidebar);
    return (
        <div>
           <Navbar/>
            
            <div className={sidebar ? 'sidebash' : 'side'} >
                {/* <div className='side' > */}
                <Link to="/" data-target="side-nav" className="sidenav-trigger" >
                <AiIcons.AiFillCloseCircle className="fas fa-home" onClick={show} />
            </Link>
                <ul>
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
            </div>
            <Footer/>  
        </div>
    )
}

export default Sidebar;