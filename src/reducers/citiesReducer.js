import { GET_ALL_CITIES, SELECT_CITY } from "../actions/types";

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
    case SELECT_CITY:
      return action.payload;
    default:
      return state;
  }
};
