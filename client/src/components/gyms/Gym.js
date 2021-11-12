import React, { useRef, useEffect, useState } from 'react';
import ApiService from '../../ApiService';
import './Gym.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Pls don't hate me for how messy this is

export default function Gym() {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic3dhcmdlIiwiYSI6ImNrdnJhZ3h0ejJhajgycW91NGh6a2RlanQifQ.aV2Rqje77LMUMfJI-McKEg';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-118.2437);
  const [lat, setLat] = useState(34.052);
  const [zoom, setZoom] = useState(14.5);

  function addMarkers(data) {
    /* For each feature in the GeoJSON object above: */
    for (const marker of data.features) {
      const el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker';

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);

      el.addEventListener('click', (e) => {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing = document.getElementById(`listing-${marker.id}`);
        // listing.classList.add('active');
      });
    }
  }

  function buildLocationList(data) {
    for (const gym of data.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${gym.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';

      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = `link-${gym.id}`;
      link.innerHTML = `${gym.text}`;

      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${gym.properties.address}`;
      if (gym.properties.distance) {
        const roundedDistance = Math.round(gym.properties.distance * 100) / 100;
        details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
      }
      link.addEventListener('click', function () {
        for (const feature of data.features) {
          if (this.id === `link-${feature.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    }
  }

  function flyToStore(currentFeature) {
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>${currentFeature.text}</h3><h4>${currentFeature.properties.address}</h4>`
      )
      .addTo(map.current);
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

      map.current.addSource('places', {
        type: 'geojson',
        data: gymLocations,
      });
      addMarkers(gymLocations);
      buildLocationList(gymLocations);
    });
  });

  return (
    <div>
      <div className="sidebar">
        <div className="heading">
          <h3>Local gyms</h3>
        </div>
        <div id="listings" className="listings"></div>
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
