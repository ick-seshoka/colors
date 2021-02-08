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

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: -1px -1px 14px 0 rgba(0, 0, 0, 0.44),
        4px 6px 14px 0 rgba(0, 0, 0, 0.45);
      transform: scale(1.15);
    `}
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