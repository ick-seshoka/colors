import React from "react";

import Footer from "../../component/footer";

import {
  Container,
  PageNotFoundContainer,
  Title,
  Paragraph,
  HomeButton,
  EyesIcon,
  PaletteIcon,
} from "./styles";

const InvalidUrl = () => (
  <Container>
    <PageNotFoundContainer>
      <Title>404</Title>
      <Paragraph>
        Page not found <EyesIcon>👀</EyesIcon>
      </Paragraph>
      <HomeButton to="/">
        <PaletteIcon>🎨</PaletteIcon>View colors
      </HomeButton>
    </PageNotFoundContainer>
    <Footer />
  </Container>
);

export default InvalidUrl;
