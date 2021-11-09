import React, { useEffect, useState } from "react";
import { getCurrentAddress } from "../API/getCurrentAddress";

const AddressResultPage = ({ data, query }) => {
  const [coord, setCoord] = useState({ longitude: "", latitude: "" });
  const success = (position) => {
    setCoord({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };
  const error = () => {
    console.log("error");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  useEffect(() => {
    getCurrentAddress(coord);
  }, [coord]);
  return <>{query}</>;
};

export default AddressResultPage;
