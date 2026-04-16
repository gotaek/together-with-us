import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import {
  FaMapMarkerAlt,
  FaWheelchair,
  FaBrain,
  FaEye,
  FaVolumeOff,
  FaHeartbeat,
  FaHeart,
  FaChevronRight,
} from "react-icons/fa";

const typeContents = [
  { label: "지체장애", icon: FaWheelchair, accent: "#1A4480" },
  { label: "지적장애", icon: FaBrain,      accent: "#1C7A5B" },
  { label: "시각장애", icon: FaEye,        accent: "#5C3D99" },
  { label: "청각장애", icon: FaVolumeOff,  accent: "#8B4513" },
  { label: "뇌병변장애", icon: FaHeartbeat, accent: "#A61C00" },
  { label: "기타장애",  icon: FaHeart,     accent: "#006B75" },
];

const Home = () => {
  const navigate = useNavigate();

  const typeBoxClickHandler = (type) => navigate(`/type?obs=${type}`);
  const typeBoxKeyDownHandler = (e, type) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/type?obs=${type}`);
    }
  };
  const leftBoxClickHandler = () => navigate("/location");
  const leftBoxKeyDownHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate("/location");
    }
  };

  return (
    <PageWrapper id="main-content" as="main">
      <Inner>
        {/* 헤더 */}
        <HeroSection>
          <SiteTitle>우리 함께</SiteTitle>
          <SiteSubtitle>장애인 생활체육 동호회를 쉽고 빠르게 찾아보세요</SiteSubtitle>
        </HeroSection>

        {/* 검색 */}
        <SearchSection>
          <SearchBar />
        </SearchSection>

        {/* 위치 기반 버튼 */}
        <LocationButton
          tabIndex={0}
          role="button"
          aria-label="내 주변 동호회 추천받기 (GPS 위치 기반)"
          onClick={leftBoxClickHandler}
          onKeyDown={leftBoxKeyDownHandler}
        >
          <LocationLeft>
            <LocationIconWrap aria-hidden="true">
              <FaMapMarkerAlt />
            </LocationIconWrap>
            <LocationTextGroup>
              <LocationTitle>내 주변 동호회 추천받기</LocationTitle>
              <LocationSub>GPS 위치 기반으로 가까운 동호회를 찾아드립니다</LocationSub>
            </LocationTextGroup>
          </LocationLeft>
          <FaChevronRight aria-hidden="true" />
        </LocationButton>

        {/* 장애 유형 검색 */}
        <TypeSection>
          <TypeSectionTitle id="type-section-title">장애 유형으로 찾기</TypeSectionTitle>
          <TypeGrid aria-labelledby="type-section-title" role="list">
            {typeContents.map((content) => {
              const Icon = content.icon;
              return (
                <TypeItem
                  key={content.label}
                  accent={content.accent}
                  tabIndex={0}
                  role="listitem button"
                  aria-label={`${content.label} 동호회 검색`}
                  onClick={() => typeBoxClickHandler(content.label)}
                  onKeyDown={(e) => typeBoxKeyDownHandler(e, content.label)}
                >
                  <TypeIconWrap accent={content.accent} aria-hidden="true">
                    <Icon />
                  </TypeIconWrap>
                  <TypeLabel>{content.label}</TypeLabel>
                </TypeItem>
              );
            })}
          </TypeGrid>
        </TypeSection>
      </Inner>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--color-surface);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 1.5rem 4rem;

  @media (max-width: 600px) {
    padding: 2rem 1rem 3rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
`;

const SiteTitle = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: var(--color-primary);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.15;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const SiteSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
`;

const LocationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-card);
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: background var(--transition), box-shadow var(--transition);
  box-shadow: var(--shadow-card);
  min-height: 80px;

  &:hover,
  &:focus {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-hover);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  svg:last-child {
    flex-shrink: 0;
    font-size: 1.1rem;
    opacity: 0.75;
  }
`;

const LocationLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LocationIconWrap = styled.div`
  font-size: 2rem;
  line-height: 1;
  opacity: 0.9;
  flex-shrink: 0;
`;

const LocationTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const LocationTitle = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
`;

const LocationSub = styled.span`
  font-size: 0.88rem;
  opacity: 0.85;
  line-height: 1.4;
`;

const TypeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TypeSectionTitle = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--color-text-primary);
  margin: 0;
`;

const TypeGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TypeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: var(--color-card-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 1.25rem 0.75rem;
  cursor: pointer;
  min-height: 100px;
  text-align: center;
  transition: border-color var(--transition), box-shadow var(--transition), background var(--transition);
  box-shadow: var(--shadow-sm);

  &:hover,
  &:focus {
    border-color: ${(p) => p.accent};
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    background: #fafcff;
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const TypeIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(p) => p.accent}18;
  color: ${(p) => p.accent};
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const TypeLabel = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text-primary);
  line-height: 1.3;
`;
