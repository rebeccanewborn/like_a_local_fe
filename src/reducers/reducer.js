import { combineReducers } from "redux";

// import { initialCities, currentUser } from "./initialStates";
import { currentUserReducer } from "./currentUserReducer";
import { citiesReducer } from "./citiesReducer";
import { currentExcursionReducer } from "./currentExcursionReducer";

export const reducer = combineReducers({
  currentUser: currentUserReducer,
  currentExcursion: currentExcursionReducer,
  cities: citiesReducer
});
