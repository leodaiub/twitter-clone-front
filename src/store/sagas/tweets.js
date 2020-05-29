import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import { api } from "../../services/api";

export function* getTweets({ payload }) {
  try {
    const response = yield call(api.get, "tweets", {
      params: {
        page: payload,
      },
    });
    yield put({ type: types.REQUEST_TWEETS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.REQUEST_TWEETS_ERROR, error });
  }
}

export function* getUserTweets({ payload }) {
  try {
    const response = yield call(api.get, `tweets/${payload.id}`);
    yield put({
      type: types.REQUEST_USER_TWEETS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: types.REQUEST_USER_TWEETS_ERROR, error });
  }
}

export function* postTweet({ payload }) {
  try {
    const response = yield call(api.post, "tweets", { content: payload });
    yield put({ type: types.POST_TWEET_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.POST_TWEET_ERROR, error });
  }
}

export default function* root() {
  yield takeLatest(types.REQUEST_TWEETS, getTweets);
  yield takeLatest(types.REQUEST_USER_TWEETS, getUserTweets);
  yield takeLatest(types.POST_TWEET, postTweet);
}
