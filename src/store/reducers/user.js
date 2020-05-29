import * as types from "../types";

const initialState = {
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_USER:
      return { ...state, loading: true };
    case types.REQUEST_USER_ERROR:
      return { ...state, error: true };
    case types.REQUEST_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case types.UPDATE_USER:
      return { ...state, loading: true };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, tweets: [payload, ...state.tweets] };
    case types.UPDATE_USER_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
