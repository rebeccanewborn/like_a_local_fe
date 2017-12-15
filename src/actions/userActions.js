import { LOGIN_USER, LOGOUT_USER, LOAD_LOGGED_IN_USER } from "./types.js";
import { postAuthSession, getAuthSession } from "../services/api";

export const login = (email, password) => {
  return dispatch => {
    postAuthSession(email, password).then(json => {
      dispatch({ type: LOGIN_USER, payload: json });
    });
  };
};

export const logout = () => {
  return { type: LOGOUT_USER };
};

export const getCurrentUser = token => {
  return dispatch => {
    getAuthSession(token).then(json =>
      dispatch({ type: LOAD_LOGGED_IN_USER, payload: json })
    );
  };
};
