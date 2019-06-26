//React Router Main
//==========================================
//!Keep this page as lean as possible for fast loading...
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
//   !Note: Add components to pages directly unless absolutely needed
import { PrivateRoute } from './components/PrivateRoute/index'

//Import pages
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
// import About from "./pages/About/About";
import Splash from "./pages/Splash/splash"
import Profile from "./pages/Profile/Profile"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: ""
  
  };
  }


  render() {
    return (
      <div>
       
        <Fragment>
        
        <Router>
        {/* <Nav /> */}
          <Switch>
          <Route exact path="/" component={Home} />
            
            {/* <Route exact path="/about" component={About} /> */}
            {/* <PrivateRoute exact path="/chat" component={Chat} /> */}
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/splash" component={Splash} />
            <PrivateRoute exact path="/profile" component={Profile} />

            </Switch>
      </Router>
      </Fragment>
      </div>
    );
  }

}
