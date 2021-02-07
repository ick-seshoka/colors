import React from "react";
import { Nav, List, ListItem, ListItemLink } from "./styles";

const Navigation = () => (
  <Nav>
    <List>
      <ListItem>
        <ListItemLink to="/">Pallete</ListItemLink>
      </ListItem>
      <ListItem to="/">
        <ListItemLink>Download</ListItemLink>
      </ListItem>
    </List>
  </Nav>
);

export default Navigation;
