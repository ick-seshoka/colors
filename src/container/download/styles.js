import styled, { css } from "styled-components";

import DownloadIconSource from "../../assets/svg/download-icon.svg";
import SketchLogo from "../../assets/images/sketch-logo.png";
import PhotoshopLogo from "../../assets/images/photoshop-logo.png";

export const BackgroundWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dirty-white);
  padding-top: 7.265em;
  padding-bottom: 7.265em;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  width: 50%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const Title = styled.h3`
  color: var(--dark-gray);
  font-size: 1.8875em;
`;

export const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.3625em;
  line-height: 1.325em;
  text-align: center;
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
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5em;
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
`;

export const SketchButton = styled.button`
  ${ButtonStyle}
  background-color: var(--orange);
`;

export const PhotoshopButton = styled.button`
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
