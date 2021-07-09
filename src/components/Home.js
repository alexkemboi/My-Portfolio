import React, { Component } from 'react'
import Skill from './Skill';
import Profile from './Profile';
import Experience from './Experience';
import Portfolios from './Portfolios';
import Navbar from './Navbar';
import Education from './Education';
import About from './About';
export default class Home extends Component {
    render() {
        return (<div>

            <section>
                <Navbar />
                <div className="container">
                    <div className="row" >
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                        <About />
                        <Skill />
                        <Experience />
                        <Education />
                        <Portfolios />
                        </div>
                    </div>
                </div>
            </section>
        </div>);
    }
}