import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function BaseMap(): React.ReactElement {
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

    map.on("click", (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["places-i-have-lived"],
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // console.log(feature);

      // Code from the next step will go here.
      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<p className="mapboxgl-popup-content">${feature.properties.safe_address}, ${feature.properties.move_date}</p>`
        )
        .addTo(map);
    });
  });

  return <div id="mapContainer" className="w-full h-full" />;
}
