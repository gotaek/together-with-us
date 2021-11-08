import React from "react";
const SearchResult = ({ location }) => {
  const query = new URLSearchParams(location.search).get("q");
  console.log(query);

  return <div>{query}</div>;
};
export default SearchResult;
