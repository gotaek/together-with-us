import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1A4480;
    --color-primary-dark: #112E51;
    --color-primary-light: #DDEAF8;
    --color-accent: #1C7A5B;
    --color-surface: #F0F4F8;
    --color-card-bg: #FFFFFF;
    --color-text-primary: #1B1B1B;
    --color-text-secondary: #484848;
    --color-focus: #0052CC;
    --color-border: #C5CAD0;
    --color-error: #A61C00;
    --radius-card: 12px;
    --radius-btn: 8px;
    --shadow-sm: 0 1px 4px rgba(0,0,0,0.07);
    --shadow-card: 0 2px 10px rgba(0,0,0,0.08);
    --shadow-hover: 0 6px 24px rgba(0,0,0,0.13);
    --transition: 0.18s ease;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  h1, h2, h3 {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  *:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 3px;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export const Grid = styled("ul")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: start;
`;

export const ResultPage = styled("main")`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: var(--color-primary);
  font-size: 1.75rem;
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ResultCount = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1.5rem;
  background: none;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-btn);
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  min-height: 48px;

  &:hover,
  &:focus {
    background: var(--color-primary);
    color: #fff;
  }
`;

export const EmptyState = styled.p`
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  padding: 2.5rem 2rem;
  text-align: center;
  background: var(--color-card-bg);
  border-radius: var(--radius-card);
  border: 2px dashed var(--color-border);
`;

export const ErrorState = styled.p`
  color: var(--color-error);
  font-size: 1.05rem;
  font-weight: 600;
  padding: 1.5rem;
  background: #FFF0EE;
  border-radius: var(--radius-card);
  border: 2px solid #F5C6C0;
`;

export default GlobalStyle;
