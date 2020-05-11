import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LoginPage from "./pages/SignIn";
import RegisterPage from "./pages/SignUp";
import Tweets from "./pages/Tweets";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/tweets" component={Tweets} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
