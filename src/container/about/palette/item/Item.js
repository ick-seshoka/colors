import React from "react";
import PropTypes from "prop-types";

import { Container, Name, ActiveIcon, ColorCode } from "./styles";

const Item = ({ name, colorCode, isActive, setActiveColor }) => {
  const handleItemClick = () => {
    const color = { name, colorCode };
    setActiveColor(color);
  };

  return (
    <Container
      colorCode={colorCode}
      isActive={isActive}
      onClick={handleItemClick}
    >
      <Name>{name}</Name>
      {isActive && <ActiveIcon />}
      <ColorCode>{colorCode}</ColorCode>
    </Container>
  );
};

Item.prototypes = {
  name: PropTypes.string,
  colorCode: PropTypes.string,
  isActive: PropTypes.bool,
  setActiveColor: PropTypes.func,
};

export default Item;
