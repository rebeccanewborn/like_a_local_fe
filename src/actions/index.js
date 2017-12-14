import { postLogin } from "../services/api";
import { LOGIN_USER } from "./types.js";
export const login = (email, password) => {
  return dispatch => {
    postLogin(email, password)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: LOGIN_USER, payload: json });
      });
  };
};
