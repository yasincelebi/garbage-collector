import { Icon, map } from "leaflet";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import Markerwhatever from "./Marker";

interface IProps {
  latitude: number;
  longitude: number;
}
const Location = ({ coordinates }: { coordinates: IProps }) => {
  const [position, setPosition] = React.useState<any>({
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  });
  useEffect(() => {
    setPosition({
      lat: coordinates.latitude.toFixed(2),
      lng: coordinates.longitude.toFixed(2),
    });
  }, [coordinates]);

  return (
    <div style={{ height: "500px", outline: "1px solid black" }}>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position}
        fadeAnimation={true}
        zoom={18}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Markerwhatever
          icon={
            new L.Icon({
              iconUrl: require("../assets/marker.png"),
              iconSize: new L.Point(50, 70),
              className: "little-blue-dot-",
            })
          }
        />
      </MapContainer>
    </div>
  );
};

export default Location;
