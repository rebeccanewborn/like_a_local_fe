import { GET_ALL_CITIES } from "../actions/types";

// let initialState = { allCities: [], currentCity: {} };
export const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return action.payload;
    default:
      return state;
  }
};
