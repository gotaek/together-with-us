import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?name=${searchValue}`);
    }
  };
  const changeHndler = (e) => {
    setSearchValue(e.target.value);
  };
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    line-height: 100%;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;
  return (
    <SearchBarContainer>
      <StyledInput
        type="text"
        placeholder="검색할 동호회의 이름을 입력해주세요"
        onChange={changeHndler}
        onKeyPress={keyPressHandler}
      />
      <SearchIcon>
        <StyledLink to={`/search?name=${searchValue}`}>
          <GoSearch />
        </StyledLink>
      </SearchIcon>
    </SearchBarContainer>
  );
};
export default SearchBar;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1.4rem;
  height: 4rem;
  background-color: #d2cbc1;
  border-radius: 1rem;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
  color: #856646;
  font-size: 1.2rem;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5em;
  color: #856646;
  text-decoration: none;
`;
