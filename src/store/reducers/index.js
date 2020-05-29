import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import tweets from "./tweets";
import user from "./user";

const rootReducer = combineReducers({
  register,
  login,
  tweets,
  user,
});

export default rootReducer;
