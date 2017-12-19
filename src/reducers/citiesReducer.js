import { GET_ALL_CITIES, SET_CURRENT_CITY } from "../actions/types";

// let initialState = { allCities: [], currentCity: {} };
export const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export const currentCityReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return action.payload;
    default:
      return state;
  }
};
