import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GridTile = styled.div`
  width: 1.875em;
  height: 0.3125em;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
`;
