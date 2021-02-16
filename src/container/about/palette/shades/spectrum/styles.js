import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 2em;
  justify-items: center;
  justify-self: center;

  @media screen and (max-width: 47.9375em) {
    grid-template-rows: auto;
    grid-template-columns: repeat(6, auto);
    padding-left: 5.275em;
  }
`;
