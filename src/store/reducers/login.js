import * as types from "../types";

const initialState = {
  auth: {},
  loginError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, auth: action.response };
    case types.LOGIN_USER_ERROR:
      return { ...state, loginError: true };
    default:
      return state;
  }
}
