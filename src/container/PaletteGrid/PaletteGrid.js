import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import Intro from "./intro";
import Grid from "./grid";
import Shades from "./shades";

import { Container } from "./styles";

const PaletteGrid = forwardRef((props, ref) => {
  const { paletteShades, paletteColors, activeColor, setActiveColor } = props;
  return (
    <Container ref={ref}>
      <Intro />
      <Grid
        paletteColors={paletteColors}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <Shades paletteShades={paletteShades} />
    </Container>
  );
});

PaletteGrid.propTypes = {
  paletteShades: PropTypes.array,
  paletteColors: PropTypes.array,
  activeColor: PropTypes.object,
  setActiveColor: PropTypes.func,
};

export default PaletteGrid;
