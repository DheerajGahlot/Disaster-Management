import React,  {useEffect, useState} from 'react';
import { useNavigate ,useParams } from 'react-router-dom';

const UpdateVehicle =()=>{
    const [vehicletype,setVehicletype] = useState("");
    const [vehiclecount,setVehiclecount] = useState("");
    const [vehiclecapacity,setVehiclecapacity]= useState("");
    const [vehiclesetupcost,setVehiclesetupcost]= useState("");
    const [vehiclevariablecost,setVehiclevariablecost]= useState("");

    const params = useParams();
    const  navigate = useNavigate();
    useEffect(()=>{
         getVehicleDetails();
    },[])

    const getVehicleDetails = async () =>{
        let result = await fetch(`http://localhost:5000/vehicle/${params.id}`);
        result = await result.json();
        setVehicletype(result.vehicletype);
        setVehiclecount(result.vehiclecount);
        setVehiclecapacity(result.vehiclecapacity);
        setVehiclesetupcost(result.vehiclesetupcost);
        setVehiclevariablecost(result.vehiclevariablecost);
    }

    
    const updateVehicle= async()=>{
        console.warn(vehicletype, vehiclecount,vehiclecapacity,vehiclesetupcost,vehiclevariablecost)
        let result = await fetch(`http://localhost:5000/vehicle/${params.id}`,{
            method : "Put",
            body : JSON.stringify({vehicletype, vehiclecount,vehiclecapacity,vehiclesetupcost,vehiclevariablecost}),
            headers:{
                'Content-Type':"application/json"
            }

        });
        result = await result.json()
        console.warn(result)
        navigate('/')

    }

        
         
    return (
        <div>
            <h1>Update Vechicles</h1>
            <input className ="inputbox" type="text" value={vehicletype} onChange={(e)=> setVehicletype(e.target.value)}  placeholder="Enter  Vehicle Type" />
            
            <input className ="inputbox" type="text" value={vehiclecount} onChange={(e)=> setVehiclecount(e.target.value)}  placeholder="Enter  Vehicle Count"/>
            
             <input className ="inputbox" type="text" value={vehiclecapacity} onChange={(e)=> setVehiclecapacity(e.target.value)}  placeholder="Enter Vehicle Capacity " />
            
            <input className ="inputbox" type="text" value={vehiclesetupcost} onChange={(e)=> setVehiclesetupcost(e.target.value)}  placeholder="Enter Vehicle Setup Cost"/>
           
            <input className ="inputbox" type="text" value={vehiclevariablecost} onChange={(e)=> setVehiclevariablecost(e.target.value)}  placeholder="Enter Vehicle Variable Cost"/>
            
            <button onClick={updateVehicle}  className="appButton" type="button">Update Vechicle</button>
             
        </div>
    )
}

export default UpdateVehicle;