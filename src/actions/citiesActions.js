import { GET_ALL_CITIES, SELECT_CITY } from "./types";
import { fetchAllCities } from "../services/api";

export const getAllCities = () => {
  return dispatch =>
    fetchAllCities().then(json =>
      dispatch({ type: GET_ALL_CITIES, payload: json })
    );
};

export const selectCity = cityObj => {
  return { type: SELECT_CITY, payload: cityObj };
};
