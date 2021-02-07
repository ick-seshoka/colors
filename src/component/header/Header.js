import React from "react";

import Navigation from "../navigation";

import { Container, Logo } from "./styles";

const Header = () => (
  <Container>
    <Logo />
    <Navigation />
  </Container>
);

export default Header;
