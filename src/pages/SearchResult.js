import React, { useEffect, useState } from "react";
import { getCurrentAddress } from "../API/getCurrentAddress";
const data = require("../data.json");
console.log(data);
const SearchResult = ({ location }) => {
  const [coord, setCoord] = useState({ longitude: "", latitude: "" });
  const query = new URLSearchParams(location.search).get("name");

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
  return <div>{query}</div>;
};
export default SearchResult;
