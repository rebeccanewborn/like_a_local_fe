import { NEW_EXCURSION } from "./types";
import { postNewExcursion } from "../services/api";

export const newExcursion = data => {
  return dispatch => {
    postNewExcursion(data);
  };
};
