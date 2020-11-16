import React from 'react';
import { MapBox } from './styles';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [80, 2]
})

function Map() {
  return (
    <MapBox>

      <MapContainer
        center={[-30.9794647,-54.6715319]}
        zoom={19}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        style={{
          width: '79vw',
          height: '20vh',
          border: '1px solid #7EC9F3',
          borderRadius: '8px',
          marginLeft: '1rem',
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          icon={mapIcon}
          interactive={false}
          position={[-30.9794647,-54.6715319]}>
        </Marker>
      </MapContainer>

    </MapBox>

  )
}

export default Map;
