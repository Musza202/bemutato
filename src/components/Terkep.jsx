import React from "react";
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';


export default function Terkep(){
    const latitide = 50.059629;
    const longitude = 14.446459;
    const position = [latitide,longitude];
    return(
        <>
        <h1>Teleki</h1>
        <MapContainer center={position} zoom={17} style={{ height: '500px', width: '90%', margin: '0 auto' }}>
            <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position = {position}>
                <Popup>
                    <strong> Teleki</strong><br />

                </Popup>
            </Marker>
        </MapContainer>
        </>
        
    )
}