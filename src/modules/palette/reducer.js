import * as actions from "./actions/actionTypes";

import { paletteColors, paletteShades } from "../../enums/palette-colors";

const initialState = {
  activeColor: paletteColors[0],
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

    default:
      return state;
  }
}

export default paletteReducer;
