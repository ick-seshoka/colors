import React from "react";

import PropTypes from "prop-types";

import {
  Container,
  Spectrum,
  ColorCard,
  Axis,
  AxisBlock,
  ShadeLevels,
  LevelsContainer,
  Level,
  Title,
  CopyIcon,
} from "./styles";

const Shades = ({ paletteShades, activeColor }) => {
  const gridCards = paletteShades.map(({ colorCode, id }) => {
    const isActive = colorCode === activeColor.colorCode;

    return (
      <ColorCard key={id} colorCode={colorCode} active={isActive}>
        {isActive && colorCode}
        {isActive && <CopyIcon />}
      </ColorCard>
    );
  });

  const axisBlocks = paletteShades.map(({ colorCode, id }) => {
    return (
      <AxisBlock key={id} start={colorCode} end={colorCode} active={false} />
    );
  });

  const shadeLevels = paletteShades.map(({ id, shade }) => {
    return (
      <Level key={id} active={false}>
        {shade}
      </Level>
    );
  });

  return (
    <Container>
      <Spectrum>{gridCards}</Spectrum>
      <Axis>{axisBlocks}</Axis>
      <ShadeLevels>
        <LevelsContainer>{shadeLevels}</LevelsContainer>
        <Title>Shades</Title>
      </ShadeLevels>
    </Container>
  );
};

Shades.prototype = {
  shades: PropTypes.array,
  activeColor: PropTypes.object,
};

export default Shades;
