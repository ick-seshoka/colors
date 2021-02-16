import styled from "styled-components";

export const BackgroundWrap = styled.div`
  background-color: var(--dirty-white);
  flex-direction: column;
  padding-top: 3.265em;
  padding-bottom: 3.265em;

  @media screen and (max-width: 61.9375em) {
    padding-top: 1.265em;
    padding-bottom: 1.265em;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled.p`
  color: var(--text-gray);
  font-weight: 400;
  font-size: 1.15em;
  margin-top: 1.5em;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.05em;
  }
`;
