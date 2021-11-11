import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SearchBar from "../components/SearchBar";

/* 홈 페이지 */
const Home = () => {
  const navigate = useNavigate();
  const contents = [
    { color: "#C5AFA4", text: "지체장애" },
    { color: "#FFD0BD", text: "지적장애" },
    { color: "#AFCCA7", text: "시각장애" },
    { color: "#B8C3C5", text: "청각장애" },
    { color: "#EED89C", text: "뇌병변장애" },
    { color: "#D1758F", text: "기타장애" },
  ];
  const typeBoxClickHandler = (type) => {
    navigate(`/type?obs=${type}`);
  };
  const leftBoxClickHandler = () => {
    navigate("/location");
  };
  return (
    <HomeContainer>
      <LeftBox color={"#EAC092"} onClick={leftBoxClickHandler}>
        내 주변 동호회 추천받기
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
  font-size: 2rem;
  transition: color 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `};
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 200;
  }
`;
const LeftBox = styled(Box)`
  background: ${(props) => props.color || "black"};
  color: ${(props) => props.color || "black"};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    filter: saturate(80%);
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
  color: #230304;
  text-align: center;
  font-size: 3rem;
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
    filter: saturate(80%);
  }
`;
