import { combineReducers } from "redux";

// import { initialCities, currentUser } from "./initialStates";
import { currentUserReducer } from "./currentUserReducer";

export const reducer = combineReducers({
  currentUser: currentUserReducer
});
