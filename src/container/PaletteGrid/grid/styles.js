import styled, { css } from "styled-components";

import CircleCheck from "../../../assets/svg/circle-check.svg";
import BlockIcon from "../../../assets/svg/block-icon.svg";
import CopyIconSource from "../../../assets/svg/copy-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  justify-self: center;
  margin-top: 8.125em;
`;

export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.375em;
  height: 9.375em;
  background-color: ${({ colorCode }) =>
    colorCode ? colorCode : "var(--dark-gray)"};
  align-items: center;
  justify-content: center;
  transition: transform 0.05s ease-in-out, box-shadow 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: -1px -1px 14px 0 rgba(0, 0, 0, 0.44),
        4px 6px 14px 0 rgba(0, 0, 0, 0.45);
      transform: scale(1.2);
    `}
`;

export const ColorName = styled.p`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1.2em;
  font-weight: 400;
`;

export const ActiveIcon = styled.img.attrs({ src: CircleCheck })``;

export const ColorCode = styled.p`
  color: var(--white);
  font-weight: 200;
`;

export const EmptyIcon = styled.img.attrs({ src: BlockIcon })``;

export const CopyIcon = styled.img.attrs({ src: CopyIconSource })`
  width: 0.9em;
  margin-left: 0.3em;
  background-color: var(--dirty-gray);
  transform: scale(1);
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
