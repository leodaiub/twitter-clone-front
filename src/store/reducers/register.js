import * as types from "../types";

const initialState = {
  auth: {},
  registerError: false,
};

export default function (state = initialState, action) {
  let response = action.response;

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
