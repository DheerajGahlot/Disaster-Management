import React ,{useEffect,useState } from "react";
import { Link  } from "react-router-dom";

// import './App.css';
const LoadList=()=>{
    const [loads,setLoads]  = useState([]);

    useEffect(() =>{
        getLoads();
    },[])
    const getLoads = async ( )=>{
        let result  = await fetch('http://localhost:5000/loads');
        result = await result.json();
        setLoads(result);
    }
     
const deleteLoad = async (id)=>{
   let result = await fetch(`http://localhost:5000/load/${id}`,{
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
         <h3>Load List</h3>
         <ul>
            <li>S.No</li>
            <li>LoadUID</li>
            <li>Load-Name</li>
            <li>Load-Lw</li>
            <li>Load-Lv</li>
            <li>Load-Lp</li>
            <li>Operation</li>
         </ul>
          
         {
            loads.map((item,index)=>
            <ul key = {item._id}>
            <li>{index+1}</li>
            <li>{item.loaduid}</li>
            <li> {item.loadname}</li>
            <li>{item.loadlw}</li>
            <li>{item.loadlv}</li>
            <li>{item.loadlp}</li>
            <li>
                <button onClick={()=>deleteLoad(item._id)}>Delete</button>
                <Link to ={"/load/update/"+item._id}>Update</Link>
                <Link to ={"/load/add"}>Add</Link>
                </li>
         </ul>)
         }
         </div>
          
          
    )

}
export default LoadList;