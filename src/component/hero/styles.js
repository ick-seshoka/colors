import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 98% 2%;
  align-items: center;
  justify-items: center;

  &:after {
    position: absolute;
    display: block;
    content: "";
    bottom: 0;
    width: 50%;
    height: 1.1em;
    background-color: var(--dirty-white);
    border-radius: 1.7375em 1.7375em 0 0;
  }

  @media screen and (max-width: 40em) {
    grid-template-columns: auto;
    grid-template-rows: 85% auto;

    &:after {
      width: 80%;
      height: 0.8em;
    }
  }
`;
