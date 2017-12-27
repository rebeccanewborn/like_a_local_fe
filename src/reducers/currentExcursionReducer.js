import { SET_EXCURSION, CLEAR_CURRENT_EXCURSION } from "../actions/types";

export const currentExcursionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EXCURSION:
      return action.payload;
    case CLEAR_CURRENT_EXCURSION:
      return {};
    default:
      return state;
  }
};
