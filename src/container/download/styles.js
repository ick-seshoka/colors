import styled, { css } from "styled-components";

import DownloadIconSource from "../../assets/svg/download-icon.svg";
import SketchLogo from "../../assets/images/sketch-logo.png";
import PhotoshopLogo from "../../assets/images/photoshop-logo.png";
import SketchPalette from "../../assets/files/colors-palette.sketch";

export const BackgroundWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dirty-white);
  padding-top: 7.265em;
  padding-bottom: 7.265em;

  @media screen and (max-width: 47.9375em) {
    padding-top: 3.2625em;
    padding-bottom: 3.2625em;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 61.9375em) {
    max-width: 100%;
    width: 80%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const Title = styled.h3`
  color: var(--dark-gray);
  font-size: 1.8875em;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.4625em;
    text-align: center;
  }

  @media screen and (min-width: 40em) and (max-width: 61.9375em) {
    font-size: 1.9875em;
    text-align: center;
    line-height: 1.5;
  }
`;

export const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.3625em;
  line-height: 1.325em;
  text-align: center;

  @media screen and (max-width: 47.9375em) {
    font-size: 1.05em;
    line-height: 1.6em;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    max-width: 80%;
  }
`;

export const DownloadButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  width: 40%;

  @media screen and (max-width: 47.9375em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    width: 80%;
    max-width: 100%;
  }

  @media screen and (min-width: 48em) and (max-width: 61.9375em) {
    width: 80%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5em;

  @media screen and (max-width: 61.9375em) {
    margin-top: 1.5em;
  }
`;

const ButtonStyle = css`
  background: transparent;
  border: none;
  outline: none;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "var(--dark-gray)"};
  border-radius: 1.67px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.45);
  width: 13.75em;
  height: 3.35em;
  color: var(--white);
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 500;
  transition: transform 0.05s ease-in;

  &:hover {
    cursor: not-allowed;
    ${({ enabled }) =>
      enabled &&
      css`
        cursor: pointer;
        transform: scale(1.15);
      `}
  }
`;

export const SketchButton = styled.a.attrs({
  download: "colors-palette.sketch",
  href: SketchPalette,
})`
  ${ButtonStyle}
  background-color: var(--orange);
`;

export const PhotoshopButton = styled.a`
  ${ButtonStyle}
  background-color: var(--purple);
`;

export const CountWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`;

export const DownloadIcon = styled.img.attrs({ src: DownloadIconSource })`
  margin-right: 1em;
`;

export const Count = styled.p`
  color: var(--text-gray);
  font-size: 0.9em;
  font-weight: 600;
`;

const ImageStyle = css`
  width: 1.5625em;
  height: 1.5625em;
  margin-right: 0.5em;
`;

export const SketchIcon = styled.img.attrs({
  src: SketchLogo,
})`
  ${ImageStyle}
`;

export const PhotoshopIcon = styled.img.attrs({ src: PhotoshopLogo })`
  ${ImageStyle}
`;
