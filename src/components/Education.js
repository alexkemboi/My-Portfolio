import React,{Component} from 'react';

class Education extends Component{
    render(){
      return(
        <div>
           

            <div className="card">
                <div className="card-content">
                    <h6><strong>EDUCATION</strong></h6>
                    <table className="striped"> 
                    <thead>
                        <tr>
                            <th>Certificate</th>
                            <th>Date</th>
                            <th>Institution</th>
                            <th>Award</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Software Engineering</td>
                            <td>September 2014-2018</td>
                            <td>Kisii University</td>
                            <td>Second Class Honours</td>
                        </tr>
                        <tr>
                            <td>KCSE</td>
                            <td>2010-November 2013</td>
                            <td>Chebara High School</td>
                            <td>B+</td>
                        </tr>
                        <tr>
                            <td>KCPE</td>
                            <td>2000-November 2009</td>
                            <td>Koiluget Primary School School</td>
                            <td>350 MARKS</td>
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