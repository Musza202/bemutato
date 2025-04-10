import React from "react";
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import L from 'leaflet';
import icon from "leaflet/dist/images/marker-icon.png"
import 'leaflet/dist/leaflet.css';


export default function Terkep(){
    const latitide = 50.070;
    const longitude = 14.446459;
    const position = [latitide,longitude];
    const customIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [25, 41], 
        iconAnchor: [12, 41],
        popupAnchor: [1, -34], 
    })
    const adatok = [
        {nev: "Károly híd", hossz: 14.4114, szeles: 50.0865},
        {nev: "Prágai vár", hossz: 14.3986, szeles: 50.0900},
        {nev: "Óvárosi tér", hossz: 14.4212, szeles: 50.0870},
        {nev: "Szent Vitus-székesegyház", hossz: 14.3986, szeles: 50.0904},
        {nev: "Zsidó negyed", hossz: 14.4210, szeles: 50.0900},
        {nev: "Petrín kilátó", hossz: 14.4000, szeles: 50.0836},
        {nev: "Vencel tér", hossz: 14.4378, szeles: 50.0755},
        {nev: "Nemzeti Múzeum", hossz: 14.4212, szeles: 50.0755},
        {nev: "John Lennon-fal", hossz: 14.4072, szeles: 50.0858},
        {nev: "Táncoló ház", hossz: 14.4114, szeles: 50.0755},
        {nev: "Vyšehrad", hossz: 14.4196, szeles: 50.0670},
        {nev: "Nemzeti Színház", hossz: 14.4068, szeles: 50.0794}
      ];
    return(
        <>
        <h1>Teleki</h1>
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '90%', margin: '0 auto' }}>
            <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {adatok.map((marker,index)=>(
                <Marker position = {[marker.szeles,marker.hossz]} icon={customIcon}>
                    <Popup>
                        <strong> {marker.nev}</strong><br />

                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        </>
        
    )
}