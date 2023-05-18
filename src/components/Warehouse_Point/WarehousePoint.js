import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";
// import './App.css'; warehouse
const WarehousepointList=()=>{
    const [warehousepoints,setWarehousepoints]  = useState([]);

    useEffect(() =>{
        getWarehousepoints();
    },[])
    const getWarehousepoints = async ( )=>{
        let result  = await fetch('http://localhost:5000/warehousepoints');
        result = await result.json();
        setWarehousepoints(result);
    }
     
const deleteWarehousepoints = async (id)=>{
   let result = await fetch(`http://localhost:5000/warehousepoint/${id}`,{
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
         <h3>Warehouse Points</h3>
         <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Type</li>
            
            <li>Latitude</li>
            <li>Longitude</li>
            <li>Operation</li>
         </ul>
          
         {
            warehousepoints.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.warehousepointname}</li>
            <li>{item.warehousepointtype}</li>
           
            <li> {item.warehousepointlatitude}</li>
            <li>{item.warehousepointlongitude}</li>
            <li>
                <button onClick={()=>deleteWarehousepoints(item._id)}>Delete</button>
            </li>
         </ul>)
         }
         </div>
    )

}
export default WarehousepointList;