import React, { useEffect, useRef ,useState ,setError } from "react";

import {
  MapContainer,
  TileLayer,
  
  useMapEvent,
  useMap,
} from "react-leaflet";
import osm from "../osm.providers";
 
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "./Placeholder.jpeg",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();
    const [deportpointtype,setDeportpointtype] = useState("");
    const [deportpointname,setDeportpointname] = useState("");
    const [deportpointlatitude,setDeportpointlatitude] = useState("");
    const [deportpointlongitude,setDeportpointlongitude]= useState("");
  useMapEvent("contextmenu", async (event) => {
    const marker = L.marker(event.latlng, { icon }).addTo(map);
    const spec = "Deport";
    setDeportpointtype(spec);
    setDeportpointlatitude(event.latlng.lat);
    setDeportpointlongitude(event.latlng.lng);

     
    const name = prompt("Enter a name for this point:");
    setDeportpointname(name);

    console.log(deportpointtype);
    console.log(deportpointlatitude);
    console.log(deportpointlongitude);
    console.log(deportpointname);
   let result = await fetch('http://localhost:5000/add-deportpoint',{
        method : 'POST',
        body :JSON.stringify({deportpointtype ,deportpointname,deportpointlatitude,deportpointlongitude}),
        headers:{
            'Content-Type' :'application/json'
        },
            });
            result = await result.json()
            console.warn(result);
             localStorage.setItem("deportpoint",JSON.stringify(result));
  })


   
 
  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition]);
  return null;
}

 

const DeportMap = (props) => {
  const { selectPosition } = props;
 
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const mapRef = useRef();

  

  return (
    <div>
      <MapContainer 
        center={position}
        zoom={15}
        ref={mapRef}
        style={{ width: "100%", height: "680px" }}
        
      >
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}  />
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
       
      
    </div>
  );
};

export default DeportMap;



 
