import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import BirthDateReducer from "./reducers/BirthDayReducer";
import AuthReducer from "./reducers/AuthReducer";
const rootReducer = combineReducers({
  birthdate: BirthDateReducer,
  auth: AuthReducer,
});
const Store = createStore(rootReducer, applyMiddleware(...[thunk]));
export default Store;
