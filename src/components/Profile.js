import React, { Component } from 'react';
import login2 from '../images/login2.jpg';
class Profile extends Component {
    render() {
        return (
            <>
                <div className="card ">
                    <div className="card-image " >
                        <img className="activator" src={login2} alt="Alex Kemboi" />
                        {/* <Link className="btn-floating halfway-fab waves-effect wave-light red">
                        <i className="material-icons activator">morE-vert</i>

                    </Link> */}
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            ALEX KEMBOI
                        </span>
                        <p>Software Developer</p>



                    </div>
                </div>
                <div className="card ">
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            INTRESTS
                        </span>
                        <p>Reading</p>
                        <p>Traveling</p>



                    </div>
                </div>
                <div className="card ">
             <div className="card-content">
                 <span className="card-title activator grey-text text-darken-4">
                    OTHER SKILLS
                 </span>
                 <p>Computer Repair and Maintenance</p>
                 <p>Network configuration</p>
                 


             </div>
         </div>
            </>



        );
    }
}
export default Profile;