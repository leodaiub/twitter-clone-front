import * as types from "../types";

const initialState = {
  loading: false,
  error: "",
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_USER:
      return { ...state, loading: true };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case types.REGISTER_USER_ERROR:
      return { ...state, error: action.payload.data.error, loading: false };
    default:
      return state;
  }
}
