import React, { useRef, useEffect, useState } from 'react';
import './Gym.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function Gym() {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3dhcmdlIiwiYSI6ImNrdnJhZ3h0ejJhajgycW91NGh6a2RlanQifQ.aV2Rqje77LMUMfJI-McKEg';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-6.26);
  const [lat, setLat] = useState(53.348);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
      },
      function (e) {
        console.error(e);
      }
    );
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/swarge/ckvrajarj98pc14pfqn5n4uwl',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <p>gym</p>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
