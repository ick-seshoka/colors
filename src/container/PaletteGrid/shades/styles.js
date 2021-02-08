import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Spectrum = styled.div`
  display: grid;
  grid-template-columns: repeat(9, auto);
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
