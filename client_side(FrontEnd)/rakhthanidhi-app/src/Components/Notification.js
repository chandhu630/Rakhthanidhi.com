import React from 'react';
import './Notification.css';
function notication ()
{
    return(
        <div>

            <div className='heading'><b>Notification passing system:</b>as a need blood donation<br></br>If you are not sign up please <b> <span className='span'>signup</span></b> </div>
            <div className='box'>
                    <div className='display'>
                        <div className='inside'>
                        <div className='Location'>Location<input type="text" className='location' placeholder="Location"/></div>
                        <div className='Name'>Name<input type="text" className='name' placeholder="Name"/></div>
                        <div className='Name'>Age<input type="text" className='age' placeholder="Age"/></div>
                        <div className='Name'>Blood group<input type="text" className='bloodGroup' placeholder="Blood Group"/></div>
                        <div className='Name'>Hospital Address<input type="text" className='address' placeholder=" HospitalAddress "/></div>
                        <button className='submit'>Submit</button>
                        </div>
                    
                    <div className='insideOne'>
                    <div className='display'>
                      <div className='capability'> Availability <button class="green"> Green</button></div> 
                       <div><button className="red"> Red</button></div> 
                        </div></div>
                    </div>
            </div>



        </div>
    )
}
export default notication;