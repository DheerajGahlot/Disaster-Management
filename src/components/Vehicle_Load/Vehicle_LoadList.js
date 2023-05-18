import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
 
// import './App.css';
const VehicleloadList=()=>{
    const [vehicleloads,setVehicleloads]  = useState([]);

    useEffect(() =>{
        getVehicleloads();
    },[])
    const getVehicleloads = async ( )=>{
        let result  = await fetch('http://localhost:5000/vehicleloads');
        result = await result.json();
        setVehicleloads(result);
    }
     
const deleteVehicleload = async (id)=>{
   let result = await fetch(`http://localhost:5000/vehicleload/${id}`,{
    method : "Delete"
   });
   result = await result.json()
   if(result)
   {
    alert("record is deleted");

   }
}
    return(
       
         <div className="product-list">
         <h3>Vehicle_Load</h3>
         <ul>
            <li>S.No</li>
            <li>Vehicle-Type</li>
            <li>Load-Type</li>
            <li>Connection possible</li>
            <li>Operation</li>
         </ul>
          
         {
            vehicleloads.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.vehicletype}</li>
            <li> {item.loadtype}</li>
            <li>{item.isConnected}</li>
            <li>
                <button onClick={()=>deleteVehicleload(item._id)}>Delete</button>
                <Link to ={"/vehicleload/update/"+item._id}>Update</Link>
                <Link to ={"/vehicleload/add"}>Add</Link>
                </li>
         </ul>)
         }
        
        
         </div>
          
          
    )

}
export default VehicleloadList;