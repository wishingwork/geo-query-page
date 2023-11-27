import { useState } from "react";
import GeoInputCity from "../GeoInputCity";
import GeoInputNav from "../GeoInputNav";
import GoogleMap from "../GoogleMap";
function GeoInput() {
  const [geoInputType, setGeoInputType] = useState("city");
  return (
    <>
      <GeoInputNav
        geoInputType={geoInputType}
        setGeoInputType={setGeoInputType}
      />
      {geoInputType === "map" ? (
        <GoogleMap
          id="myMap"
          options={{
            center: { lat: 25, lng: 120 },
            zoom: 6,
            gestureHandling: "auto",
          }}
        />
      ) : (
        <GeoInputCity />
      )}
    </>
  );
}
export default GeoInput;
