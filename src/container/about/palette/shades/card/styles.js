import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 5.375em;
  height: 5.375em;
  background-color: ${({ colorCode }) =>
    colorCode ? colorCode : "var(--dark-gray)"};
  transition: background-color 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  &:nth-child(2) {
    transition-delay: 0.05s;
  }
  &:nth-child(3) {
    transition-delay: 0.1s;
  }
  &:nth-child(4) {
    transition-delay: 0.15s;
  }
  &:nth-child(5) {
    transition-delay: 0.2s;
  }
  &:nth-child(6) {
    transition-delay: 0.25s;
  }
`;
