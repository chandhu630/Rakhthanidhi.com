import React from "react"
import "./Gallery.css";
function gallery ()
{
    return(
        <div>
            <div className="display">
            <img   className ="photos One" src="./photos/image1.jpeg" alt=""/>
            <img   className ="photos" src="./photos/imag2.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image3.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image4.jpeg" alt=""/>
            </div>
            <div className="display">
            <img   className ="photos One" src="./photos/image5.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image6.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image7.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image8.jpeg" alt=""/>
            </div>
            <div className="display">
            <img   className ="photos One" src="./photos/image9.jpeg" alt=""/>
            <img   className ="photos"  src="./photos/image10.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image12.jpeg" alt=""/>
            <img   className ="photos" src="./photos/image11.jpeg" alt=""/>
            </div>
            
        </div>
    )
}
export default gallery;