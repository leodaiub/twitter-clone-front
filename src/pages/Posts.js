import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tweet from "../components/Post";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import Menu from "../components/Menu.js";
import NewTweet from "../components/NewPost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: 50,
  },
}));
export const Posts = ({
  posts,
  getPosts,
  postTweet,
  total,
  user,
  perPage,
  lastPage,
  page,
  postComment,
  comments,
  getComments,
  // sharePost,
  likePost,
  getLikes,
  // shares,
  likes,
  unlikePost,
  getUser,
}) => {
  const classes = useStyles();

  useEffect(() => {
    posts.length === 0 && getPosts();
    comments.length === 0 && getComments();
    likes.length === 0 && getLikes();
    !user.username && getUser();
    // shares.length === 0 && getShares();
  }, [
    comments.length,
    getComments,
    getLikes,
    getPosts,
    getUser,
    likes.length,
    posts.length,
    user.username,
    // shares.length,
  ]);

  return (
    <div>
      <Menu user={user} />
      <Container>
        <Grid container justify="center" className={classes.container}>
          <Grid item sm={8} xs={10}>
            <NewTweet postTweet={postTweet} />
            {posts.slice(0, perPage).map((tweet) => (
              <div key={tweet.id}>
                <Tweet
                  data={tweet}
                  postComment={postComment}
                  comments={comments.filter(
                    (comment) => comment.post_id === tweet.id
                  )}
                  likes={likes.filter((like) => like.post_id === tweet.id)}
                  likePost={likePost}
                  // sharePost={sharePost}
                  unlikePost={unlikePost}
                  // shares={shares.filter((share) => share.post_id === tweet.id)}
                  user={user}
                />
              </div>
            ))}
            <Pagination
              count={lastPage}
              page={page}
              onChange={(e, v) => getPosts(v)}
              color="secondary"
              className={classes.pagination}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

// Posts.propTypes = {
//   prop: PropTypes,
// };

const mapStateToProps = (state) => ({
  user: state.user.user,
  posts: state.posts.posts,
  comments: state.posts.comments,
  likes: state.posts.likes,
  // shares: state.posts.shares,
  total: state.posts.total,
  perPage: state.posts.perPage,
  page: state.posts.page,
  lastPage: state.posts.lastPage,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) =>
    dispatch({
      type: "REQUEST_POSTS",
      payload: page,
    }),
  getComments: (page) =>
    dispatch({
      type: "GET_COMMENT_POST",
      payload: page,
    }),
  getLikes: (page) =>
    dispatch({
      type: "GET_LIKE_POST",
      payload: page,
    }),
  // getShares: (page) =>
  //   dispatch({
  //     type: "GET_SHARE_POST",
  //     payload: page,
  //   }),
  postTweet: (content) =>
    dispatch({
      type: "POST_POST",
      payload: content,
    }),
  postComment: (content, id) =>
    dispatch({
      type: "COMMENT_POST",
      payload: { content, id },
    }),
  likePost: (id) =>
    dispatch({
      type: "LIKE_POST",
      payload: { id },
    }),
  unlikePost: (id) =>
    dispatch({
      type: "UNLIKE_POST",
      payload: { id },
    }),
  getUser: () =>
    dispatch({
      type: "REQUEST_USER",
    }),
  // sharePost: (content, id) =>
  //   dispatch({
  //     type: "SHARE_POST",
  //     payload: { content, id },
  //   }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
