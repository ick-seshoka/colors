import React from "react";

import Card from "./card";

import { paletteShades } from "../../../../enums";

import Spectrum from "./spectrum";

import { Container } from "./styles";

const Shades = () => {
  const shades = paletteShades[0].shades;

  return (
    <Container>
      <Card colorCode={"#F44336"} />
      <Spectrum shades={shades} />
    </Container>
  );
};

export default Shades;
