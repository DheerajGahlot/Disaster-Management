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
    const [warehousepointtype,setWarehousepointtype] = useState("");
    const [warehousepointname,setWarehousepointname] = useState("");
    const [warehousepointlatitude,setWarehousepointlatitude] = useState("");
    const [warehousepointlongitude,setWarehousepointlongitude]= useState("");
  useMapEvent("contextmenu", async (event) => {
    const marker = L.marker(event.latlng, { icon }).addTo(map);
    const spec = "Warehouse";
    setWarehousepointtype(spec);
    setWarehousepointlatitude(event.latlng.lat);
    setWarehousepointlongitude(event.latlng.lng);

     
    const name = prompt("Enter a name for this point:");
    setWarehousepointname(name);

    console.log(warehousepointtype);
    console.log(warehousepointname);
    console.log(warehousepointlatitude);
    console.log(warehousepointlongitude);
   let result = await fetch('http://localhost:5000/add-warehousepoint',{
        method : 'POST',
        body :JSON.stringify({warehousepointtype ,warehousepointname,warehousepointlatitude,warehousepointlongitude}),
        headers:{
            'Content-Type' :'application/json'
        },
            });
            result = await result.json()
            console.warn(result);
             localStorage.setItem("warehousepoint",JSON.stringify(result));
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

 

const WarehouseMap = (props) => {
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

export default WarehouseMap;



 
