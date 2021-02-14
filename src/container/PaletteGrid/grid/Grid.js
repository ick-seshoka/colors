import React, { useState } from "react";

import PropTypes from "prop-types";

import { copyColorToClipboard } from "../../../helpers";

import Emoji from "../../../component/emoji";

import {
  Container,
  ColorCard,
  ColorName,
  ActiveIcon,
  ColorCode,
  EmptyIcon,
  CopyIcon,
  Wrap,
  Copied,
} from "./styles";

const Grid = ({ paletteColors, activeColor, setActiveColor }) => {
  const [gridColorCopied, setGridColorCopied] = useState(false);

  const handleColorCardClick = (color) => () => {
    color.name && setActiveColor(color);
  };
  //
  // Clean up timer with useEffect hook
  //
  const copyColorCode = () => {
    const { colorCode } = activeColor;
    copyColorToClipboard(colorCode);

    setGridColorCopied(true);

    setTimeout(() => {
      setGridColorCopied(false);
    }, 1500);
  };

  const paletteCards = paletteColors.map(({ name, colorCode }, index) => {
    const active = activeColor.colorCode === colorCode;

    return (
      <ColorCard
        key={index}
        colorCode={colorCode}
        active={active}
        onClick={handleColorCardClick({ name, colorCode })}
      >
        <ColorName>{name}</ColorName>
        {active && <ActiveIcon />}
        {!name && <EmptyIcon />}
        <Wrap>
          {active && gridColorCopied ? (
            <Copied>Copied!</Copied>
          ) : (
            <ColorCode>{name && colorCode}</ColorCode>
          )}

          {active && <CopyIcon onClick={copyColorCode} />}
        </Wrap>
      </ColorCard>
    );
  });

  return <Container>{paletteCards}</Container>;
};

Grid.propTypes = {
  paletteColors: PropTypes.array,
  activeColor: PropTypes.object,
  setActiveColor: PropTypes.func,
  colorCopied: PropTypes.bool,
};

export default Grid;
