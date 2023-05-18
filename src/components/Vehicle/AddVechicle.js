import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddVehicle =()=>{
    const [vehicletype,setVehicletype] = useState("");
    const [vehiclecount,setVehiclecount] = useState("");
    const [vehiclecapacity,setVehiclecapacity]= useState("");
    const [vehiclesetupcost,setVehiclesetupcost]= useState("");
    const [vehiclevariablecost,setVehiclevariablecost]= useState("");
    const [error,setError]= useState(false);
    const  navigate = useNavigate();
    const addVehicle= async()=>{

        console.warn( vehicletype ,vehiclecount,vehiclecapacity,vehiclesetupcost,vehiclevariablecost );
        if(!vehicletype || !vehiclecount || !vehiclecapacity || ! vehiclesetupcost ||!vehicletype)
        {
            setError(true);
            return false;
        }
         
        let result = await fetch('http://localhost:5000/add-vehicle',{
            method : 'post',
            body :JSON.stringify({vehicletype ,vehiclecount,vehiclecapacity,vehiclesetupcost,vehiclevariablecost   }),
            headers:{
                'Content-Type' :'application/json'
            },
                });
                result = await result.json()
                console.warn(result);
                 localStorage.setItem("vehicle",JSON.stringify(result))
                    navigate('/')
                 
    }
    return (
        <div>
            <h1>Add Vehicle</h1>

            <input className ="inputbox" type="text" value={vehicletype} onChange={(e)=> setVehicletype(e.target.value)}  placeholder="Enter  Vehicle Type" />
            { error && !vehicletype && <span className="invaid-input">Enter Valid Vehicle Type</span>}
            <input className ="inputbox" type="text" value={vehiclecount} onChange={(e)=> setVehiclecount(e.target.value)}  placeholder="Enter  Vehicle Count"/>
            { error && !vehiclecount && <span className="invaid-input">Enter Valid Vehicle Count</span>}
             <input className ="inputbox" type="text" value={vehiclecapacity} onChange={(e)=> setVehiclecapacity(e.target.value)}  placeholder="Enter Vehicle Capacity " />
             { error && !vehiclecapacity &&  <span className="invaid-input">Enter Valid Vehicle Capacity</span>}
            <input className ="inputbox" type="text" value={vehiclesetupcost} onChange={(e)=> setVehiclesetupcost(e.target.value)}  placeholder="Enter Vehicle Setup Cost"/>
            { error && !vehiclesetupcost && <span className="invaid-input">Enter Valid Setup Cost</span>}
            <input className ="inputbox" type="text" value={vehiclevariablecost} onChange={(e)=> setVehiclevariablecost(e.target.value)}  placeholder="Enter Vehicle Variable Cost"/>
            { error && !vehiclevariablecost && <span className="invaid-input">Enter Valid  Variable Cost</span>} 
          
            <button onClick={addVehicle}  className="appButton" type="button">Add Product</button>
             
        </div>
    )
}

export default AddVehicle;