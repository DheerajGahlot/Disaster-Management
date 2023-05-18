import React ,{useState} from "react";
import SearchBox from './Deport_SearchBox';
import BasicMap from './Deport_Map';
import DeportpointList from "./DeportPoints";
const Deport_Join =()=>{
    const [selectPosition, setSelectPosition]= useState(null);
    console.log(selectPosition);
    return(
         <div>
        <div  className="lifestyle"   style ={ {width:'100%' , height : '200px'}}>
            <SearchBox selectPosition={selectPosition}  setSelectPosition={setSelectPosition}/>
        </div>
        <div>
            <BasicMap selectPosition={selectPosition}  />
        </div>
        <div>
            <DeportpointList />
        </div>
         </div>
    )

}
export default Deport_Join;