import styled from "styled-components";

export const BackgroundWrap = styled.div`
  background-color: var(--dirty-white);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 6.5em;
  max-width: 1200px;
  max-height: 31.875em;
  margin: 0 auto;
  padding-top: 10.625em;
  padding-bottom: 10.625em;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

export const Title = styled.h3`
  color: var(--dark-gray);
  font-size: 1.8875em;
`;

export const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.3625em;
  line-height: 1.325em;
`;
