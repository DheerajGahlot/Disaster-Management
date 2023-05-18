import React, { useState ,useRef } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import  List from "@material-ui/core/List";
import  ListItem from "@material-ui/core/ListItem";
import  ListItemIcon from "@material-ui/core/ListItemIcon";
import  ListItemText from "@material-ui/core/ListItemText";


const NOMINATIM_BASE_URL ="https://nominatim.openstreetmap.org/search? ";
const params = {
    q: '',
    format : 'json',
    addressdetails : 'addressdetails'

}
const Deport_SearchBox =(props)=>{
    const {selectPosition ,setSelectPosition } = props;
   const [serachText ,setSearchText] = useState("");
   const [listPlace , setListPlace] = useState([]);
  return(
       <div style={ { display:"flex" , flexDirection:"column"}} >
       <div style={{display:"flex"}}>
       <div style={{flex :1}}>
        <OutlinedInput 
        style={{width : "100%"}} 
        value = {serachText}
        onChange = { (event) =>{
          setSearchText(event.target.value);
        }}
        />
        </div> 
      <div style={{display :"flex" ,alignItems :"center"}}>
      <Button variant="contained" color="primary" onClick={()=>
    {

    const params = {
      q: serachText,
      format : 'json',
      addressdetails : 1,
      polygon_geojson: 0

       };

       const queryString = new URLSearchParams(params).toString();
       const requestOptions = {
        method : "GET",
        redirect : "follow"
       };
       fetch(`${NOMINATIM_BASE_URL}${queryString}`,requestOptions).then((respose) => respose.text()).then((result) =>{
        console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
       }).catch((err)=> console.log("err :" , err));
    
    }}>Search</Button>
      </div> 
      </div>
      <div>
      <List component="nav" aria-label="main mailbox folders">
        {
            listPlace.map((item)=>{
                return(
                  <div key={item?.osm_id}>
                       <ListItem button onClick ={() => {
                        setSelectPosition(item); 
                       }}>
                <ListItemIcon>
                    < img src="./Placeholder.jpeg" alt ="Placeholder" style={{ width: 38 , height : 38}} />
              </ListItemIcon>
              <ListItemText primary = {item?.display_name} />

      </ListItem>
                  </div>
                );
            })
        }
   
     </List>
      </div>
    </div>
    
  )

}
export default Deport_SearchBox;

 
 
 