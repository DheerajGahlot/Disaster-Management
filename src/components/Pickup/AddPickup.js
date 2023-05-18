import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddPickup =()=>{
    const [pickupuid,setPickupuid] = useState("");
    const [pickuppname,setPickuppname] = useState("");
    const [pickuppw,setPickuppw]= useState("");
    const [pickuppv,setPickuppv]= useState("");
    const [pickuppp,setpickuppp]= useState("");
    const [error,setError]= useState(false);
    const  navigate = useNavigate();
    const addPickup= async()=>{

        console.warn(   pickupuid , pickuppname, pickuppw, pickuppv, pickuppp );
        if(!pickupuid  || !pickuppname || !pickuppw || ! pickuppv ||!pickuppp)
        {
            setError(true);
            return false;
        }
         
        let result = await fetch('http://localhost:5000/add-pickup',{
            method : 'post',
            body :JSON.stringify({ pickupuid , pickuppname, pickuppw, pickuppv, pickuppp}),
            headers:{
                'Content-Type' :'application/json'
            },
                });
                result = await result.json()
                console.warn(result);
                 localStorage.setItem("pickup",JSON.stringify(result))
                    navigate('/pickup')
                 
    }
    return (
        <div>
            <h1>Add PickUp</h1>

            <input className ="inputbox" type="text" value={pickupuid} onChange={(e)=>  setPickupuid(e.target.value)}  placeholder="Enter Pickup UID" />
            { error && !pickupuid && <span className="invaid-input">Enter Valid Pickup UID</span>}
            <input className ="inputbox" type="text" value={pickuppname} onChange={(e)=>  setPickuppname(e.target.value)}  placeholder="Enter Pickup Name"/>
            { error && !pickuppname && <span className="invaid-input">Enter Valid Pickup Name</span>}
             <input className ="inputbox" type="text" value={pickuppw} onChange={(e)=>  setPickuppw(e.target.value)}  placeholder="Enter  Pickup Pw " />
             { error && !pickuppw &&  <span className="invaid-input">Enter Valid Pickup Pw</span>}
             <input className ="inputbox" type="text" value={pickuppv} onChange={(e)=>  setPickuppv(e.target.value)}  placeholder="Enter  Pickup Pv " />
             { error && !pickuppv &&  <span className="invaid-input">Enter Valid Pickup Pv</span>}
             <input className ="inputbox" type="text" value={pickuppp} onChange={(e)=>  setpickuppp(e.target.value)}  placeholder="Enter  Pickup Pp " />
             { error && !pickuppp &&  <span className="invaid-input">Enter Valid Pickup Pp</span>}
            <button onClick={addPickup}  className="appButton" type="button">Add Product</button>
             
        </div>
    )
}

export default AddPickup;