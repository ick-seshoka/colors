import React from "react";

import {
  Container,
  Content,
  Title,
  Paragraph,
  GridViewControl,
  CircleViewButton,
  GridViewButton,
  CircleViewIcon,
  GridViewIcon,
} from "./styles";

export const Intro = () => (
  <Container>
    <Content>
      <Title>Use Colors</Title>
      <Paragraph>
        Select a color from the palette and get a spectrum of shades of the
        selected color.
      </Paragraph>
    </Content>
    <GridViewControl>
      <GridViewButton>
        <GridViewIcon />
      </GridViewButton>
      <CircleViewButton>
        <CircleViewIcon />
      </CircleViewButton>
    </GridViewControl>
  </Container>
);

export default Intro;
