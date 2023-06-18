import React from "react";
import "./AboutUs.css";
function aboutUs()
{
    return(
        <div> 
            <div className="heading"> A Short Brief About Rakhthanidhi@helf.com </div>
            <div className="Main">
                    <div className="box">
                    <div className="boxone"><img  className="rambus" src="./photos/three.png" alt=""/></div>
                    <div className="boxtwo">< img className="rambus" src="./photos/mission.png" alt=""/></div>
                    <div className="boxthree">< img className="rambus" src="./photos/goal.png" alt=""/></div>
                    </div>
                    <div className="flex">
            <div className="who"><div className="text"><b className="white">Who we are</b><br></br>As a human being we should understand to save the lives .follow the some guidelines, and appreciation messages to donors. inspiring continued engagement.</div></div>
            <div className="mission"><div className="missoininfo"><b className="white">Mission</b><br></br>By fulfilling these objectives, a blood donation website aims to save lives, support healthcare systems, and create a community of committed blood donors . </div></div>
            <div className="goal"><div className="goalinfo"><b className="white">Goal</b><br></br>As a blood donation website strives to make a tangible impact in saving lives, supporting healthcare systems, and fostering a culture of regular blood donation.</div></div></div>
            </div>
            <div className="below">
                <div className="display">
                <div className="accidents"><img  className="width" src ="./photos/accident.png" alt=""/></div>
                <div className="top">1,50,000 Road Accidents death in india</div>
                <div className="accidents"><img  className="width" src ="./photos/child.png" alt=""/></div>
                <div className="top">1,38,000 Approximate pregnancy death india</div>
                </div>
                
                    <div className="display">
                    <div className="accidents"><img  className="width" src ="./photos/cancer.png" alt=""/></div>
                    <div className="top">7,70,000 cancer people death in india</div>
                    <div className="accidents"><img  className="width" src ="./photos/patients.png" alt=""/></div>
                    <div className="top">1,70,000 dead with anemia in india</div>
                    </div>
                </div>
                <div className="Lastone">
                    <div className="imgdiv">
                    <img  className="donate" src="./photos/djsir.png" alt=""/></div>
                </div>


        </div>
        
    )
}
export default aboutUs;
