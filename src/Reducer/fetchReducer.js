import { FETCHED_ERROR, FETCHED_REQUEST, FETCHED_SUCCESS } from "../Action/Constant";

let initalState = {
  loading: false,
  data: [],
  error: "",
};
export function fetchReducer(state = initalState, action) {
  if (action.type == FETCHED_REQUEST) {
    return { ...state, loading: true };
  }
  else if (action.type == FETCHED_SUCCESS) {
    return { ...state, data: action.payload, loading: false };
  }
  else if (action.type == FETCHED_ERROR) {
    return { ...state, error: action.payload, loading: false };
  }
  else {
    return state;
  }
}
