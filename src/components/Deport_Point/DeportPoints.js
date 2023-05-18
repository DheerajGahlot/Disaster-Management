import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
// import './App.css';
const DeportpointList=()=>{
    const [deportpoints,setDeportpoints]  = useState([]);

    useEffect(() =>{
        getDeportpoints();
    },[])
    const getDeportpoints = async ( )=>{
        let result  = await fetch('http://localhost:5000/deportpoints');
        result = await result.json();
        setDeportpoints(result);
    }
     
const deleteDeportpoints = async (id)=>{
   let result = await fetch(`http://localhost:5000/deportpoint/${id}`,{
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
         <h3>Deport Points</h3>
         <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Type</li>
            
            <li>Latitude</li>
            <li>Longitude</li>
            <li>Operation</li>
         </ul>
          
         {
            deportpoints.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.deportpointname}</li>
            <li>{item.deportpointtype}</li>
           
            <li> {item.deportpointlatitude}</li>
            <li>{item.deportpointlongitude}</li>
            <li>
                <button onClick={()=>deleteDeportpoints(item._id)}>Delete</button>
            </li>
         </ul>)
         }
         </div>
    )

}
export default DeportpointList;