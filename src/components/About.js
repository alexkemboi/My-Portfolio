import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
        <div>
            
           <div className="card">
            <div className="card content">
                <h6 className='mt-button'><strong>
                    ABOUT ME</strong></h6>
                <p className="grey-text ">
                    A highly efficient, methodical and talented software engineer with experience
                    in developing and implementing effective software, troubleshooting
                    computers, data entry and analysis and network installation and configuration.
                    I seek to grow my career in a progressive organization where the blend of my
                    talents and enhanced education skills will help to achieve the goals of the
                    organization. I will be happy to exploit my full potential and sense of obligation
                    for the benefit of the organization and community at large
                </p>
                <div className="card action">
                    <h6>
                    <strong>
                        PERSONAL INFO
                    </strong>
                    </h6>
                    <div className="row mt">
                        <div className="col s12 m6 l6 xl6">
                            <p><strong> Address:</strong>86-30102 Burnt Forest</p>
                            <p><strong> Email:</strong>alexkemboi97@gmail.com</p>
                            <p><strong> Phone Number:</strong>0726837210</p>
                        </div>
                        <div className="s12 m6 l6 xl6">
                        <div className="col s12 m6 l6 xl6">
                            <p><strong> Languages:</strong>English/Kiswahili/Kalenjin</p>
                            <p><strong> ID:</strong>32596524</p>
                            <p><strong> Dob:</strong>15/11/1995</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>)
    }
}