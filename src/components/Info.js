import React from "react";
import styled from "styled-components";
const data = require("../data.json");
const Card = styled("div")`
  border: 1px dotted gray;
  padding: 1.5rem;
  font-family: "Do Hyeon", sans-serif;
  & > h3 {
    font-size: 1.4rem;
    margin-top: 0;
  }
`;
const StyledDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;

  & > span {
    max-width: 50%;
    font-size: 1.1rem;
  }
`;
const StyledContent = styled("p")`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 0;
  cursor: pointer;
  transition: display 0.5s ease-in;
  &:hover {
    display: block;
  }
`;

const Info = ({ index }) => {
  const object = data[index];
  return (
    <Card>
      <h3>{object.club_nm}</h3>
      <StyledDiv>
        <span>
          {object.ctprvn_nm} {object.signgu_nm}
        </span>
        <span>
          {object.item_nm === "기타" ? object.subitem_nm : object.item_nm}
        </span>
      </StyledDiv>
      <StyledContent>{object.club_intrcn_cn}</StyledContent>
      <StyledDiv>
        <span>{object.trobl_ty_nm}</span>
        <span>{object.oper_time_cn}</span>
      </StyledDiv>
    </Card>
  );
};
export default Info;
