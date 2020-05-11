import * as types from "../types";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};
