import React from "react";
import PropTypes from "prop-types";

import Item from "./item";

import { Container } from "./styles";

const Palette = ({ paletteColors, activeColor, setActiveColor }) => {
  const paletteColorsMap = paletteColors.map(({ name, colorCode }, index) => {
    if (index < 8) {
      return (
        <Item
          key={index}
          name={name}
          isActive={colorCode === activeColor.colorCode}
          colorCode={colorCode}
          setActiveColor={setActiveColor}
        />
      );
    }

    return null;
  });

  return <Container>{paletteColorsMap}</Container>;
};

Palette.prototypes = {
  paletteColors: PropTypes.array,
  activeColor: PropTypes.bool,
  setActiveColor: PropTypes.func,
};

export default Palette;
