import { SET_EXCURSION, GET_ALL_CITIES } from "./types";
import {
  postNewExcursion,
  getExcursion,
  destroyExcursion,
  postUserExcursion
} from "../services/api";

export const newExcursion = (data, history) => {
  return dispatch => {
    postNewExcursion(data).then(res => {
      dispatch({ type: SET_EXCURSION, payload: res });
      history.push(`/excursions/${res.id}`);
    });
  };
};

export const setCurrentExcursion = id => {
  return dispatch => {
    getExcursion(id).then(res => {
      dispatch({ type: SET_EXCURSION, payload: res });
    });
  };
};

export const deleteExcursion = (id, history) => {
  return dispatch => {
    destroyExcursion(id).then(res => {
      dispatch({ type: GET_ALL_CITIES, payload: res });
      history.push("/cities");
    });
  };
};
export const excursionSignup = (id, userId) => {
  return dispatch => {
    postUserExcursion(id, userId).then(res => {
      dispatch({ type: SET_EXCURSION, payload: res });
    });
  };
};
