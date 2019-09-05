import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./logout.scss";

//Components
import privateHelpers from "../../PrivateRoute/helpers/private.helper"

class Logout extends Component {
  constructor(props) {
      super(props);
      this.state = {
          expanded: null,
      };
    }
    //automatic logout
// componentDidMount(){
//   privateHelpers.logout();
//  this.props.history.push('/');
// }

  //a logout button (remove for auto log out)!
logout = () => {
    privateHelpers.logout();
    this.props.history.push('/');
}

  render() {
    return (
      <div>
       {/* a logout button (remove for auto log out)*/}
       <Button onClick={this.logout }></Button>
      </div>
    );
  }
}

export default withRouter(Logout);