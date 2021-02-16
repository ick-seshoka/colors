import styled, { css } from "styled-components";

import ListGridIcon from "../../../assets/svg/list-grid-icon.svg";
import CircleGridIcon from "../../../assets/svg/circle-grid-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 20%;

  @media screen and (max-width: 61.9375em) {
    grid-template-columns: auto;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    justify-items: center;
  }

  @media screen and (min-width: 62em) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media screen and (max-width: 47.9375em) {
    max-width: 100%;
    align-items: center;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    max-width: 80%;
  }

  @media screen and (min-width: 62em) {
    max-width: 70%;
  }
`;

export const Title = styled.h3`
  color: var(--dark-gray);
  font-size: 1.8875em;

  @media screen and (max-width: 47.9375em) {
    text-align: center;
    font-size: 1.4625em;
  }
`;

export const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.3625em;
  line-height: 1.325em;

  @media screen and (max-width: 47.9375em) {
    text-align: center;
    font-size: 1.05em;
    line-height: 1.6em;
    max-width: 80%;
  }
  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    max-width: 80%;
  }
`;

export const GridViewControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  @media screen and (max-width: 61.9375em) {
    display: none;
  }
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
