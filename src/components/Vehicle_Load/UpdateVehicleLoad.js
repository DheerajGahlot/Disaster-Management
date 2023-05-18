import React,  {useEffect, useState} from 'react';
import { useNavigate ,useParams } from 'react-router-dom';

const UpdateVehicleload =()=>{
    const [vehicletype,setVehicletype] = useState("");
    const [loadtype,setLoadtype] = useState("");
    const [isConnected,setIsConnected]= useState("");

    const params = useParams();
    const  navigate = useNavigate();
    useEffect(()=>{
         getVehicleloadDetails();
    },[])

    const getVehicleloadDetails = async () =>{
        let result = await fetch(`http://localhost:5000/vehicleload/${params.id}`);
        result = await result.json();
        setVehicletype(result.vehicletype);
        setLoadtype(result.loadtype);
        setIsConnected(result.isConnected );
    }

    
    const updateVehicleload= async()=>{
        console.warn(vehicletype, loadtype,isConnected )
        let result = await fetch(`http://localhost:5000/vehicleload/${params.id}`,{
            method : "Put",
            body : JSON.stringify({vehicletype, loadtype,isConnected}),
            headers:{
                'Content-Type':"application/json"
            }

        });
        result = await result.json()
        console.warn(result)
        navigate('/vehicleload')

    }

        
         
    return (
        <div>
            <h1>Update Vechicle Load</h1>
            <input className ="inputbox" type="text" value={isConnected} onChange={(e)=> setIsConnected(e.target.value)}  placeholder=" " />
         
            
            <button onClick={updateVehicleload}  className="appButton" type="button">Update Vechicle</button>
             
        </div>
    )
}

export default UpdateVehicleload;