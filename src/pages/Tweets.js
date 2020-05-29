import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tweet from "../components/Tweet";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, Divider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import Menu from "../components/Menu.js";
import NewTweet from "../components/NewTweet";

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
export const Tweets = ({
  tweets,
  getTweets,
  postTweet,
  total,
  user,
  perPage,
  lastPage,
  page,
}) => {
  const classes = useStyles();

  useEffect(() => {
    tweets.length === 0 && getTweets();
  }, [getTweets, tweets]);

  return (
    <div>
      <Menu user={user} />
      <Container>
        <Grid container justify="center" className={classes.container}>
          <Grid item sm={8} xs={10}>
            <NewTweet postTweet={postTweet} />
            {tweets.slice(0, perPage).map((tweet) => (
              <div>
                <Tweet data={tweet} />
                <Divider />
              </div>
            ))}
            <Pagination
              count={lastPage}
              page={page}
              onChange={(e, v) => getTweets(v)}
              color="secondary"
              className={classes.pagination}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Tweets.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  tweets: state.tweets.tweets,
  total: state.tweets.total,
  perPage: state.tweets.perPage,
  page: state.tweets.page,
  lastPage: state.tweets.lastPage,
});

const mapDispatchToProps = (dispatch) => ({
  getTweets: (page) =>
    dispatch({
      type: "REQUEST_TWEETS",
      payload: page,
    }),
  postTweet: (content) =>
    dispatch({
      type: "POST_TWEET",
      payload: content,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
