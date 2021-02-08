import React from "react";

import PropTypes from "prop-types";

import { Container, Spectrum, ColorCard } from "./styles";

const Shades = ({ paletteShades }) => {
  const gridCards = paletteShades.map(({ colorCode, active, id }) => {
    return (
      <ColorCard key={id} colorCode={colorCode} active={active}>
        {active && colorCode}
      </ColorCard>
    );
  });

  return (
    <Container>
      <Spectrum>{gridCards}</Spectrum>
    </Container>
  );
};

Shades.prototype = {
  shades: PropTypes.array,
};

export default Shades;
