import { combineReducers } from "redux";
import register from "./register";
import login from "./login";
import posts from "./posts";
import user from "./user";

const rootReducer = combineReducers({
  register,
  login,
  posts,
  user,
});

export default rootReducer;
