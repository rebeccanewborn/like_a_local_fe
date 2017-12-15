import {
  LOGIN_USER,
  LOGIN_ERROR,
  LOGOUT_USER,
  LOAD_LOGGED_IN_USER
} from "./types.js";
import { postAuthSession, getAuthSession } from "../services/api";

export const login = (email, password, history) => {
  return dispatch => {
    postAuthSession(email, password).then(json => {
      if (json.error) {
        dispatch({ type: LOGIN_ERROR });
      } else {
        dispatch({ type: LOGIN_USER, payload: json });
        history.push("/cities");
      }
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
