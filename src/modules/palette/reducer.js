import * as actions from "./actions/actionTypes";

const initialState = {
  activeColor: null,
  colors: [],
  shades: [],
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
