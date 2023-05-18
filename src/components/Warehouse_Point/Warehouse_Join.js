import React ,{useState} from "react";
import SearchBox from '../Deport_Point/Deport_SearchBox';
 
 import WarehousepointList from "./WarehousePoint";
 import WarehouseMap from "./Warehouse_Map";
const Warehouse_Join =()=>{
    const [selectPosition, setSelectPosition]= useState(null);
    console.log(selectPosition);
    return(
         <div>
        <div  className="lifestyle"   style ={ {width:'100%' , height : '200px'}}>
            <SearchBox selectPosition={selectPosition}  setSelectPosition={setSelectPosition}/>
        </div>
        <div>
            <WarehouseMap selectPosition={selectPosition}  />
        </div>
        <div>
            <WarehousepointList />
        </div>
         </div>
    )

}
export default Warehouse_Join;