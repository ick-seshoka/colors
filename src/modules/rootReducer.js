import { combineReducers } from "redux";

import paletteReducer from "./palette/reducer";

const rootReducer = combineReducers({ palette: paletteReducer });

export default rootReducer;
