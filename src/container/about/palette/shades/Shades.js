import React from "react";
import PropTypes from "prop-types";

import Card from "./card";
import Spectrum from "./spectrum";

import { Container } from "./styles";

const Shades = ({ shades, activeColor: { colorCode } }) => {
  return (
    <Container>
      <Card colorCode={colorCode} />
      <Spectrum shades={shades} />
    </Container>
  );
};

Shades.propTypes = {
  activeColor: PropTypes.object,
  shades: PropTypes.array,
};

export default Shades;
