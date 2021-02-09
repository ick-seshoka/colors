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

const Grid = ({ palette }) => {
  const paletteCards = palette.map(({ name, colorCode, active }, index) => {
    return (
      <ColorCard key={index} colorCode={colorCode} active={active}>
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
  paletteCards: PropTypes.array,
};

export default Grid;
