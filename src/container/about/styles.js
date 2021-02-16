import styled from "styled-components";

import PaletteIconSource from "../../component/paletteIcon";

export const BackgroundWrap = styled.div`
  background-color: var(--dirty-white);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "Palette-intro Palette"
    "Shades Shades-intro";
  grid-row-gap: 6.5em;
  max-width: 1200px;
  max-height: 31.875em;
  margin: 0 auto;
  padding-top: 10.625em;
  padding-bottom: 10.625em;

  @media screen and (max-width: 47.9375em) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    justify-items: center;
    padding-top: 5.625em;
    padding-bottom: 5.625em;
    max-height: 100%;
    grid-row-gap: 3em;

    grid-template-areas:
      "Palette-intro"
      "Palette"
      "Shades-intro"
      "Shades";
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  grid-area: ${({ isPaletteIntro }) =>
    isPaletteIntro ? "Palette-intro" : "Shades-intro"};
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
  }
`;

export const PaletteIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20em;

  @media screen and (max-width: 47.9375em) {
    margin-right: unset;
    align-items: center;
  }
`;

export const PaletteIcon = styled(PaletteIconSource)``;
