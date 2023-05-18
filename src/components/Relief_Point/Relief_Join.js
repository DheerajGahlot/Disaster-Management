import React ,{useState} from "react";
import Relief_SearchBox from "./Relief_SearchBox";

import ReliefMap from "./Relief_Map";
 import ReliefpointList from "./ReliefPoint";
const Relief_Join =()=>{
    const [selectPosition, setSelectPosition]= useState(null);
    console.log(selectPosition);
    return(
         <div>
        <div  className="lifestyle"   style ={ {width:'100%' , height : '200px'}}>
            <Relief_SearchBox selectPosition={selectPosition}  setSelectPosition={setSelectPosition}/>
        </div>
        <div>
            <ReliefMap selectPosition={selectPosition}  />
        </div>
        <div>
            <ReliefpointList />
        </div>
         </div>
    )

}
export default Relief_Join;