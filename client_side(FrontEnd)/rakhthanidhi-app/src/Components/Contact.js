import React from "react";
import "./Contact.css";

function contact ()
{
    return(
        <div>
            <marquee behaviour="scroll" scrollamount="  10px" position="left"><div className="heading">
                If you are suffering some Health issues before 
                or after donating blood take free advices from this doctors .</div></marquee>
           <div className="Div">
                    <div className="flex">
                            <div className="boxone">
                            <div className="inside"><div className="info"><p className="font zero"><b>Name:</b>chandhu</p><p className="font one"><b>phone:</b>9347449511</p>
                            <p className="font two"> <b>place:</b>Banglore</p></div></div>
                            </div>
                        <div className="boxtwo">
                            <div className="inside"><div className="info"><p className="font zero">
                            <b>Name:</b>chandhu</p><p className="font one">
                            <b>phone:</b>9347449511</p><p className="font two"> <b>place:</b>Banglore</p></div></div>
                        </div>
                    </div>
                    <div className="margin">
                    <textArea  className="margin-right" cols ="53" rows ="2"> comment your opinion on Rakhthanidhi.com...........</textArea>
                    <div className="rate"> Rating About This Website<br></br><img className="star" src ="./photos/star.png" alt =""/>
                    <img className="star" src ="./photos/star.png" alt =""/>
                    <img className="star" src ="./photos/star.png" alt =""/>
                    <img className="star" src ="./photos/star.png" alt =""/>
                    <img className="star" src ="./photos/star.png" alt =""/><br></br>
                    <p>Rakhthanidhi@help.com<br></br>Banglore,india</p>
                    </div>

                    </div>
           </div>
           
             
        </div>
    )
}
export default contact;