import * as actions from "./actions/actionCreators";

export const setActiveColor = (color) => async (dispatch) => {
  dispatch(actions.setActiveColor(color));
};
