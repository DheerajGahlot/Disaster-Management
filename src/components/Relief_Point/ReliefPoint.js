import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
// import './App.css'; relief
const ReliefpointList=()=>{
    const [reliefpoints,setReliefpoints]  = useState([]);

    useEffect(() =>{
        getReliefpoints();
    },[])
    const getReliefpoints = async ( )=>{
        let result  = await fetch('http://localhost:5000/reliefpoints');
        result = await result.json();
        setReliefpoints(result);
    }
     
const deleteReliefpoints = async (id)=>{
   let result = await fetch(`http://localhost:5000/reliefpoint/${id}`,{
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
         <h3>Relief Points</h3>
         <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Type</li>
            
            <li>Latitude</li>
            <li>Longitude</li>
            <li>Operation</li>
         </ul>
          
         {
            reliefpoints.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.reliefpointname}</li>
            <li>{item.reliefpointtype}</li>
           
            <li> {item.reliefpointlatitude}</li>
            <li>{item.reliefpointlongitude}</li>
            <li>
                <button onClick={()=>deleteReliefpoints(item._id)}>Delete</button>
            </li>
         </ul>)
         }
         </div>
    )

}
export default ReliefpointList;