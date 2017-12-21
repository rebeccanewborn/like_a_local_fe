import { combineReducers } from "redux";

// import { initialCities, currentUser } from "./initialStates";
import { currentUserReducer } from "./currentUserReducer";
import { citiesReducer, currentCityReducer } from "./citiesReducer";
import { currentExcursionReducer } from "./currentExcursionReducer";
import { errorsReducer } from "./errorsReducer";

export const reducer = combineReducers({
  currentUser: currentUserReducer,
  currentExcursion: currentExcursionReducer,
  allCities: citiesReducer,
  currentCity: currentCityReducer,
  errors: errorsReducer
});
