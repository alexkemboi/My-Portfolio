import React,{Component} from 'react';

class Education extends Component{
    render(){
      return(
        <div>
           
            <div className="card">
                <div className="card-content">
                    <h6>EDUCATION</h6>
                    <table className="striped"> 
                    <thead>
                        <tr>
                            <th>CERTIFICATE</th>
                            <th>Date</th>
                            <th>Institution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Software Engineering</td>
                            <td>September 2014</td>
                            <td>Kisii University</td>
                        </tr>
                        <tr>
                            <td>KCSE</td>
                            <td>November 2013</td>
                            <td>Chebara High School</td>
                        </tr>
                        <tr>
                            <td>KCPE</td>
                            <td>November 2009</td>
                            <td>Koiluget Primary School School</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
      ); 
    }
}
export default  Education;