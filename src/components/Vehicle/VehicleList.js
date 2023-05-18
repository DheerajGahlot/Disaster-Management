import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
 
// import './App.css';
const VehicleList=()=>{
    const [vehicles,setVehicles]  = useState([]);

    useEffect(() =>{
        getVehicles();
    },[])
    const getVehicles = async ( )=>{
        let result  = await fetch('http://localhost:5000/vehicles');
        result = await result.json();
        setVehicles(result);
    }
     
const deleteVehicle = async (id)=>{
   let result = await fetch(`http://localhost:5000/vehicle/${id}`,{
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
         <h3>Vehicle List</h3>
         <ul>
            <li>S.No</li>
            <li>Vehicle-Type</li>
            <li>Vehicle-Count</li>
            <li>Vehicle-Capacity</li>
            <li>Vehicle-SetupCost</li>
            <li>Vehicle-VariableCost</li>
            <li>Operation</li>
         </ul>
          
         {
            vehicles.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.vehicletype}</li>
            <li> {item.vehiclecount}</li>
            <li>{item.vehiclecapacity}</li>
            <li>{item.vehiclesetupcost}</li>
            <li>{item.vehiclevariablecost}</li>
            <li>
                <button onClick={()=>deleteVehicle(item._id)}>Delete</button>
                <Link to ={"/update/"+item._id}>Update</Link>
                <Link to ={"/add"}>Add</Link>
                </li>
         </ul>)
         }
        
        
         </div>
          
          
    )

}
export default VehicleList;