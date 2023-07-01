// import React from 'react';
// import './Notification.css';
// function notication ()
// {
//     return(
//         <div className='size'>

//             {/* <div className='heading'><b>Notification passing system:</b>as a need blood donation<br></br>If you are not sign up please <b> <span className='span'>signup</span></b> </div> */}
//             <div className='box'>
//                     {/* <div className=
//                     'display'>
//                         <div className='inside'>
//                         <div className='Location'>Location<input type="text" className='location' placeholder="Location"/></div>
//                         <div className='Name'>Name<input type="text" className='name' placeholder="Name"/></div>
//                         <div className='Name'>Age<input type="text" className='age' placeholder="Age"/></div>
//                         <div className='Name'>Blood group<input type="text" className='bloodGroup' placeholder="Blood Group"/></div>
//                         <div className='Name'>Hospital Address<input type="text" className='address' placeholder=" HospitalAddress "/></div>
//                         <button className='submit'>Submit</button>
//                         </div>
//                     <div className='insideOne'>
//                     <div className='display'>
//                         <div className='capability'> Availability <button class="green"> Green</button></div> 
//                         <div><button className="red"> Red</button></div> 
//                         </div></div> 
//                     </div>*/}
//                     <div className='acountment'>Search below what details you want ex Hospital,Blood Group,location</div>
//                     <input className ="search" type="text" placeholder ="Search here"/>
//                     <button className='submit'>Submit</button>
//             </div>
//         </div>
//     )
// }
// export default notication;

import './Notification.css';
import React,{useState,useEffect} from "react";

function notification ()
{
    const [notification, setData] = useState([]);
    const [bloodData,setBlooddata] = useState('');
    useEffect(()=>{
        getBloodDonationdata();
    },[])
    const getBloodDonationdata = () =>
    {
        fetch ("http://localhost:5050/data").then((res)=>{
            return res.json()
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    const getBloodData = () =>
    {
        fetch (`http://localhost:5050/search/${bloodData}`).then((res)=>{
            return res.json()
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    const bloodChange = (event)=>{
        setBlooddata(event.target.value);

    }
    function clearData()
    {
        setBlooddata("");
    }
    return(
    <div className="second">
         <div className='acountment'>Search below what details you want ex Hospital,Blood Group,location</div>
                    <input className ="search" type="text" placeholder ="Search here" value ={bloodData} onChange={bloodChange}/>
                    <button className='submit' onClick={clearData}>Submit</button>
                <div className="border">
                    <h1>Blood Availability Of Hospitals</h1>
                    <div className="flex">
                    <div id="Snoheading">Sno</div>
                    <div className="hosName">Hospital Name</div>
                    <div className="bloodG">Blood Group</div>
                    <div className="loctionHead">Location</div>
                    </div>
                    
      {
        (notification?.filter(function(e)
        {
            if (e.blood_Group.toLocaleLowerCase().includes(bloodData.toLocaleLowerCase())){
                return notification;
            }
        })?.map(({Sno,hospital_Name,blood_Group,location})=><div>
            
            {/* <div>{Sno}</div>
            <div>{hospital_Name}</div>
            <div>{blood_Group}</div>
            <div>{location}</div> */}
            
                <div className="table">
                    
                        <div className="Sno">{Sno}</div>
                        <div  className="H_name">{hospital_Name}</div>
                        <div className="bloodgroup">{blood_Group}</div>
                        <div className="location">{location}</div>
                    
                </div>
               
           
           
               
        </div>))
      }
    </div>
     </div>
    )
    
}
export default notification;