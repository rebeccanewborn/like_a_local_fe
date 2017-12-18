import { SET_EXCURSION } from "../actions/types";

export const currentExcursionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EXCURSION:
      return action.payload;
    default:
      return state;
  }
};
