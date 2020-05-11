import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import { api } from "../../services/api";

export function* registerSaga(payload) {
  try {
    const response = yield call(api.post("users", payload.user));
    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(api.post("sessions", payload.user));
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export default function* root() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
