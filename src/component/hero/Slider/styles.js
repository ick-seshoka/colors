import styled from "styled-components";

import PaletteIcon from "../../../assets/svg/palette-icon.svg";

export const TextSlider = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextSliderControl = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 40em) {
    flex-direction: row;
  }
`;

export const ColorPaletteIcon = styled.img.attrs({ src: PaletteIcon })`
  max-width: 150px;

  @media screen and (max-width: 40em) {
    max-width: 5.3125em;
    margin-bottom: 1.875em;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 3.5em;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 40em) {
    font-size: 1.4625em;
    line-height: 1.5;
  }
`;

export const Paragraph = styled.p`
  color: var(--white);
  font-size: 1.5625em;
  font-weight: 300;
  text-align: center;
  line-height: 1.5375em;

  @media screen and (max-width: 40em) {
    font-size: 1.05em;
  }
`;

export const ControlButton = styled.a`
  width: 0.9375em;
  height: 0.9375em;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.15)"};
  margin-bottom: 3em;

  @media screen and (max-width: 40em) {
    margin-right: 1.5em;
    width: 0.6375em;
    height: 0.6375em;
  }
`;
