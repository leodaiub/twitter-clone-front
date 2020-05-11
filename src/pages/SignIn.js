import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { loginUserAction } from "../store/actions";
import { setCookie } from "../utils/cookies";

export const SignIn = (props) => {
  const onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password,
    };

    props.dispatch(loginUserAction(data));
  };

  let isSuccess, message;

  if (props.response.login.hasOwnProperty("response")) {
    isSuccess = props.response.login.response.success;
    message = props.response.login.response.message;

    if (isSuccess) {
      setCookie("token", props.response.login.response.token, 1);
    }
  }
  return (
    <div>
      <h3>Login Page</h3>
      {!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}
      <form onSubmit={onHandleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
      Don't have account? <Link to="register">Register here</Link>
    </div>
  );
};

SignIn.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (response) => ({ response });

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(SignIn);
