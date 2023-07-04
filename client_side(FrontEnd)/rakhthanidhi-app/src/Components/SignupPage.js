import React from "react";
import "./SignupPage.css";
function signup ()
{
    return(
        <div className="display">
                <div className="signup">
                    <div className="heading">Signup Page</div>
                    <input type ="text" className="firstname"  placeholder="Enter Your First Name"/>
                    <input type ="text" className="lastname"  placeholder="Enter Your last Name"/>
                    <input type ="text" className="password" placeholder="Password"/>
                    <input type ="text" className="Phone" placeholder = "Phone Number"/>
                    <input type ="text" className ="Email" placeholder ="Email Address"/>
                    <input type ="text" className ="Bloodgroup" placeholder ="Blood Group"/>
                    <input type ="text" className="Age" placeholder ="Age"/>
                    <input type ="text" className="Location" placeholder ="Location"/>
                    <br></br>
                    <button className="register">Register</button>
                    <div className="member">Already have Account <b className="login">Login</b></div>
                </div>
                <div className ="sidebox">
                    
                </div>
        </div>
    )
}
export default signup;
