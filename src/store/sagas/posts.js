import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import * as types from "../types";
import { api } from "../../services/api";

export function* getPosts({ payload }) {
  try {
    const response = yield call(api.get, "posts", {
      params: {
        page: payload,
      },
    });
    yield put({ type: types.REQUEST_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.REQUEST_POSTS_ERROR, error });
  }
}

export function* getUserPosts({ payload }) {
  try {
    const response = yield call(api.get, `posts/${payload.id}`);
    yield put({
      type: types.REQUEST_USER_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: types.REQUEST_USER_POSTS_ERROR, error });
  }
}

export function* postPost({ payload }) {
  try {
    const response = yield call(api.post, "posts", { content: payload });
    yield put({ type: types.POST_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.POST_POST_ERROR, error });
  }
}

export function* likePost({ payload }) {
  try {
    const response = yield call(api.post, "likes", { post_id: payload.id });
    yield put({ type: types.LIKE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.LIKE_POST_ERROR, error });
  }
}

export function* sharePost({ payload }) {
  try {
    const response = yield call(api.post, "shares", {
      content: payload.content,
      post_id: payload.id,
    });
    yield put({ type: types.SHARE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.SHARE_POST_ERROR, error });
  }
}

export function* commentPost({ payload }) {
  try {
    const response = yield call(api.post, "comments", {
      content: payload.content,
      id: payload.id,
    });
    yield put({ type: types.COMMENT_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.COMMENT_POST_ERROR, error });
  }
}

export function* getCommentPost() {
  try {
    const response = yield call(api.get, "comments");
    yield put({ type: types.GET_COMMENT_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.GET_COMMENT_POST_ERROR, error });
  }
}

export function* getLikePost() {
  try {
    const response = yield call(api.get, "likes");
    yield put({ type: types.GET_LIKE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.GET_LIKE_POST_ERROR, error });
  }
}

export function* getSharePost() {
  try {
    const response = yield call(api.get, "shares");
    yield put({ type: types.GET_SHARE_POST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.GET_SHARE_POST_ERROR, error });
  }
}

export default function* root() {
  yield takeLatest(types.REQUEST_POSTS, getPosts);
  yield takeLatest(types.REQUEST_USER_POSTS, getUserPosts);
  yield takeLatest(types.POST_POST, postPost);
  yield takeLatest(types.LIKE_POST, likePost);
  yield takeEvery(types.SHARE_POST, sharePost);
  yield takeLatest(types.COMMENT_POST, commentPost);
  yield takeLatest(types.GET_COMMENT_POST, getCommentPost);
  yield takeLatest(types.GET_SHARE_POST, getSharePost);
  yield takeLatest(types.GET_LIKE_POST, getLikePost);
}
