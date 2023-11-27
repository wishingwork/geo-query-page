import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function GoogleMap(props) {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
      version: "weekly",
    });
    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary("maps");
      new Map(document.getElementById(props.id), props.options);
    });
  }, [props.id, props.options]);
  return <div id={props.id} style={{ height: "100%", width: "100%" }} />;
}
export default GoogleMap;
