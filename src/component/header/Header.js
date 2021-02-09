import React from "react";
import PropTypes from "prop-types";

import Navigation from "../navigation";

import { Container, Link, Logo } from "./styles";

const Header = ({ clickPaletteGrid, clickDownload }) => (
  <Container>
    <Link to="/">
      <Logo />
    </Link>
    <Navigation
      clickPaletteGrid={clickPaletteGrid}
      clickDownload={clickDownload}
    />
  </Container>
);

Header.propTypes = {
  clickPaletteGrid: PropTypes.func,
  clickDownload: PropTypes.func,
};

export default Header;
