import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Spectrum = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  justify-items: center;
  justify-self: center;
  margin-top: 6.125em;
`;

export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.625em;
  height: 5.625em;
  background-color: ${({ colorCode }) =>
    colorCode ? colorCode : "var(--dark-grey)"};
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      box-shadow: -1px -1px 14px 0 rgba(0, 0, 0, 0.44),
        4px 6px 14px 0 rgba(0, 0, 0, 0.45);
      transform: scale(1.2);
    `}
  color: var(--white);
  font-weight: 300;
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
  &:nth-child(7) {
    transition-delay: 0.3s;
  }
  &:nth-child(8) {
    transition-delay: 0.35s;
  }
  &:nth-child(9) {
    transition-delay: 0.4s;
  }
  &:nth-child(10) {
    transition-delay: 0.45s;
  }
`;

export const Axis = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  justify-items: center;
  justify-self: center;
  margin-top: 3.125em;
`;

const axisMark = css`
  position: absolute;
  display: block;
  content: "";
  top: -0.25em;
  left: -0.3em;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: ${({ start }) => (start ? start : "var(--dark-gray)")};
  border: 2px solid var(--white);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const AxisBlock = styled.div`
  position: relative;
  display: flex;
  width: 5.625em;
  height: 0.425em;
  background-color: var(--dark-grey);
  background: ${({ start, end }) =>
    start && end
      ? "linear-gradient(90deg, " + start + " 0%, " + end + " 100%)"
      : "var(--dark-grey)"};

  &:after {
    ${axisMark}

    ${({ active }) =>
      active &&
      css`
        transform: scale(1.6);
      `}
  }

  &:nth-child(10) {
    &:after {
      ${axisMark}
      left: unset;
    }
  }
`;

export const ShadeLevels = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  margin-top: 3.125em;
`;

export const LevelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  justify-items: start;
`;

export const Level = styled.p`
  font-size: 1.25em;
  font-weight: 600;
  color: var(--blue-gray);
`;

export const Title = styled.p`
  font-size: 1.5625em;
  font-weight: 500;
  color: var(--text-gray);
  text-align: center;
`;
