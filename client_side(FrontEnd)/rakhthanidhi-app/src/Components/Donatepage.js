import React from "react";
import "./Donatepage.css";
function donatepage()
{
    return(
        <div>
            
          <div className="img"><div className="quote"><div className="boxwidth">"Donate Blood Today So That No One Ever Has To Suffer From A Lack Of Blood."</div><div className="smile">&#128522;</div></div></div>
           
                <div className="heading"><b className="color">Donate Now</b></div>
                     
         <div className="Form">
                    <div className="fillOneSide">
                        <div className="fillOneSidedisplay">
                            <span className="name">Name</span><input className="inputname" type="text" placeholder="Name"/>
                        <br></br> <span  className="phonename">Phone Number</span><input  className="inputphone" type="text" placeholder="Phone Number"/>
                        <br></br> <span  className="emailname">E-mail</span><input className="inputemail"  type="text" placeholder="E-mail"/>
                        <br></br> <span  className="addressname"> Address</span><input className="inputaddress" type="text" placeholder="Location"/>
                        <br></br> <span  className="hospitalname">Hospital Name:</span><input  className="inputhospital" type="text" placeholder=" Hospital Name"/>
                         </div>
                    <div className="fillAnother">
                        <span className="">Date of birth</span><input  className="birth" type="text" placeholder=" Date of birth"/>
                        <br></br>  <span className="">Date of Donation</span><input  className="donation" type="text" placeholder=" Date of Donation"/>
                        <br></br>  <span className="">Blood Group</span><input  className="BloodGroup" type="text" placeholder=" Blood Group"/>
                        <br></br>  <span className="">Age</span><input  className="Age" type="text" placeholder=" Age"/>
                        <br></br>  <span className="">Gender</span><input  className="Gender" type="text" placeholder=" Gender"/>
                        <br></br>  <span className="">Which Time You Donate</span><input  className="WhichTime" type="text" placeholder="  Which Time You Donate"/>
                     </div>      
              </div>
              <button className="submit"> Submit</button>
        </div>
        </div>
    )
}
export default donatepage;