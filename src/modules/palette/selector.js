import { createSelector } from "reselect";

export const getActiveColor = (state) =>
  state.palette && state.palette.activeColor;

export const getPaletteColors = (state) =>
  state.palette && state.palette.colors;

const getPaletteShades = (state) => state.palette && state.palette.shades;

export const getActiveColorShades = createSelector(
  getActiveColor,
  getPaletteShades,
  (color, shades) => {
    return (
      shades.filter(({ colorCode }) => colorCode === color.colorCode)[0]
        .shades || []
    );
  }
);
