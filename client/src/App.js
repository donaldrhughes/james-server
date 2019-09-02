//James Albert Cosmetics - React Router Main
//All Rights Reserved. Copyright 2019 - James Albert
//=====================================================

//!Keep this page as lean as possible
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
//   !Note: Add components to pages directly unless absolutely needed
import { PrivateRoute } from './components/PrivateRoute/index'

//Import pages
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Splash from "./pages/Splash/Splash"
import Profile from "./pages/Profile/Profile"
// import About from "./pages/About/About";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
        <Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/about" component={About} /> */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/reset" component={Reset} />
              <PrivateRoute exact path="/splash" component={Splash} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </Fragment>
    );
  }
}
