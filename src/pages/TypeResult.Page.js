import React from "react";
import { useLocation } from "react-router";
import qs from "qs";
import Info from "../components/Info";
import { Grid, ResultPage } from "../GlobalStyle";
const data = require("../data.json");

const TypeResultPage = () => {
  //query가 업데이트 되지 않는 오류가 있음
  const location = useLocation();
  const typeQuery = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const obstacleType = typeQuery.obs;
  return (
    <ResultPage>
      <Grid>
        {data.map((d, index) => {
          return d.trobl_ty_nm === obstacleType ? <Info index={index} /> : null;
        })}
      </Grid>
    </ResultPage>
  );
};
export default TypeResultPage;
