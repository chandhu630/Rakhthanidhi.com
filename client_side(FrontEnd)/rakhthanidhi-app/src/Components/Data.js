import React,{useState,useEffect} from "react";

function data ()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        getBloodDonationdata();
    },[])
    const getBloodDonationdata = () =>
    {
        fetch ("http://localhost:5300/data").then((res)=>{
            return res.json()
        }).then((res) => {
            setData(res);
            console.log(res);
        })
    }
    return(
    <div>
      {
        data?.map(({Availability_Id,B_Id,Blood_Group,H_Id})=><div>
            <div>{Availability_Id}</div>
            <div>{B_Id}</div>
            <div>{Blood_Group}</div>
            <div>{H_Id}</div>
        </div>)
      }
    </div>
    )
    
}
export default data;