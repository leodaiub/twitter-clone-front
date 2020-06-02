import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import { api } from "../../services/api";
import store from "store";

export function* registerSaga(payload) {
  try {
    const response = yield call(api.post, "users", payload.user);
    yield put({ type: types.REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, payload: error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(api.post, "sessions", payload.user);
    store.set("token", response.data.token.token);
    yield put({ type: types.LOGIN_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, payload: error });
  }
}

export function* logoutSaga() {
  try {
    store.remove("token");
    yield put((window.location.href = "/login"));
  } catch (error) {
    yield put(console.log(error));
  }
}

export default function* root() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
}
