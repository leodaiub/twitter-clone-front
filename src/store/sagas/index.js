import { fork } from "redux-saga/effects";
import auth from "./auth";

export default function* startForman() {
  yield fork(auth);
}
