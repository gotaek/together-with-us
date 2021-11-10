import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SearchBar from "../components/SearchBar";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 25vw;
  height: 100vh;
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
  transition: color 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `};
`;
const LeftBox = styled(Box)`
  background: ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
  }
`;
const RightBox = styled(Box)`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`;
const Container = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  transform: translateY(-60%);
`;
const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
`;

const TypeBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: white;
  }
`;
const Home = () => {
  const navigate = useNavigate();
  const contents = [
    { color: "red", text: "지체장애" },
    { color: "blue", text: "지적장애" },
    { color: "purple", text: "시각장애" },
    { color: "orange", text: "청각장애" },
    { color: "tomato", text: "뇌병변장애" },
    { color: "green", text: "기타장애" },
  ];
  const typeBoxClickHandler = (type) => {
    navigate(`/type?=${type}`);
  };
  const leftBoxClickHandler = () => {
    navigate("/location");
  };
  return (
    <HomeContainer>
      <LeftBox color={"teal"} onClick={leftBoxClickHandler}>
        내 위치로 살펴보기
      </LeftBox>
      <Container>
        <Title>우리 함께</Title>
        <SearchBar />
      </Container>
      <RightBox>
        {contents.map((content, index) => {
          return (
            <TypeBox
              color={content.color}
              key={index}
              onClick={() => {
                typeBoxClickHandler(content.text);
              }}
            >
              {content.text}
            </TypeBox>
          );
        })}
      </RightBox>
    </HomeContainer>
  );
};
export default Home;
