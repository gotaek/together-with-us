import React, { useEffect, useState } from "react";
import { getCurrentAddress } from "../API/getCurrentAddress";
import { Grid, ResultPage } from "../GlobalStyle";
import Info from "../components/Info";

const data = require("../data.json");

/*위치를 통해 동호회를 추천받는 페이지*/
const AddressResultPage = () => {
  const [coord, setCoord] = useState({ longitude: "", latitude: "" });
  const [myCtprvn, setCtprvn] = useState("");
  const [mySigngu, setSigngu] = useState("");

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
    const fetchData = async () => {
      const location = await getCurrentAddress(coord);
      setCtprvn(location.region_1depth_name.substring(0, 2));
      setSigngu(location.region_2depth_name);
    };
    fetchData();
  }, [coord]);

  return (
    <ResultPage>
      <Grid>
        {data.map((d, index) => {
          return d.signgu_nm.includes(mySigngu) ? <Info index={index} /> : null;
        })}
      </Grid>
    </ResultPage>
  );
};

export default AddressResultPage;
