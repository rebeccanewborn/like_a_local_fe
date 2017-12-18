import { GET_ALL_CITIES, SELECT_CITY } from "./types";
import { fetchAllCities, getCity } from "../services/api";

export const getAllCities = () => {
  return dispatch =>
    fetchAllCities().then(json =>
      dispatch({ type: GET_ALL_CITIES, payload: json })
    );
};

export const selectCity = id => {
  console.log("city action", id);
  return dispatch => {
    getCity(id).then(res => {
      dispatch({ type: SELECT_CITY, payload: res });
    });
  };
};
