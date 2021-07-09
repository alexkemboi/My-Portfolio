import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div>
               
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>
                                PROFESSIONAL SKILLS
                            </strong>
                        </h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>HTML </p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"89%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>css </p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"85%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>JAVA</p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"70%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>MYSQL </p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"79%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>JAVASCRIPT</p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"70%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>TYPESCRIPT </p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"50%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>REACT </p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"70%"}}></div>
                                </div>

                            </div>
                            <div className="col s6">
                                <p>ANGULAR</p>

                                <div class="progress grey lighten-1">
                                    <div class="determinate blue" style={{width:"40%"}}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skill;