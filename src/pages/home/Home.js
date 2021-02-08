import React from "react";

import Header from "../../component/header";
import Hero from "../../component/hero";
import About from "../../component/about";
import PaletteGrid from "../../container/PaletteGrid";

import { Main, Container } from "./styles";

const Home = () => (
  <Main>
    <Container>
      <Header />
      <Hero />
    </Container>
    <About />
    <PaletteGrid />
  </Main>
);

export default Home;
