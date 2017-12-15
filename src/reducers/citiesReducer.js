import { GET_ALL_CITIES } from "../actions/types";

export const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export const currentCityReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
