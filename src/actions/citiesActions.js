import { GET_ALL_CITIES } from "./types";
import { fetchAllCities } from "../services/api";

export const getAllCities = () => {
  return dispatch =>
    fetchAllCities().then(json =>
      dispatch({ type: GET_ALL_CITIES, payload: json })
    );
};
