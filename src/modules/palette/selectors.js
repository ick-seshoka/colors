import { createSelector } from "./reselect";

export const getActiveColor = (state) =>
  state.palette && state.palette.activeColor;

export const getPaletteColors = (state) =>
  state.palette && state.palette.colors;

export const getPaletteColorShades = createSelector(getActiveColor, (color) => {
  return color;
});
