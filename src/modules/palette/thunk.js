import * as actions from "./actions/actionCreators";

export const setActiveColor = (color) => async (dispatch) => {
  dispatch(actions.setActiveColor(color));
  dispatch(
    actions.setActiveShade({ id: 5, colorCode: color.colorCode, shade: 500 })
  );
};

export const setActiveShade = (shade) => async (dispatch) => {
  dispatch(actions.setActiveShade(shade));
};
