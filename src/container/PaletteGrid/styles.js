import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 7.265em;
  padding-bottom: 7.265em;

  @media screen and (max-width: 40em) {
    padding-top: 5.2625em;
    padding-bottom: 5.2625em;
  }
`;
