import React,  {useEffect, useState} from 'react';
import { useNavigate ,useParams } from 'react-router-dom';

const UpdatePickup  =()=>{
    const [pickupuid,setPickupuid] = useState("");
    const [pickuppname,setPickuppname] = useState("");
    const [pickuppw,setPickuppw]= useState("");
    const [pickuppv,setPickuppv]= useState("");
    const [pickuppp,setpickuppp]= useState("");

    const params = useParams();
    const  navigate = useNavigate();
    useEffect(()=>{
         getPickupDetails();
    },[])

    const getPickupDetails = async () =>{
        let result = await fetch(`http://localhost:5000/pickup/${params.id}`);
        result = await result.json();
         setPickupuid(result.pickupuid);
         setPickuppname(result.pickuppname);
         setPickuppw(result.pickuppw);
         setPickuppv(result.pickuppv);
         setpickuppp(result.pickuppp);
    }

    
    const updatePickup= async()=>{
        console.warn( pickupuid , pickuppname, pickuppw, pickuppv, pickuppp)
        let result = await fetch(`http://localhost:5000/pickup/${params.id}`,{
            method : "Put",
            body : JSON.stringify({pickupuid , pickuppname, pickuppw, pickuppv, pickuppp}),
            headers:{
                'Content-Type':"application/json"
            }

        });
        result = await result.json()
        console.warn(result)
        navigate('/pickup')

    }

        
         
    return (
        <div>
            <h1>Update Pickup</h1>
            <input className ="inputbox" type="text" value={pickupuid} onChange={(e)=>  setPickupuid(e.target.value)}  placeholder="Enter Pickup UID" />
            
            <input className ="inputbox" type="text" value={pickuppname} onChange={(e)=>  setPickuppname(e.target.value)}  placeholder="Enter Pickup Name"/> 

            <input className ="inputbox" type="text" value={pickuppw} onChange={(e)=>  setPickuppw(e.target.value)}  placeholder="Enter  Pickup lw " />

            
             <input className ="inputbox" type="text" value={pickuppv} onChange={(e)=>  setPickuppv(e.target.value)}  placeholder="Enter  Pickup lv " />
            
             <input className ="inputbox" type="text" value={pickuppp} onChange={(e)=>  setpickuppp(e.target.value)}  placeholder="Enter  Pickup lp " />
            
            <button onClick={updatePickup}  className="appButton" type="button">Update Pickup</button>
             
        </div>
    )
}

export default UpdatePickup;