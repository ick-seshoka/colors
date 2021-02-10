import React from "react";
import PropTypes from "prop-types";

import { Container, Name, ActiveIcon, ColorCode } from "./styles";

const Item = ({ name, colorCode, isActive }) => (
  <Container colorCode={colorCode} isActive={isActive}>
    <Name>{name}</Name>
    {isActive && <ActiveIcon />}
    <ColorCode>{colorCode}</ColorCode>
  </Container>
);

Item.prototypes = {
  name: PropTypes.string,
  colorCode: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Item;
