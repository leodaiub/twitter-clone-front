import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    margin: "10px 0 10px 0",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing(1),
  },
}));

const NewTweet = (props) => {
  const classes = useStyles();

  const handlePostTweet = (e) => {
    e.preventDefault();
    props.postTweet(e.target.content.value);
    e.target.content.value = "";
  };

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate onSubmit={handlePostTweet}>
        <TextField
          rows={3}
          multiline
          name="content"
          id="content"
          variant="outlined"
          required
          fullWidth
          autoFocus
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Post Tweet
        </Button>
      </form>
    </Paper>
  );
};

NewTweet.propTypes = {};

export default NewTweet;
