import { LOGIN_USER } from "../actions/types";

const currentUser = { jwt: "", user: {} };

export const currentUserReducer = (state = currentUser, action) => {
  console.log("in current user reducer", "state:", state, "action:", action);
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("token", action.payload.jwt);
      return action.payload;
    default:
      return state;
  }
};
