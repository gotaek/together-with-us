import React, { useState } from "react";
import styled from "styled-components";
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const data = require("../data.json");

/* 동호회 정보 카드 */
const Info = ({ index }) => {
  const object = data[index];
  const [description, setDescription] = useState(false);

  const toggleDescription = () => setDescription((prev) => !prev);
  const keyDownHandler = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDescription();
    }
  };

  const sportName = object.item_nm === "기타" ? object.subitem_nm : object.item_nm;

  return (
    <Card
      as="article"
      onClick={toggleDescription}
      onKeyDown={keyDownHandler}
      tabIndex={0}
      role="button"
      aria-expanded={description}
      aria-label={`${object.club_nm} 동호회, 클릭하면 상세 내용 ${description ? "닫힘" : "열림"}`}
    >
      <CardHeader>
        <ClubName>{object.club_nm}</ClubName>
        <ExpandIcon aria-hidden="true">
          {description ? <FaChevronUp /> : <FaChevronDown />}
        </ExpandIcon>
      </CardHeader>

      <MetaRow>
        <LocationItem>
          <FaMapMarkerAlt aria-hidden="true" style={{ flexShrink: 0 }} />
          <span>{object.ctprvn_nm} {object.signgu_nm}</span>
        </LocationItem>
        <SportBadge>{sportName}</SportBadge>
      </MetaRow>

      {description && object.club_intrcn_cn !== "" && (
        <Description id={`info-desc-${index}`}>
          {object.club_intrcn_cn}
        </Description>
      )}

      <FooterRow>
        <DisabilityBadge>{object.trobl_ty_nm}</DisabilityBadge>
        <OperTime>{object.oper_time_cn}</OperTime>
      </FooterRow>
    </Card>
  );
};

export default Info;

const Card = styled("div")`
  background: var(--color-card-bg);
  color: var(--color-text-primary);
  cursor: pointer;
  border-radius: var(--radius-card);
  padding: 1.25rem 1.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

const ClubName = styled.h3`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.4;
  flex: 1;
`;

const ExpandIcon = styled.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 0.3rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const LocationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  flex: 1;
  min-width: 0;
  svg {
    color: var(--color-primary);
    font-size: 0.85rem;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SportBadge = styled.span`
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.2rem 0.7rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  border: 1px solid #b3cce8;
`;

const Description = styled.p`
  color: var(--color-text-primary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  padding: 0.9rem 1rem;
  background: var(--color-surface);
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

const DisabilityBadge = styled.span`
  background: var(--color-primary);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
`;

const OperTime = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
