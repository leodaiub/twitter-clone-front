import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { registerUserAction } from "../store/actions";

export const SignUp = (props) => {
  const onHandleRegistration = (event) => {
    event.preventDefault();

    let username = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      username,
      email,
      password,
    };

    props.dispatch(registerUserAction(data));
  };
  let message, isSuccess;

  if (props.response.register.hasOwnProperty("response")) {
    isSuccess = props.response.register.response.success;
    message = props.response.register.response.message;
  }
  return (
    <div>
      <h3>RegisterPage</h3>
      {!isSuccess ? <div>{message}</div> : <Redirect to="login" />}
      <form onSubmit={onHandleRegistration}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
      Already have account? <Link to="login">Login here</Link>
    </div>
  );
};

SignUp.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(SignUp);
