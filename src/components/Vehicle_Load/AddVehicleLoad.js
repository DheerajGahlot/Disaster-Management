import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddVehicleload =()=>{
    const [vehicletype,setVehicletype] = useState("");
    const [loadtype,setLoadtype] = useState("");
    const [isConnected,setIsConnected]= useState("");const [error,setError]= useState(false);
    const  navigate = useNavigate();
    const addVehicleload= async()=>{

        console.warn( vehicletype ,loadtype,isConnected);
        if(!vehicletype || !loadtype || !isConnected )
        {
            setError(true);
            return false;
        }
         
        let result = await fetch('http://localhost:5000/add-vehicleload',{
            method : 'post',
            body :JSON.stringify({ vehicletype ,loadtype,isConnected}),
            headers:{
                'Content-Type' :'application/json'
            },
                });
                result = await result.json()
                console.warn(result);
                 localStorage.setItem("vehicle",JSON.stringify(result))
                    navigate('/vehicleload')
                 
    }
    return (
        <div>
            <h1>Add Vehicle Load</h1>

            <input className ="inputbox" type="text" value={vehicletype} onChange={(e)=> setVehicletype(e.target.value)}  placeholder="Enter  Vehicle Type" />
            { error && !vehicletype && <span className="invaid-input">Enter Valid Vehicle Type</span>}
            <input className ="inputbox" type="text" value={loadtype} onChange={(e)=> setLoadtype(e.target.value)}  placeholder="Enter  Load Type"/>
            { error && !loadtype && <span className="invaid-input">Enter Valid Load Type</span>}
             <input className ="inputbox" type="text" value={isConnected} onChange={(e)=> setIsConnected(e.target.value)}  placeholder="  " />
             { error && !isConnected &&  <span className="invaid-input">Enter Valid Vehicle Capacity</span>}
              <button onClick={addVehicleload}  className="appButton" type="button">Add Product</button>
             
        </div>
    )
}

export default AddVehicleload;