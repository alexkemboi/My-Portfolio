import React, { Component } from 'react'
import Skill from './Skill';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Referees from './Referees';
import Navbar from './Navbar';
import Footer from './Footer';
export default class Home extends Component {
    render() {
        return (<div>
            <section>
                <Navbar/>    
                  
                <div className="container">
                    <div className="row" >
                        <div className="col s12 m4 l3">
                        <Profile />
                        </div>
                        <div className="col s12 m8 l9" >
                        <About />
                        <Skill />
                        <Experience/>
                        <Education />     
                        <Referees/>  
                                                
                                    
                        </div>
                    </div>
                </div>
                <Footer/>  
            </section>
            
        </div>);
    }
}