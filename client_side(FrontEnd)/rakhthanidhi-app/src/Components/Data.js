import "./Data.css";
import React,{useState,useEffect} from "react";

function data ()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        getBloodDonationdata();
    },[])
    const getBloodDonationdata = () =>
    {
        fetch ("http://localhost:5100/data").then((res)=>{
            return res.json()
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    return(
    <div className="second">
                <div className="border">
                    <h1>Blood Availability Of Hospitals</h1>
                    <div className="flex">
                    <div id="Snoheading">Sno</div>
                    <div className="hosName">Hospital Name</div>
                    <div className="bloodG">Blood Group</div>
                    <div className="loctionHead">Location</div>
                    </div>
                    
      {
        data?.map(({Sno,hospital_Name,blood_Group,location})=><div>
            {/* <div>{Availability_Id}</div> */}
          
            {/* <table className="bloodId">{B_Id}</table>
            <div>{Blood_Group}</div> */} 
            {/* <div>{H_Id}</div> */}
            {/* <table className="bloodId">
                <thead>
                <tr> 
                        <th className="solid">bloodId</th>
                        <th className="solid">blood_group</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                        <td className="box">{B_Id}</td>
                        <td className="box">{Blood_Group}</td>
                </tr>
                </tbody>
            </table> */}
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
               
           
           
               
        </div>)
      }
    </div>
     </div>
    )
    
}
export default data;