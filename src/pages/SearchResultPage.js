import React from "react";

const data = require("../data.json");

const SearchResultPage = ({ location }) => {
  const nameQuery = new URLSearchParams(location.search).get("name");

  return <>검색결과</>;
};
export default SearchResultPage;
