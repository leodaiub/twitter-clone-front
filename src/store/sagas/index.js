import { fork } from "redux-saga/effects";
import auth from "./auth";
import posts from "./posts";
import user from "./user";

export default function* startForman() {
  yield fork(auth);
  yield fork(posts);
  yield fork(user);
}
