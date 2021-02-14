import React, { useState } from "react";

import PropTypes from "prop-types";

import { copyColorToClipboard } from "../../../helpers";

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

const Shades = ({ paletteShades, activeShade, setActiveShade }) => {
  const [gridShadeCopied, setGridShadeCoppied] = useState(false);

  const handleColorCardClick = (shade) => () => {
    setActiveShade(shade);
  };
  //
  // Clean up timer with useEffect hook
  //
  const copyColorCode = () => {
    const { colorCode } = activeShade;
    copyColorToClipboard(colorCode);

    setGridShadeCoppied(true);

    setTimeout(() => {
      setGridShadeCoppied(false);
    }, 500);
  };

  const gridCards = paletteShades.map(({ colorCode, id, shade }) => {
    const isActive = colorCode === activeShade.colorCode;

    return (
      <ColorCard
        key={id}
        colorCode={colorCode}
        active={isActive}
        onClick={handleColorCardClick({ id, colorCode, shade })}
      >
        {isActive ? (gridShadeCopied ? "Copied!" : colorCode) : null}
        {isActive && <CopyIcon onClick={copyColorCode} />}
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
  activeShade: PropTypes.object,
  setActiveShade: PropTypes.func,
};

export default Shades;
