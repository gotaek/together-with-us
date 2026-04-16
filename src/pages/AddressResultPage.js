import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentAddress } from "../API/getCurrentAddress";
import {
  Grid,
  ResultPage,
  PageHeader,
  PageTitle,
  ResultCount,
  BackButton,
  EmptyState,
  ErrorState,
} from "../GlobalStyle";
import Info from "../components/Info";
import { FaChevronLeft, FaMapMarkerAlt } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const data = require("../data.json");

/* 위치를 통해 동호회를 추천받는 페이지 */
const AddressResultPage = () => {
  const navigate = useNavigate();
  const [coord, setCoord] = useState({ longitude: "", latitude: "" });
  const [mySigngu, setSigngu] = useState("");
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);

  const success = (position) => {
    setCoord({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };
  const error = () => {
    setLoading(false);
    setLocationError(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (!coord.longitude || !coord.latitude) return;
    const fetchData = async () => {
      try {
        const location = await getCurrentAddress(coord);
        setSigngu(location.region_2depth_name);
      } catch {
        setLocationError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [coord]);

  const results = mySigngu
    ? data.map((d, index) => ({ d, index })).filter(({ d }) => d.signgu_nm.includes(mySigngu))
    : [];

  return (
    <ResultPage id="main-content">
      <BackButton onClick={() => navigate("/")} aria-label="홈으로 돌아가기">
        <FaChevronLeft aria-hidden="true" />
        홈으로
      </BackButton>

      <PageHeader>
        <PageTitle>
          <FaMapMarkerAlt aria-hidden="true" style={{ fontSize: "1.5rem" }} />
          내 주변 동호회
        </PageTitle>
      </PageHeader>

      {loading && (
        <LoadingBox role="status" aria-live="polite" aria-busy="true">
          <Spinner aria-hidden="true" />
          위치 정보를 불러오는 중입니다...
        </LoadingBox>
      )}

      {locationError && (
        <ErrorState role="alert">
          위치 정보를 가져올 수 없습니다. 브라우저에서 위치 권한을 허용해주세요.
        </ErrorState>
      )}

      {!loading && !locationError && (
        <>
          <ResultCount aria-live="polite" style={{ marginBottom: "1.25rem" }}>
            {results.length > 0
              ? `${mySigngu} 주변 ${results.length}개의 동호회를 찾았습니다.`
              : "내 주변에 등록된 동호회가 없습니다."}
          </ResultCount>

          {results.length === 0 ? (
            <EmptyState role="alert">
              현재 위치({mySigngu}) 근처에 등록된 동호회가 없습니다.
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
        </>
      )}
    </ResultPage>
  );
};

export default AddressResultPage;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  padding: 1.5rem;
  background: var(--color-card-bg);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
`;

const Spinner = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  flex-shrink: 0;
  animation: ${spin} 0.8s linear infinite;
`;
