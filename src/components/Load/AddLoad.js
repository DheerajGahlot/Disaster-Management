import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddLoad =()=>{
    const [loaduid,setLoaduid] = useState("");
    const [loadname,setLoadname] = useState("");
    const [loadlw,setLoadlw]= useState("");
    const [loadlv,setLoadlv]= useState("");
    const [loadlp,setLoadlp]= useState("");
    const [error,setError]= useState(false);
    const  navigate = useNavigate();
    const addLoad= async()=>{

        console.warn(  loaduid , loadname, loadlw, loadlv, loadlp );
        if(!loaduid  || !loadname || !loadlw || ! loadlv ||!loadlp)
        {
            setError(true);
            return false;
        }
         
        let result = await fetch('http://localhost:5000/add-load',{
            method : 'post',
            body :JSON.stringify({loaduid ,loadname,loadlw,loadlv,loadlp}),
            headers:{
                'Content-Type' :'application/json'
            },
                });
                result = await result.json()
                console.warn(result);
                 localStorage.setItem("load",JSON.stringify(result))
                    navigate('/load')
                 
    }
    return (
        <div>
            <h1>Add Load</h1>

            <input className ="inputbox" type="text" value={loaduid} onChange={(e)=>  setLoaduid(e.target.value)}  placeholder="Enter Load UID" />
            { error && !loaduid && <span className="invaid-input">Enter Valid Load UID</span>}
            <input className ="inputbox" type="text" value={loadname} onChange={(e)=>  setLoadname(e.target.value)}  placeholder="Enter Load Name"/>
            { error && ! loadname && <span className="invaid-input">Enter Valid Load Name</span>}
             <input className ="inputbox" type="text" value={loadlw} onChange={(e)=>  setLoadlw(e.target.value)}  placeholder="Enter  Load Lw " />
             { error && ! loadlw &&  <span className="invaid-input">Enter Valid Load Lw</span>}
             <input className ="inputbox" type="text" value={loadlv} onChange={(e)=>  setLoadlv(e.target.value)}  placeholder="Enter  Load Lv " />
             { error && ! loadlv &&  <span className="invaid-input">Enter Valid Load Lv</span>}
             <input className ="inputbox" type="text" value={loadlp} onChange={(e)=>  setLoadlp(e.target.value)}  placeholder="Enter  Load Lp " />
             { error && ! loadlp &&  <span className="invaid-input">Enter Valid Load Lp</span>}
            <button onClick={addLoad}  className="appButton" type="button">Add Product</button>
             
        </div>
    )
}

export default AddLoad;