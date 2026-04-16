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
import { FaChevronLeft, FaSearch } from "react-icons/fa";

const data = require("../data.json");

/* 동호회 이름 검색 결과 페이지 */
const SearchResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nameQuery = qs.parse(location.search, { ignoreQueryPrefix: true });
  const name = nameQuery.name || "";

  const results = data
    .map((d, index) => ({ d, index }))
    .filter(({ d }) => d.club_nm.includes(name));

  return (
    <ResultPage id="main-content">
      <BackButton onClick={() => navigate("/")} aria-label="홈으로 돌아가기">
        <FaChevronLeft aria-hidden="true" />
        홈으로
      </BackButton>

      <PageHeader>
        <PageTitle>
          <FaSearch aria-hidden="true" style={{ fontSize: "1.5rem" }} />
          "{name}" 검색 결과
        </PageTitle>
        <ResultCount aria-live="polite">
          {results.length}개의 동호회를 찾았습니다.
        </ResultCount>
      </PageHeader>

      {results.length === 0 ? (
        <EmptyState role="alert">
          "{name}"에 해당하는 동호회가 없습니다.
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

export default SearchResultPage;
