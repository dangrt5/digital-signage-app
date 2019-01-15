import types from "../actions/types";
const DEFAULT_STATE = {
  results: [],
  single: {}
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.GET_LOCATIONS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
}
