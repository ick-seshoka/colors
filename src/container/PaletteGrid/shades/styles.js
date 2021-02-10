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
