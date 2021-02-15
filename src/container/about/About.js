import React from "react";

import Palette from "./palette";
import Shades from "./palette/shades";

import {
  Container,
  BackgroundWrap,
  ContentWrap,
  Title,
  Paragraph,
  PaletteIconWrap,
  PaletteIcon,
} from "./styles";

const About = () => (
  <BackgroundWrap>
    <Container>
      <ContentWrap isPaletteIntro>
        <Title>Palette</Title>
        <Paragraph>
          Colors palette comprises primary and accent colors that have been
          designed to work together in harmony
        </Paragraph>
      </ContentWrap>
      <Palette />
      <Shades />
      <ContentWrap>
        <Title>Colors</Title>
        <Paragraph>
          The colors palette starts with primary colors and fills up the
          spectrum to create a complete palette
        </Paragraph>
      </ContentWrap>
    </Container>
    <PaletteIconWrap>
      <PaletteIcon />
    </PaletteIconWrap>
  </BackgroundWrap>
);

export default About;
