import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, 1fr);
  max-width: 80%;
  grid-area: Palette;

  @media screen and (max-width: 61.9375em) {
    grid-template-rows: auto;
    grid-template-columns: repeat(8, 10em);
    max-width: 100%;
    overflow-x: scroll;
    padding: 3em;
    padding-left: 5.7em;
    margin-top: -3em;
    min-height: 10em;
    box-sizing: border-box;
  }
`;
