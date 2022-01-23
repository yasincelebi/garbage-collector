import React, { useContext, useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import { ItemContext } from "../context/SelectedItem";

const Markerwhatever = (props: any) => {
  const { item } = useContext(ItemContext);

  const location = {
    lat: item.location.latitude,
    lng: item.location.longitude,
  };

  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 18);
  }, [item]);

  return (
    <div>
      <Marker icon={props.icon} position={location}></Marker>
    </div>
  );
};

export default Markerwhatever;
