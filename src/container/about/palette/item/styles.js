import styled, { css } from "styled-components";

import CircleCheck from "../../../../assets/svg/circle-check.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => (color ? "" : "")};
  color: var(--white);
  background-color: ${({ colorCode }) =>
    colorCode ? colorCode : "var(--dar-gray)"};
  align-items: center;
  justify-content: center;
  transition: transform 0.05s ease-in-out, box-shadow 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: -1px -1px 14px 0 rgba(0, 0, 0, 0.44),
        4px 6px 14px 0 rgba(0, 0, 0, 0.45);
      transform: scale(1.15);
    `};

  @media screen and (max-width: 47.9375em) {
    height: 9em;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    height: 10em;
  }
`;

export const Name = styled.p`
  color: var(--white);
  text-transform: capitalize;
`;

export const ActiveIcon = styled.img.attrs({ src: CircleCheck })`
  width: 1.25em;
  height: 1.25em;
`;

export const ColorCode = styled.p`
  color: var(--white);
  font-weight: 100;
`;
