import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import { api } from "../../services/api";

export function* getUser({ payload }) {
  try {
    const response = yield call(api.get, "users");
    yield put({ type: types.REQUEST_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.REQUEST_USER_ERROR, error });
  }
}

export function* updateUser({ payload }) {
  try {
    const response = yield call(api.put, "users", payload);
    yield put({ type: types.UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.UPDATE_USER_ERROR, error });
  }
}

export default function* root() {
  yield takeLatest(types.REQUEST_USER, getUser);
  yield takeLatest(types.UPDATE_USER, updateUser);
}
