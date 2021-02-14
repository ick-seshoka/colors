import React from "react";
import PropTypes from "prop-types";

import { Nav, List, ListItem, ListItemLink } from "./styles";

const Navigation = ({ clickPaletteGrid, clickDownload }) => (
  <Nav>
    <List>
      <ListItem>
        <ListItemLink onClick={clickPaletteGrid}>Palette</ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink onClick={clickDownload}>Download</ListItemLink>
      </ListItem>
    </List>
  </Nav>
);

Navigation.prototypes = {
  clickPaletteGrid: PropTypes.func,
  clickDownload: PropTypes.func,
};

export default Navigation;
