import { combineReducers } from "redux";
import locationsReducer from "./locations_reducer";

const rootReducers = combineReducers({
  list: locationsReducer
});

export default rootReducers;
