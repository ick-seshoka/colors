import React from "react";
import PropTypes from "prop-types";

import Card from "../card";

import { Container } from "./styles";

const Spectrum = ({ shades }) => {
  const colorShades = shades.map(({ colorCode }, index) => {
    if (index < 6) {
      return <Card colorCode={colorCode} />;
    }

    return null;
  });

  return <Container>{colorShades}</Container>;
};

Spectrum.propTypes = {
  colorCode: PropTypes.string,
};

export default Spectrum;
