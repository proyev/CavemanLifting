import React, { useRef, useEffect, useContext, useState } from 'react';

import ApiService from '../../ApiService';
import './Gym.css';

import mapboxgl from 'mapbox-gl';

import { CavemanContext } from '../../CavemanContext';

// Pls don't hate me for how messy this is

export default function Gym() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiemVuaWNlayIsImEiOiJja3c0b2JmdG0wNmg4MnZyaGN2dGJhcmJsIn0.pZGBDuB1Hj_9Rjow7q591Q';

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng] = useState(-118.2437);
  const [lat] = useState(34.052);
  const [zoom] = useState(14.5);

  const { appState } = useContext(CavemanContext);

  // const [lng, setLng] = useState(-118.2437);
  // const [lat, setLat] = useState(34.052);
  // const [zoom, setZoom] = useState(14.5);

  function addMarkers(data : any) {
    // For each feature in the GeoJSON object that is recieved from the API call
    for (const marker of data.features) {
      const el = document.createElement('div');
      // Assign a unique `id` to the marker
      el.id = `marker-${marker.id}`;
      // Assign the `marker` class to each marker for styling
      el.className = 'marker';

      //  Create a marker using the div element
      //  defined above and add it to the map.

      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);

      el.addEventListener('click', e => {
        // Fly to the point
        flyToStore(marker);
        // Close all other popups and display popup for clicked store
        createPopUp(marker);
        // Highlight listing in sidebar
        const activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing = document.getElementById(`listing-${marker.id}`);
        listing?.classList.add('active');
      });
    }
  }

  function buildLocationList(data: any) {
    for (const gym of data.features) {
      // Add a new listing section to the sidebar
      const listings = document.getElementById('listings');
      const listing = listings?.appendChild(document.createElement('div'));
      // Assign a unique `id` to the listing
      // Assign the `item` class to each listing for styling
      let link;
      let details;
      if(listing) {
      listing.id = `listing-${gym.id}`;
        listing.className = 'item';
        link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${gym.id}`;
        link.innerHTML = `${gym.text}`;
        // Add the link to the individual listing created above

        // Add details to the individual listing
        details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${gym.properties.address}`;

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
          this.classList?.add('active');
        });
      }

    }
  }

  function flyToStore(currentFeature: any) {
    // flyTo is an internal Mapbox function
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 16,
    });
  }

  function createPopUp(currentFeature: any) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    // VS code will probably give out about this, however it is used for pop-ups on the map
    // eslint-disable-next-line no-unused-vars
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>${currentFeature.text}</h3><h4>${currentFeature.properties.address}</h4>`
      )
      .addTo(map.current);
  }

  useEffect(() => {
    // This is here to simply show that geolocation works no problem
    // If you open the 'Gyms' section on the App, it will request your geoLocation
    // and display it in the console, should you be interested
    // It requests location from the user through the browser
    // It is disabled simply because of my own location, where there are no gyms
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (e) => {
        console.error(e);
      }
    );
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/swarge/ckvu2b0ju2l0z14ujuj06wvsh',
      center: [lng, lat],
      // Manually set to a position in Los Angeles
      zoom,
      // Manually set to a zoom that I believe looks nice
    });
    map.current.on('load', async () => {
      const gymLocations = await ApiService.getGeolocatedGyms(lat, lng);
      // Call the API on load with an async function
      map.current.addSource('places', {
        type: 'geojson',
        data: gymLocations,
      });
      // This adds a 'layer' over the map of all the queryed objects from the aPI
      addMarkers(gymLocations);
      buildLocationList(gymLocations);
    });
  });

  return (
    <div
      style={
        appState?.showNavbar ? {width: '97.5%'} : {width: '92.5%'}
      }
    >
      <div className="sidebar">
        <div className="heading">
          <h1>Local gyms</h1>
        </div>
        <div id="listings" className="listings"></div>
      </div>
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
}
