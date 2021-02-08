import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 5.375em;
  height: 5.375em;
  background-color: ${({ colorCode }) =>
    colorCode ? colorCode : "var(--dark-gray)"};
`;
