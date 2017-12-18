import { GET_ALL_CITIES, SELECT_CITY } from "../actions/types";

let initialState = { allCities: [], currentCity: {} };
export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return { ...state, allCities: action.payload };
    case SELECT_CITY:
      return { ...state, currentCity: action.payload };
    default:
      return state;
  }
};
