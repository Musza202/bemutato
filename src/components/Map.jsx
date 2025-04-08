import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  // A koordináták
  const latitude =47.00111;
  const longitude =20.62531;
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={17} style={{ height: '500px', width: '90%', margin: '0 auto' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={new L.Icon.Default()}>
        <Popup>
          <strong>Teleki Blanka Gimnázium</strong><br /> 
          GPS koordináták: {latitude}, {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
