import React, { useRef, useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import './Gym.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export default function Gym() {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3dhcmdlIiwiYSI6ImNrdnJhZ3h0ejJhajgycW91NGh6a2RlanQifQ.aV2Rqje77LMUMfJI-McKEg';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-118);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(15);

  function addMarkers(data) {
    /* For each feature in the GeoJSON object above: */
    for (const marker of data.features) {
      /* Create a div element for the marker. */
      const el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker';

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    }
  }

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
      style: 'mapbox://styles/swarge/ckvu2b0ju2l0z14ujuj06wvsh',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on('load', async () => {
      const gymLocations = await ApiService.getGeolocatedGyms(lat, lng);
      console.log(gymLocations);
      //   map.current.addLayer({
      //     id: 'locations',
      //     type: 'circle',
      //     source: {
      //       type: 'geojson',
      //       data: gymLocations,
      //     },
      //   });
      map.current.addSource('places', {
        type: 'geojson',
        data: gymLocations,
      });
      addMarkers(gymLocations);
    });
  });

  return (
    <div>
      <p>gym</p>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
