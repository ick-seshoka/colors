import React from "react";

import Palette from "./palette";

import {
  Container,
  BackgroundWrap,
  ContentWrap,
  Title,
  Paragraph,
} from "./styles";

const About = () => (
  <BackgroundWrap>
    <Container>
      <ContentWrap>
        <Title>Palette</Title>
        <Paragraph>
          Colors palette comprises primary and accent colors that have been
          designed to work together in harmony
        </Paragraph>
      </ContentWrap>
      <Palette />
      <Palette />
      <ContentWrap>
        <Title>Colors</Title>
        <Paragraph>
          The colors palette starts with primary colors and fills up the
          spectrum to create a complete palette
        </Paragraph>
      </ContentWrap>
    </Container>
  </BackgroundWrap>
);

export default About;
