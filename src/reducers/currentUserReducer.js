import { LOGIN_USER, LOGOUT_USER, LOAD_LOGGED_IN_USER } from "../actions/types";

const currentUser = {};

export const currentUserReducer = (state = currentUser, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("token", action.payload.jwt);
      return action.payload.user;
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {};
    case LOAD_LOGGED_IN_USER:
      return action.payload;
    default:
      return state;
  }
};
