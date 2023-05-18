import React from 'react';
 import {  Link } from 'react-router-dom';
 
 

const Nav =()=>{
     return (
            <div>
              
                <ul className="nav-ul">
                <li><Link to="/">Vehicles</Link></li>
                <li><Link to="/load">Loads</Link></li>
                <li><Link to="/pickup">Pickups</Link></li>
                <li><Link to="/transshipmentmap">TransShipment Point Map</Link></li>
                <li><Link to="/deportmap">Deport Point Map</Link></li>
                <li><Link to="/nodemap">Node Point Map</Link></li>
                <li><Link to="/reliefmap">Relief Point Map</Link></li>
                <li><Link to="/warehousemap">WareHouse Point Map</Link></li>
                <li><Link to="/vehicleload"> Vehicle-load</Link></li>

                
                
               </ul>
                
          

            </div>
        )
}

export default Nav;