import React from "react";

import { paletteColors } from "../../enums";
import { paletteShades } from "../../enums";

import Intro from "./intro";
import Grid from "./grid";
import Shades from "./shades";

import { Container } from "./styles";

const PaletteGrid = () => {
  const shades = paletteShades.filter(({ active }) => active)[0].shades;

  return (
    <Container>
      <Intro />
      <Grid palette={paletteColors} />
      <Shades paletteShades={shades} />
    </Container>
  );
};

export default PaletteGrid;
