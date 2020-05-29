import * as types from "../types";

const initialState = {
  tweets: [],
  total: 42,
  perPage: 20,
  page: 1,
  lastPage: 3,
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_TWEETS:
      return { ...state, loading: true };
    case types.REQUEST_TWEETS_ERROR:
      return { ...state, error: true };
    case types.REQUEST_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        perPage: payload.perPage,
      };
    case types.REQUEST_USER_TWEETS:
      return { ...state, loading: true };
    case types.REQUEST_USER_TWEETS_ERROR:
      return { ...state, error: true };
    case types.REQUEST_USER_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        perPage: payload.perPage,
      };
    case types.POST_TWEET:
      return { ...state, loading: true };
    case types.POST_TWEET_SUCCESS:
      return { ...state, tweets: [payload, ...state.tweets] };
    case types.POST_TWEET_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
