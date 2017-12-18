import { SET_EXCURSION } from "./types";
import { postNewExcursion, getExcursion } from "../services/api";

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
