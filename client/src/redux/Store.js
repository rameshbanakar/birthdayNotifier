import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import BirthDateReducer from "./reducers/BirthDayReducer";
const rootReducer = combineReducers({ birthdate: BirthDateReducer});
const Store = createStore(rootReducer, applyMiddleware(...[thunk]));
export default Store