import * as actions from "./actions/actionTypes";

import { paletteColors, paletteShades } from "../../enums/palette-colors";

const initialState = {
  activeColor: paletteColors[0],
  activeShade: paletteShades[0].shades[4],
  colors: paletteColors,
  shades: paletteShades,
};

function paletteReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ACVTIVE_COLOR: {
      const {
        payload: { color },
      } = action;

      return { ...state, activeColor: color };
    }

    case actions.SET_ACVTIVE_SHADE: {
      const {
        payload: { shade },
      } = action;

      return { ...state, activeShade: shade };
    }

    default:
      return state;
  }
}

export default paletteReducer;
