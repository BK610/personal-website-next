import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "./BaseMap.scss";

const BaseMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYms2MTAiLCJhIjoiY2t6NzF6aXNlMDhsZjMybW10cGU1eHNhaSJ9.CRk8M6h9zT_j4mieCgI9bg";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/bk610/ckz729y46001t14uvxg7zuqpf",
      center: [-71.95359716485645, 43.425838945936015],
      zoom: 9,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);

  return <div id="mapContainer" className="w-full h-full"></div>;
};

export default BaseMap;
