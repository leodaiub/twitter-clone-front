import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, Divider, Link } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Menu from "../components/Menu.js";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
}));

export const Profile = ({ user }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);

  // const onHandleRegistration = (event) => {
  //   event.preventDefault();

  //   let username = event.target.username.value;
  //   let email = event.target.email.value;
  //   let password = event.target.password.value;

  //   const data = {
  //     username,
  //     email,
  //     password,
  //   };

  //   props.dispatch(registerUserAction(data));
  // };

  // if (props.success) return <Redirect to="login" />;

  return (
    <div>
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
          <form
            className={classes.form}
            noValidate
            //onSubmit={onHandleRegistration}
          >
            <Grid item xs={12} container justify="center">
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
              />
              <label htmlFor="contained-button-file">
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
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
            </Grid>
            <Button
              onClick={editing ? null : () => setEditing(true)}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {!editing ? "EDIT" : "SAVE"}
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
  updateUser: () =>
    dispatch({
      type: "UPDATE_USER",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
