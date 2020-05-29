import { fork } from "redux-saga/effects";
import auth from "./auth";
import tweets from "./tweets";
import user from "./user";

export default function* startForman() {
  yield fork(auth);
  yield fork(tweets);
  yield fork(user);
}
