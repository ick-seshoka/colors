import React from "react";

import { paletteColors } from "../../enums";

import Intro from "./intro";
import Grid from "./grid";

import { Container } from "./styles";

const PaletteGrid = () => (
  <Container>
    <Intro />
    <Grid palette={paletteColors} />
  </Container>
);

export default PaletteGrid;
