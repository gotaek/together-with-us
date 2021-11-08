import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchValue}`);
    }
  };
  const changeHndler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={changeHndler} onKeyPress={keyPressHandler} />
    </>
  );
};
export default SearchBar;
