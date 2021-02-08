import styled, { css } from "styled-components";

import ListGridIcon from "../../../assets/svg/list-grid-icon.svg";
import CircleGridIcon from "../../../assets/svg/circle-grid-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 20%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const Title = styled.h3`
  color: var(--dark-gray);
  font-size: 1.8875em;
`;

export const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.3625em;
  line-height: 1.325em;
`;

export const GridViewControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const iconButtonStyle = css`
  background: transparent;
  border: none;
  outline: none;

  &:active {
    outline: none;
  }
`;

export const GridViewButton = styled.button`
  ${iconButtonStyle}
`;

export const CircleViewButton = styled.button`
  ${iconButtonStyle}
`;

export const GridViewIcon = styled.img.attrs({ src: ListGridIcon })``;

export const CircleViewIcon = styled.img.attrs({ src: CircleGridIcon })``;
