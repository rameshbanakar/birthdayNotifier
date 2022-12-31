import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import BirthDateReducer from "./reducers/BirthDayReducer";
import AuthReducer from "./reducers/AuthReducer";
import AlertReducer from "./reducers/alertReducer";
import BirthReducers from "./reducers/BirthReducer";
import loadReducer from "./reducers/loadReducer"
const rootReducer = combineReducers({
  birthdate: BirthDateReducer,
  auth: AuthReducer,
  alert:AlertReducer,
  birthdays:BirthReducers,
  loader:loadReducer
});
const Store = createStore(rootReducer, applyMiddleware(...[thunk]));
export default Store;
