import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, FormLabel, Avatar } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Menu from "../components/Menu.js";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  avatar: {
    height: 150,
    width: 150,
  },
}));

export const Profile = ({ user, getUser, updateUser }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");

  useEffect(() => {
    !user.username && getUser();
    setUsername(user.username);
  }, [user.username, getUser]);

  const handleUpdate = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let profile_img = event.target.profile_img?.files[0];
    const data = new FormData();
    data.append("profile_img", profile_img);
    data.append("id", user.id);
    data.append("username", username);

    updateUser(data);
  };

  return (
    <div className={classes.root}>
      <Menu user={user} />
      <Container component="main" maxWidth="sm">
        <Paper
          className={classes.paper}
          component={Grid}
          container
          justify="center"
        >
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleUpdate}>
            <Grid item xs={12} container justify="center">
              {!user.profile_img ? (
                <div>
                  {" "}
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    name="profile_img"
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <FormLabel> Profile Picture:</FormLabel>
                    <Button
                      size="large"
                      raised
                      component="span"
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload
                    </Button>
                  </label>
                </div>
              ) : (
                <Avatar
                  src={user.profile_img}
                  className={classes.avatar}
                ></Avatar>
              )}
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <FormLabel>Username:</FormLabel>
                <TextField
                  value={username}
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <FormLabel>Email:</FormLabel>
                <TextField
                  value={user.email}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  disabled
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              EDIT
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

Profile.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () =>
    dispatch({
      type: "REQUEST_USER",
    }),
  updateUser: (payload) =>
    dispatch({
      type: "UPDATE_USER",
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
