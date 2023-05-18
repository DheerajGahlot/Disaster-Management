import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";

// import './App.css';
const PickupList=()=>{
    const [pickups,setPickups]  = useState([]);

    useEffect(() =>{
        getPickups();
    },[])
    const getPickups = async ( )=>{
        let result  = await fetch('http://localhost:5000/pickups');
        result = await result.json();
        setPickups(result);
    }
     
const deletePickup = async (id)=>{
   let result = await fetch(`http://localhost:5000/pickup/${id}`,{
    method : "delete"
   });
   result = await result.json()
   if(result)
   {
    alert("record is deleted");

   }
}
    return(
       
         <div className="product-list">
         <h3>Pickup List</h3>
         <ul>
            <li>S.No</li>
            <li>PickupUID</li>
            <li>Pickup-Name</li>
            <li>Pickup-Pw</li>
            <li>Pickup-Pv</li>
            <li>Pickup-Pp</li>
            <li>Operation</li>
         </ul>
          
         {
            pickups.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.pickupuid}</li>
            <li> {item.pickuppname}</li>
            <li>{item.pickuppw}</li>
            <li>{item.pickuppv}</li>
            <li>{item.pickuppp}</li>
            <li>
                <button onClick={()=>deletePickup(item._id)}>Delete</button>
                <Link to ={"/pickup/update/"+item._id}>Update</Link>
                <Link to ={"/pickup/add"}>Add</Link>
                </li>
         </ul>)
         }
         </div>
          
          
    )

}
export default PickupList;