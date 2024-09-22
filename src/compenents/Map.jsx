import React from "react";
import "../css/Map.css";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

const Map = (pathCoordinates) => {
  return (
    <div className="Map">
      <MapContainer
              center={[18.9124, 75.7873]}
              zoom={5}
              style={{ height: "500px", width: "100%", borderRadius: "10px" }}
            >
              {/* Base map layer */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {/* Polyline for path */}
              <Polyline positions={pathCoordinates} color="blue" weight={5} />
            </MapContainer>
    </div>
  );
};

export default Map;
