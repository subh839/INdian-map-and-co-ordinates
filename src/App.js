
import React from 'react';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import Sample from './sample';
const center = [21.7, 78.8];

export default function App() {
  return (
    <div className='mapping'>
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=9WFebKyo4SzKO0H6sXG3"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
    </MapContainer>
    <Sample/>
    </div>
  );
}
