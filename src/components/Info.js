import React, { useState } from "react";
import styled from "styled-components";

const data = require("../data.json");

/* 동호회 정보 카드 */
const Info = ({ index }) => {
  const object = data[index];
  const [description, setDescription] = useState(false);
  const clickHandler = () => {
    setDescription(!description);
  };

  return (
    <Card onClick={clickHandler}>
      <h3>{object.club_nm}</h3>
      <StyledDiv>
        <span>
          {object.ctprvn_nm} {object.signgu_nm}
        </span>
        <span>
          {object.item_nm === "기타" ? object.subitem_nm : object.item_nm}
        </span>
      </StyledDiv>
      {description && object.club_intrcn_cn !== "" ? (
        <StyledContent>{object.club_intrcn_cn}</StyledContent>
      ) : null}
      <StyledDiv>
        <span>{object.trobl_ty_nm}</span>
        <span>{object.oper_time_cn}</span>
      </StyledDiv>
    </Card>
  );
};
export default Info;

const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
  & > span:first-child {
    max-width: 40%;
  }
  & > span:last-child {
    max-width: 60%;
  }
`;
const StyledContent = styled("p")`
  /* display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden; */
  color: #755139;
  max-height: max-content;
  margin: 1rem 0;
`;
const Card = styled("div")`
  background: #ebe8e8;
  color: #230304;
  cursor: pointer;
  border-radius: 6px;
  padding: 1rem;
  font-family: "Jua", sans-serif;
  transition: transform 0.2s ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > h3 {
    font-size: 1.4rem;
    margin: 0;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 3px 5px 0px gray;
  }
  ${StyledDiv}:nth-child(2)>span:nth-child(2) {
    color: #96131b;
    font-size: 1.2em;
  }
`;
