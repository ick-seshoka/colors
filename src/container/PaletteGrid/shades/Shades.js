import React from "react";

import PropTypes from "prop-types";

import { Container, Spectrum, ColorCard, Axis, AxisBlock } from "./styles";

const Shades = ({ paletteShades }) => {
  const gridCards = paletteShades.map(({ colorCode, active, id }) => {
    return (
      <ColorCard key={id} colorCode={colorCode} active={active}>
        {active && colorCode}
      </ColorCard>
    );
  });

  const axisBlocks = paletteShades.map(({ gradient: { start, end }, id }) => {
    return <AxisBlock key={id} start={start} end={end} />;
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
