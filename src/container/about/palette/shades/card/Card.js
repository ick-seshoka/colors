import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Card = ({ colorCode }) => <Container colorCode={colorCode} />;

Card.propTypes = {
  colorCode: PropTypes.string,
};

export default Card;
