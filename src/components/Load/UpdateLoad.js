import React,  {useEffect, useState} from 'react';
import { useNavigate ,useParams } from 'react-router-dom';

const UpdateLoad  =()=>{
    const [loaduid,setLoaduid] = useState("");
    const [loadname,setLoadname] = useState("");
    const [loadlw,setLoadlw]= useState("");
    const [loadlv,setLoadlv]= useState("");
    const [loadlp,setLoadlp]= useState("");

    const params = useParams();
    const  navigate = useNavigate();
    useEffect(()=>{
         getLoadDetails();
    },[])

    const getLoadDetails = async () =>{
        let result = await fetch(`http://localhost:5000/load/${params.id}`);
        result = await result.json();
         setLoaduid(result.loaduid);
         setLoadname(result.loadname);
         setLoadlw(result.loadlw);
         setLoadlv(result.loadlv);
         setLoadlp(result.loadlv);
    }

    
    const updateLoad= async()=>{
        console.warn( loaduid,  loadname, loadlw, loadlv, loadlv)
        let result = await fetch(`http://localhost:5000/load/${params.id}`,{
            method : "Put",
            body : JSON.stringify({loaduid,  loadname, loadlw, loadlv, loadlp}),
            headers:{
                'Content-Type':"application/json"
            }

        });
        result = await result.json()
        console.warn(result)
        navigate('/load')

    }

        
         
    return (
        <div>
            <h1>Update Load</h1>
            <input className ="inputbox" type="text" value={loadname} onChange={(e)=>  setLoaduid(e.target.value)}  placeholder="Enter Load UID" />
            
            <input className ="inputbox" type="text" value={loadname} onChange={(e)=>  setLoadname(e.target.value)}  placeholder="Enter Load Name"/> 

            <input className ="inputbox" type="text" value={loadlw} onChange={(e)=>  setLoadlw(e.target.value)}  placeholder="Enter  Load lw " />

            
             <input className ="inputbox" type="text" value={loadlv} onChange={(e)=>  setLoadlv(e.target.value)}  placeholder="Enter  Load lv " />
            
             <input className ="inputbox" type="text" value={loadlp} onChange={(e)=>  setLoadlp(e.target.value)}  placeholder="Enter  Load lp " />
            
            <button onClick={updateLoad}  className="appButton" type="button">Update Load</button>
             
        </div>
    )
}

export default UpdateLoad;