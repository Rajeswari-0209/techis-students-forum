import * as Actions from "./actions";
import initialState from "../store/initialState";

export const StudentsReducer = (state = initialState.students, action) => {
  switch (action.type) {
    case Actions.ADD_STUDENT:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.FETCH_STUDENT:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.DELETE_STUDENT:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
