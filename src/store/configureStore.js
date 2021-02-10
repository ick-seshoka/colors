import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../modules/rootReducer";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

function configureStore(initialState) {
  const composeEnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhencers(applyMiddleware(immutableStateInvariantMiddleware()))
  );
}

export default configureStore;
