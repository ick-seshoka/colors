import React, { useRef } from "react";

import Header from "../../component/header";
import Hero from "../../component/hero";
import About from "../../component/about";
import PaletteGrid from "../../container/paletteGrid";
import Download from "../../container/download";
import Footer from "../../component/footer";

import { Main, Container } from "./styles";

const Home = () => {
  const refPaletteGrid = useRef(null);
  const refDownload = useRef(null);

  const clickPaletteLink = () => {
    refPaletteGrid.current.scrollIntoView();
  };

  const clickDownloadLink = () => {
    refDownload.current.scrollIntoView();
  };

  return (
    <Main>
      <Container>
        <Header
          clickPalleteGrid={clickPaletteLink}
          clickDownload={clickDownloadLink}
        />
        <Hero />
      </Container>
      <About />
      <PaletteGrid ref={refPaletteGrid} />
      <Download ref={refDownload} />
      <Footer />
    </Main>
  );
};

export default Home;
