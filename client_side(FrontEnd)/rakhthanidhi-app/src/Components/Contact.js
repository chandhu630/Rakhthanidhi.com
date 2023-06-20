import React from "react";
import "./Contact.css";

function contact ()
{
    return(
        <div>
            <marquee behaviour="scroll" scrollamount="  10px" position="left"><div className="heading">If You are Suffering Some Health issues before Donating blood
             or After Donating Blood Take free advices from This Doctors .</div></marquee>
             <div className="flex">
                <div className="photo"></div><div className="name">Name: Ankitha<br></br>Phone Number:XXXXXXXXX</div>
                <div className="phototwo"></div><div className="name">Name: Aruna<br></br>Phone Number:XXXXXXXXX</div>
             </div>
             <div className="flex">
             <div className="">
                <label for="message"></label><input  className="text" type="text" name="Type about Your Opinion on This Blood Donation  website
..............."/></div>
             <div className=""></div>
             </div>
        </div>
    )
}
export default contact;