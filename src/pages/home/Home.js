import React, { useRef } from "react";
import PropTypes from "prop-types";

import Header from "../../component/header";
import Hero from "../../component/hero";
import About from "../../container/about";
import PaletteGrid from "../../container/paletteGrid";
import Download from "../../container/download";
import Footer from "../../component/footer";

import { Main, Container } from "./styles";

const Home = ({ activeColor: { colorCode } }) => {
  const refPaletteGrid = useRef(null);
  const refDownload = useRef(null);

  const clickPaletteLink = () => {
    refPaletteGrid.current.scrollIntoView({ behavior: "smooth" });
  };

  const clickDownloadLink = () => {
    refDownload.current.scrollIntoView({ behavior: "smooth" });
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

Home.propTypes = {
  activeColor: PropTypes.object,
};

export default Home;
