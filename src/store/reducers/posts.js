import * as types from "../types";

const initialState = {
  posts: [],
  total: 42,
  comments: [],
  likes: [],
  // shares: [],
  perPage: 20,
  page: 1,
  lastPage: 3,
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_POSTS:
      return { ...state, loading: true };
    case types.REQUEST_POSTS_ERROR:
      return { ...state, error: true };
    case types.REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        perPage: payload.perPage,
      };
    case types.REQUEST_USER_POSTS:
      return { ...state, loading: true };
    case types.REQUEST_USER_POSTS_ERROR:
      return { ...state, error: true };
    case types.REQUEST_USER_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        perPage: payload.perPage,
      };
    case types.POST_POST:
      return { ...state, loading: true };
    case types.POST_POST_SUCCESS:
      return { ...state, posts: [payload[0], ...state.posts] };
    case types.POST_POST_ERROR:
      return { ...state, error: true };
    case types.COMMENT_POST:
      return { ...state, loading: true };
    case types.COMMENT_POST_SUCCESS:
      return { ...state, comments: [payload, ...state.comments] };
    case types.COMMENT_POST_ERROR:
      return { ...state, error: true };
    case types.GET_COMMENT_POST:
      return { ...state, loading: true };
    case types.GET_COMMENT_POST_SUCCESS:
      return { ...state, comments: payload };
    case types.GET_COMMENT_POST_ERROR:
      return { ...state, error: true };
    case types.LIKE_POST:
      return { ...state, loading: true };
    case types.LIKE_POST_SUCCESS:
      return { ...state, likes: [payload, ...state.likes] };
    case types.LIKE_POST_ERROR:
      return { ...state, error: true };
    case types.UNLIKE_POST:
      return { ...state, loading: true };
    case types.UNLIKE_POST_SUCCESS:
      return {
        ...state,
        likes: state.likes.filter((like) => like.id !== payload.id),
      };
    case types.UNLIKE_POST_ERROR:
      return { ...state, error: true };
    case types.GET_LIKE_POST:
      return { ...state, loading: true };
    case types.GET_LIKE_POST_SUCCESS:
      return { ...state, likes: payload };
    case types.GET_LIKE_POST_ERROR:
      return { ...state, error: true };
    // case types.SHARE_POST:
    //   return { ...state, loading: true };
    // case types.SHARE_POST_SUCCESS:
    //   return { ...state, shares: [payload, ...state.shares] };
    // case types.SHARE_POST_ERROR:
    //   return { ...state, error: true };
    // case types.GET_SHARE_POST:
    //   return { ...state, loading: true };
    // case types.GET_SHARE_POST_SUCCESS:
    //   return { ...state, shares: payload };
    // case types.GET_SHARE_POST_ERROR:
    //   return { ...state, error: true };
    default:
      return state;
  }
};
