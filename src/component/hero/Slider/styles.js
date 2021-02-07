import styled from "styled-components";

import PalleteIcon from "../../../assets/svg/pallete-icon.svg";

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
`;

export const ColorPalleteIcon = styled.img.attrs({ src: PalleteIcon })`
  max-width: 150px;
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 3.5em;
  font-weight: 500;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: var(--white);
  font-size: 1.5625em;
  font-weight: 300;
  text-align: center;
  line-height: 1.5375em;
`;

export const ControlButton = styled.a`
  width: 0.9375em;
  height: 0.9375em;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.15)"};
  margin-bottom: 3em;
`;
