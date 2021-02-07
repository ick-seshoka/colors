import React from "react";

import {
  TextSlider,
  TextSliderControl,
  ColorPalleteIcon,
  Title,
  Paragraph,
  ControlButton,
} from "./styles";

const Slider = () => (
  <>
    <TextSlider>
      <ColorPalleteIcon />
      <Title>Home of your material design colors</Title>
      <Paragraph>
        Create or refresh your brand, website, <br />
        logo or icons with colors
      </Paragraph>
    </TextSlider>
    <TextSliderControl>
      <ControlButton active />
      <ControlButton />
      <ControlButton />
    </TextSliderControl>
  </>
);

export default Slider;
