import React from "react";
import { useLocation } from "react-router";
import qs from "qs";
import Info from "../components/Info";
import { Grid, ResultPage } from "../GlobalStyle";
const data = require("../data.json");

/* 동호회 이름 검색 결과 페이지 */
const SearchResultPage = () => {
  const location = useLocation();
  const nameQuery = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const name = nameQuery.name;
  return (
    <ResultPage>
      <Grid>
        {data.map((d, index) => {
          return d.club_nm.includes(name) ? <Info index={index} /> : null;
        })}
      </Grid>
    </ResultPage>
  );
};
export default SearchResultPage;
