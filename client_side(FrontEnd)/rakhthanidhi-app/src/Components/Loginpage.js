import React from 'react';
import './Loginpage.css';
function login()

{
    return(
        <div className="box">
            <div className ="body"></div>
            <div className="insideBox">

            <div className="h2"><b>Login Page</b></div>
            <div className="Inputname">Name</div><input type="text"  className ="name" placeholder="Enter Your Name"/>
            <div className="Inputpassword">Password</div><input type="text"  className ="password" placeholder="Enter Your Password"/>
            <br></br> <button class ="click">Login</button>
            <div class ="forgot">Forgot Password<b className='color'>Sign Up</b></div>
            </div>
        </div>
        
    );
}
export default login ;