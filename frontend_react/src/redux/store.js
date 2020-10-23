import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducer/login.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
 
});

const middleWare = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleWare));
