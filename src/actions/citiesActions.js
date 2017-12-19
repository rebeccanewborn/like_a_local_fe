import { GET_ALL_CITIES, SET_CURRENT_CITY } from "./types";
import { fetchAllCities, showCity } from "../services/api";

export const getAllCities = () => {
  return dispatch =>
    fetchAllCities().then(res =>
      dispatch({ type: GET_ALL_CITIES, payload: res })
    );
};

export const getCity = id => {
  return dispatch =>
    showCity(id).then(res =>
      dispatch({ type: SET_CURRENT_CITY, payload: res })
    );
};
