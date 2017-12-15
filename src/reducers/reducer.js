import { combineReducers } from "redux";

// import { initialCities, currentUser } from "./initialStates";
import { currentUserReducer } from "./currentUserReducer";
import { citiesReducer, currentCityReducer } from "./citiesReducer";

export const reducer = combineReducers({
  currentUser: currentUserReducer,
  cities: citiesReducer,
  currentCity: currentCityReducer
});
