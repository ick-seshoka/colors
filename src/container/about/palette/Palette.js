import React from "react";

import { paletteColors } from "../../../enums";

import Item from "./item";

import { Container } from "./styles";

const Palette = () => {
  const palleteColorsMap = paletteColors.map(
    ({ name, colorCode, active }, index) => {
      if (index < 8) {
        return (
          <Item
            key={index}
            name={name}
            isActive={active}
            colorCode={colorCode}
          />
        );
      }

      return null;
    }
  );

  return <Container>{palleteColorsMap}</Container>;
};

export default Palette;
