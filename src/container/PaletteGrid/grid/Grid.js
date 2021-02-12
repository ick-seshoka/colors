import React from "react";

import PropTypes from "prop-types";

import {
  Container,
  ColorCard,
  ColorName,
  ActiveIcon,
  ColorCode,
  EmptyIcon,
} from "./styles";

const Grid = ({ paletteColors, activeColor, setActiveColor }) => {
  const handleColorCardClick = (color) => () => {
    setActiveColor(color);
  };

  const paletteCards = paletteColors.map(({ name, colorCode }, index) => {
    const active = activeColor.colorCode === colorCode;

    return (
      <ColorCard
        key={index}
        colorCode={colorCode}
        active={active}
        onClick={name && handleColorCardClick({ name, colorCode })}
      >
        <ColorName>{name}</ColorName>
        {active && <ActiveIcon />}
        {!name && <EmptyIcon />}
        <ColorCode>{name && colorCode}</ColorCode>
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
