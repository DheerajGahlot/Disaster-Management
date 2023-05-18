 
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AddVehicle from './components/Vehicle/AddVechicle';
import UpdateVehicle from './components/Vehicle/UpdateVehicle';
import VehicleList from './components/Vehicle/VehicleList';

import LoadList from './components/Load/LoadList';
import AddLoad from './components/Load/AddLoad';
import UpdateLoad from './components/Load/UpdateLoad';

import PickupList from './components/Pickup/PickupList';
import AddPickup from './components/Pickup/AddPickup';
import UpdatePickup from './components/Pickup/UpdatePickup';
import Deport_Join from './components/Deport_Point/Deport_Join';
import Transshipment_Join from './components/Transshipment_Point/Transshipment_Join';
import Node_Join from './components/Node_Point/Node_Join';
import Relief_Join from './components/Relief_Point/Relief_Join';
import Warehouse_Join from './components/Warehouse_Point/Warehouse_Join';
import AddVehicleload from './components/Vehicle_Load/AddVehicleLoad'; 
import UpdateVehicleload from './components/Vehicle_Load/UpdateVehicleLoad';
import VehicleloadList from './components/Vehicle_Load/Vehicle_LoadList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route > 
        <Route path="/" element={ <VehicleList/>}/>
        <Route path="/add" element={<AddVehicle/>}/> 
        <Route path="/update/:id" element={ <UpdateVehicle/>}/>
        <Route path="/load" element={ <LoadList/>}/>
        <Route path="/load/add" element={<AddLoad/>}/> 
        <Route path="/load/update/:id" element={ <UpdateLoad/>}/>
        <Route path="/pickup" element={ <PickupList/>}/>
        <Route path="/pickup/add" element={<AddPickup/>}/> 
        <Route path="/pickup/update/:id" element={ <UpdatePickup/>}/>
        <Route path="/deportmap" element={ <Deport_Join/> }/>
        <Route path="/transshipmentmap" element={ <Transshipment_Join/> }/>
        <Route path="/nodemap" element={ < Node_Join/> }/>
        <Route path="/reliefmap" element={ < Relief_Join/> }/>
        <Route path="/warehousemap" element={ < Warehouse_Join/> }/>
        <Route path="/vehicleload" element={ <VehicleloadList/>}/>
        <Route path="/vehicleload/add" element={<AddVehicleload/>}/> 
        <Route path="/vehicleload/update/:id" element={ <UpdateVehicleload/>}/>

        
      
         
          
      
        </Route>
        
      </Routes>
       </BrowserRouter>
       
       
       
    </div>
  );
}

export default App;
