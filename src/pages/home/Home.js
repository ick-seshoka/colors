import React from "react";

import Header from "../../component/header";
import Hero from "../../component/hero";
import About from "../../component/about";
import PaletteGrid from "../../container/paletteGrid";
import Download from "../../container/download";

import { Main, Container } from "./styles";

const Home = () => (
  <Main>
    <Container>
      <Header />
      <Hero />
    </Container>
    <About />
    <PaletteGrid />
    <Download />
  </Main>
);

export default Home;
