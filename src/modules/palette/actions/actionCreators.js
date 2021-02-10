import * as actions from "./actionTypes";

export function setActiveColor(color) {
  return { type: actions.SET_ACVTIVE_COLOR, payload: { color } };
}
