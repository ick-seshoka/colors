import React from "react";

import Header from "../../component/header";
import Hero from "../../component/hero";

import { Main, Container } from "./styles";

const Home = () => (
  <Main>
    <Container>
      <Header />
      <Hero />
    </Container>
  </Main>
);

export default Home;
