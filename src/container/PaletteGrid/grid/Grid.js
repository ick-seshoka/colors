import React from "react";

import PropTypes from "prop-types";

import {
  Container,
  ColorCard,
  ColorName,
  ActiveIcon,
  ColorCode,
  EmptyIcon,
  CopyIcon,
  Wrap,
} from "./styles";

const Grid = ({ paletteColors, activeColor, setActiveColor }) => {
  const handleColorCardClick = (color) => () => {
    color.name && setActiveColor(color);
  };

  const paletteCards = paletteColors.map(({ name, colorCode }, index) => {
    const active = activeColor.colorCode === colorCode;

    return (
      <ColorCard
        key={index}
        colorCode={colorCode}
        active={active}
        onClick={handleColorCardClick({ name, colorCode })}
      >
        <ColorName>{name}</ColorName>
        {active && <ActiveIcon />}
        {!name && <EmptyIcon />}
        <Wrap>
          <ColorCode>{name && colorCode}</ColorCode>
          {active && <CopyIcon />}
        </Wrap>
      </ColorCard>
    );
  });

  return <Container>{paletteCards}</Container>;
};

Grid.propTypes = {
  paletteColors: PropTypes.array,
  activeColor: PropTypes.object,
  setActiveColor: PropTypes.func,
};

export default Grid;
