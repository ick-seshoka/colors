import React from "react";

import PaletteIcon from "../paletteIcon";

import { BackgroundWrap, Container, Copyright } from "./styles";

const Footer = () => (
  <BackgroundWrap>
    <Container>
      <PaletteIcon />
      <Copyright>colors | by Creatr. © 2021</Copyright>
    </Container>
  </BackgroundWrap>
);

export default Footer;
