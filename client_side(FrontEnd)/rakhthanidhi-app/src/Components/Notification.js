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
         <div className='acountment'>Search below district name you can get nearest hospital name,phone number</div>
                    <input className ="search" type="text" placeholder =" 🔍 Search here" value ={bloodData} onChange={bloodChange}/>
                    <button className='submit' onClick={clearData}>Clear</button>
                <div className="border">
                    <h1 className='color'>Availability of BloodBanks and Locations</h1>
                    {/* <div className="flex">
                    <div id="Snoheading">Sno</div>
                    <div className="hosName">hospital_Or_BloodBankName</div>
                    <div className="bloodG">current_City</div>
                    <div className="loctionHead">district</div>
                    <div className=''> state</div>
                    <div className=''>contact_No</div> */}
                    {/* </div> */}



                    

                    
                    
      {
        (notification?.filter(function(e)
        {
            if (e.district.toLocaleLowerCase().includes(bloodData.toLocaleLowerCase())){
                return notification;
            }
        })?.map(({sNo,hospital_Or_BloodBankName,current_City,district,state,contact_No})=><div>
            
            {/* <div>{Sno}</div>
            <div>{hospital_Name}</div>
            <div>{blood_Group}</div>
            <div>{location}</div> */}
            
                <div className="table">
                    <div className='solid'>
                        {/* <div className="Sno">{sNo}</div> */}
                        <div className="H_name"><b>🏨Hospital Name:</b>{hospital_Or_BloodBankName}</div>
                        <div className="currentCity">🏙️<b>Address:</b>{current_City}</div>
                        <div className="district">🏴󠁩󠁬󠁺<b>District:</b>{district}</div>
                        <div className="contact_No">📞<b>Phone No:</b>{contact_No}</div>
                        <div className="state">🏛️<b>{state},🇮🇳India</b></div>
                        
                        </div>
                </div>
               <div className='maps'></div>
           
           
               
        </div>))
      }
    </div>
     </div>
    )
    
}
export default notification;