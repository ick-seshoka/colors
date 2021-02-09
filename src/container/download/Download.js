import React from "react";

import {
  BackgroundWrap,
  Container,
  ContentWrap,
  Paragraph,
  Title,
  DownloadButtons,
  ButtonWrap,
  SketchButton,
  SketchIcon,
  PhotoshopIcon,
  PhotoshopButton,
  CountWrap,
  Count,
  DownloadIcon,
} from "./styles";

const Download = () => (
  <BackgroundWrap>
    <Container>
      <ContentWrap>
        <Title>Intergrate beautiful colors in your design work.</Title>
        <Paragraph>
          Working in sketch or photoshop ? Colors palette is available for
          download in both sketch and photoshop format.
        </Paragraph>
      </ContentWrap>
      <DownloadButtons>
        <ButtonWrap>
          <SketchButton>
            <SketchIcon /> Sketch Palette
          </SketchButton>
          <CountWrap>
            <DownloadIcon />
            <Count>3,987</Count>
          </CountWrap>
        </ButtonWrap>
        <ButtonWrap>
          <PhotoshopButton>
            <PhotoshopIcon />
            Photoshop Palette
          </PhotoshopButton>
          <CountWrap>
            <DownloadIcon />
            <Count>2,345</Count>
          </CountWrap>
        </ButtonWrap>
      </DownloadButtons>
    </Container>
  </BackgroundWrap>
);

export default Download;