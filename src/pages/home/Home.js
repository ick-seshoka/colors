import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Desktop, Tablet, Mobile } from "../../styles";
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
          clickPaletteGrid={clickPaletteLink}
          clickDownload={clickDownloadLink}
        />
        <Hero />
      </Container>
      <Desktop>
        <About />
        <PaletteGrid ref={refPaletteGrid} />
        <Download ref={refDownload} />
        <Footer />
      </Desktop>
    </Main>
  );
};

Home.propTypes = {
  activeColor: PropTypes.object,
};

export default Home;
