import React, { Component } from "react";
// import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./lobby.css";
import axios from 'axios';
// import { Link } from 'react-router-dom';



class Lobby extends Component {
  constructor(props) {
   
      super(props);
      this.state = {
          expanded: null,
      };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  
  
    }

  render() {
    return (
      <div>
        
        <p> {this.props.tokenData.username} wants to join</p>
      </div>
    );
  }
}
export default Lobby;