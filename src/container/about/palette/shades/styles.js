import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 80%;
  justify-items: center;
  grid-area: Shades;

  @media screen and (max-width: 40em) {
    overflow-x: scroll;
    max-width: 100%;
    padding-left: 5em;
    box-sizing: border-box;
  }
`;
