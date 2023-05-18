import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
// import './App.css';transshipment
const TransshipmentpointList=()=>{
    const [transshipmentpoints,setTransshipmentpoints]  = useState([]);

    useEffect(() =>{
        getTransshipmentpoints();
    },[])
    const getTransshipmentpoints = async ( )=>{
        let result  = await fetch('http://localhost:5000/transshipmentpoints');
        result = await result.json();
        setTransshipmentpoints(result);
    }
     
const deleteTransshipmentpoints = async (id)=>{
   let result = await fetch(`http://localhost:5000/transshipmentpoint/${id}`,{
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
         <h3>TransShipment Points</h3>
         <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Type</li>
            
            <li>Latitude</li>
            <li>Longitude</li>
            <li>Operation</li>
         </ul>
          
         {
            transshipmentpoints.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.transshipmentpointname}</li>
            <li>{item.transshipmentpointtype}</li>
           
            <li> {item.transshipmentpointlatitude}</li>
            <li>{item.transshipmentpointlongitude}</li>
            <li>
                <button onClick={()=>deleteTransshipmentpoints(item._id)}>Delete</button>
            </li>
         </ul>)
         }
         </div>
    )

}
export default TransshipmentpointList;