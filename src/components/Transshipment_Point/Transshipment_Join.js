import React ,{useState} from "react";
 
import BasicMap from '../Deport_Point/Deport_Map';
import TransshipmentMap from "./Transshipment_Map";
import Transshipment_SearchBox from "./Transshipment_SearchBox";
 
import TransshipmentpointList from "./TransshipmentPoint";
const Transshipment_Join =()=>{
    const [selectPosition, setSelectPosition]= useState(null);
    console.log(selectPosition);
    return(
         <div>
        <div  className="lifestyle"   style ={ {width:'100%' , height : '200px'}}>
            <Transshipment_SearchBox selectPosition={selectPosition}  setSelectPosition={setSelectPosition}/>
        </div>
        <div>
            <TransshipmentMap selectPosition={selectPosition}  />
        </div>
        <div>
            <TransshipmentpointList />
        </div>
         </div>
    )

}
export default Transshipment_Join;