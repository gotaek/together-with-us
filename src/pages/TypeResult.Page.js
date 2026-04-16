import React from "react";
import { useLocation, useNavigate } from "react-router";
import qs from "qs";
import Info from "../components/Info";
import {
  Grid,
  ResultPage,
  PageHeader,
  PageTitle,
  ResultCount,
  BackButton,
  EmptyState,
} from "../GlobalStyle";
import { FaChevronLeft, FaWheelchair } from "react-icons/fa";

const data = require("../data.json");

/* 장애 유형을 통해 동호회를 추천하는 페이지 */
const TypeResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const typeQuery = qs.parse(location.search, { ignoreQueryPrefix: true });
  const obstacleType = typeQuery.obs || "";

  const results = data
    .map((d, index) => ({ d, index }))
    .filter(({ d }) => d.trobl_ty_nm === obstacleType);

  return (
    <ResultPage id="main-content">
      <BackButton onClick={() => navigate("/")} aria-label="홈으로 돌아가기">
        <FaChevronLeft aria-hidden="true" />
        홈으로
      </BackButton>

      <PageHeader>
        <PageTitle>
          <FaWheelchair aria-hidden="true" style={{ fontSize: "1.5rem" }} />
          {obstacleType} 동호회
        </PageTitle>
        <ResultCount aria-live="polite">
          {results.length}개의 동호회를 찾았습니다.
        </ResultCount>
      </PageHeader>

      {results.length === 0 ? (
        <EmptyState role="alert">
          {obstacleType}에 해당하는 동호회가 없습니다.
        </EmptyState>
      ) : (
        <Grid>
          {results.map(({ index }) => (
            <li key={index}>
              <Info index={index} />
            </li>
          ))}
        </Grid>
      )}
    </ResultPage>
  );
};

export default TypeResultPage;
