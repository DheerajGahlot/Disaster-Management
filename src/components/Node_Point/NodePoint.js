import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
// import './App.css';
const NodepointList=()=>{
    const [nodepoints,setNodepoints]  = useState([]);

    useEffect(() =>{
        getNodepoints();
    },[])
    const getNodepoints = async ( )=>{
        let result  = await fetch('http://localhost:5000/nodepoints');
        result = await result.json();
        setNodepoints(result);
    }
     
const deleteNodepoints = async (id)=>{
   let result = await fetch(`http://localhost:5000/nodepoint/${id}`,{
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
         <h3>Node Points</h3>
         <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Type</li>
            
            <li>Latitude</li>
            <li>Longitude</li>
            <li>Operation</li>
         </ul>
          
         {
            nodepoints.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.nodepointname}</li>
            <li>{item.nodepointtype}</li>
           
            <li> {item.nodepointlatitude}</li>
            <li>{item.nodepointlongitude}</li>
            <li>
                <button onClick={()=>deleteNodepoints(item._id)}>Delete</button>
            </li>
         </ul>)
         }
         </div>
    )

}
export default NodepointList;