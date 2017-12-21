import {
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_LOGGED_IN_USER,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  CLEAR_USER_ERRORS
} from "./types.js";
import { postNewUser, postAuthSession, getAuthSession } from "../services/api";

export const signup = (data, history) => {
  return dispatch => {
    postNewUser(data).then(res => {
      if (res.error) {
        dispatch({ type: SIGNUP_ERROR, payload: res.error });
      } else {
        dispatch({ type: LOGIN_USER, payload: res });
        dispatch({ type: CLEAR_USER_ERRORS });
        history.push("/cities");
      }
    });
  };
};

export const login = (email, password, history) => {
  return dispatch => {
    postAuthSession(email, password).then(res => {
      if (res.error) {
        dispatch({ type: LOGIN_ERROR, payload: res.error });
      } else {
        dispatch({ type: LOGIN_USER, payload: res });
        dispatch({ type: CLEAR_USER_ERRORS });
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
    getAuthSession(token).then(res => {
      dispatch({ type: LOAD_LOGGED_IN_USER, payload: res });
    });
  };
};
