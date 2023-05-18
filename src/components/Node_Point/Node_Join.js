import React ,{useState} from "react";
// import SearchBox from '../Deport_Point/Deport_SearchBox';
import NodeMap from "./Node_Map";
import BasicMap from '../Deport_Point/Deport_Map';
import Node_SearchBox from "./Node_SearchBox";
// import DeportpointList from "../Deport_Point/DeportPoints";
import NodepointList from "./NodePoint";
const Node_Join =()=>{
    const [selectPosition, setSelectPosition]= useState(null);
    console.log(selectPosition);
    return(
         <div>
        <div  className="lifestyle"   style ={ {width:'100%' , height : '200px'}}>
            <Node_SearchBox selectPosition={selectPosition}  setSelectPosition={setSelectPosition}/>
        </div>
        <div>
            <NodeMap selectPosition={selectPosition}  />
        </div>
        <div>
            <NodepointList />
        </div>
         </div>
    )

}
export default Node_Join;