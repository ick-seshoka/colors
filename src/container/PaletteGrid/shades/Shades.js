import React from "react";

import PropTypes from "prop-types";

import { Container, Spectrum, ColorCard, Axis, AxisBlock } from "./styles";

const Shades = ({ paletteShades }) => {
  const gridCards = paletteShades.map(({ colorCode, id }) => {
    return (
      <ColorCard key={id} colorCode={colorCode} active={false}>
        {false && colorCode}
      </ColorCard>
    );
  });

  const axisBlocks = paletteShades.map(({ colorCode, id }) => {
    return (
      <AxisBlock key={id} start={colorCode} end={colorCode} active={false} />
    );
  });

  return (
    <Container>
      <Spectrum>{gridCards}</Spectrum>
      <Axis>{axisBlocks}</Axis>
    </Container>
  );
};

Shades.prototype = {
  shades: PropTypes.array,
};

export default Shades;
