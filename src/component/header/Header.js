import React from "react";

import Navigation from "../navigation";

import { Container, Link, Logo } from "./styles";

const Header = () => (
  <Container>
    <Link to="/">
      <Logo />
    </Link>
    <Navigation />
  </Container>
);

export default Header;
