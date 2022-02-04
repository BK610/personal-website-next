import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const BaseMap = () => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/bk610/ckz729y46001t14uvxg7zuqpf", // My custom style, from Mapbox Studio configuration
      center: [-71.95359716485645, 43.425838945936015], // Centered on Pleasant Lake
      zoom: 9,
    });

    map.addControl(
      // Add Fullscreen element. https://docs.mapbox.com/mapbox-gl-js/api/markers/#fullscreencontrol
      new mapboxgl.FullscreenControl()
    );

    map.addControl(
      // Add Navigation elements. https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol
      new mapboxgl.NavigationControl()
    );

    map.addControl(
      // Add Geolocate button to find users. https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);

  return <div id="mapContainer" className="w-full h-full"/>;
};

export default BaseMap;
