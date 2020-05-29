import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "./pages/SignIn";
import RegisterPage from "./pages/SignUp";
import Tweets from "./pages/Tweets";
import Profile from "./pages/Profile";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/" exact={true} component={Tweets} />
          <PrivateRoute path="/profile" exact={true} component={Profile} />
          <PrivateRoute path="/profile/edit" exact={true} component={""} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getUser: (page) =>
    dispatch({
      type: "REQUEST_USER",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
