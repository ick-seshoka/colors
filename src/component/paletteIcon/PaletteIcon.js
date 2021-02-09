import React from "react";

import { Container, GridTile } from "./styles";

const PaletteIcon = () => (
  <Container>
    <GridTile backgroundColor="var(--red)" />
    <GridTile backgroundColor="var(--orange)" />
    <GridTile backgroundColor="var(--blue)" />
    <GridTile backgroundColor="var(--green)" />
  </Container>
);

export default PaletteIcon;
