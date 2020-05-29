import * as types from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };
    case types.LOGIN_USER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
