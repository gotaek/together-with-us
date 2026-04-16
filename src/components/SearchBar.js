import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import VisuallyHidden from "./VisuallyHidden";

/* 검색바 */
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const keyDownHandler = (e) => {
    if (e.key === "Enter") navigate(`/search?name=${searchValue}`);
  };
  const changeHandler = (e) => setSearchValue(e.target.value);
  const searchClickHandler = () => navigate(`/search?name=${searchValue}`);
  const searchKeyDownHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/search?name=${searchValue}`);
    }
  };

  return (
    <SearchBarContainer role="search">
      <VisuallyHidden as="label" htmlFor="search-input">
        동호회 이름 검색
      </VisuallyHidden>
      <StyledInput
        id="search-input"
        type="text"
        placeholder="동호회 이름을 검색해보세요"
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        aria-label="동호회 이름 검색"
      />
      <SearchButton
        type="button"
        onClick={searchClickHandler}
        onKeyDown={searchKeyDownHandler}
        aria-label="검색"
      >
        <GoSearch aria-hidden="true" />
        <VisuallyHidden>검색</VisuallyHidden>
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 540px;
  background: #fff;
  border: 2.5px solid var(--color-primary);
  border-radius: 999px;
  padding: 0.35rem 0.35rem 0.35rem 1.3rem;
  box-shadow: 0 2px 14px rgba(27, 77, 126, 0.12);
  transition: box-shadow var(--transition), border-color var(--transition);

  &:focus-within {
    border-color: var(--color-focus);
    box-shadow: 0 0 0 3px rgba(0, 87, 168, 0.18);
  }
`;

const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9A9A9A;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  border: none;
  font-size: 1.35rem;
  flex-shrink: 0;
  transition: background var(--transition), transform 0.15s;

  &:hover {
    background: var(--color-primary-dark);
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
`;
