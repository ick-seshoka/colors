import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import Intro from "./intro";
import Grid from "./grid";
import Shades from "./shades";

import { Container } from "./styles";

const PaletteGrid = forwardRef(({ paletteShades, paletteColors }, ref) => {
  return (
    <Container ref={ref}>
      <Intro />
      <Grid palette={paletteColors} />
      <Shades paletteShades={paletteShades} />
    </Container>
  );
});

PaletteGrid.propTypes = {
  paletteShades: PropTypes.array,
  paletteColors: PropTypes.array,
};

export default PaletteGrid;
