import { LOGIN_ERROR, SIGNUP_ERROR, CLEAR_USER_ERRORS } from "../actions/types";

const errors = { login: null, signup: {} };

export const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, login: action.payload };
    case SIGNUP_ERROR:
      return { ...state, signup: action.payload };
    case CLEAR_USER_ERRORS:
      return { ...state, login: null, signup: {} };
    default:
      return state;
  }
};
