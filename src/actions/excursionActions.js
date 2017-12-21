import {
  SET_EXCURSION,
  GET_ALL_CITIES,
  EXCURSION_SIGNUP_ERROR,
  CLEAR_EXCURSION_ERRORS
} from "./types";
import {
  postNewExcursion,
  getExcursion,
  destroyExcursion,
  postUserExcursion,
  postExcursionOccurrence,
  destroyExcursionOccurrence
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

export const excursionSignup = (excursionOccurrenceId, userId) => {
  return dispatch => {
    postUserExcursion(excursionOccurrenceId, userId).then(res => {
      if (res.error) {
        dispatch({
          type: EXCURSION_SIGNUP_ERROR,
          payload: res.error.excursion_occurrence[0]
        });
      } else {
        dispatch({ type: SET_EXCURSION, payload: res });
      }
    });
  };
};

export const newExcursionOccurrence = data => {
  return dispatch => {
    postExcursionOccurrence(data).then(res => {
      dispatch({ type: SET_EXCURSION, payload: res });
    });
  };
};

export const deleteExcursionOccurrence = id => {
  return dispatch => {
    destroyExcursionOccurrence(id).then(res => {
      dispatch({ type: SET_EXCURSION, payload: res });
    });
  };
};
