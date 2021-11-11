import React from "react";
import { useLocation } from "react-router";
import qs from "qs";
import Info from "../components/Info";
import { Grid, ResultPage } from "../GlobalStyle";
const data = require("../data.json");

/* 장애 유형을 통해 동호회를 추천하는 페이지 */
const TypeResultPage = () => {
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
