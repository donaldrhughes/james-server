import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./lobby.css";
// import axios from 'axios';
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
        <Container>
          <p> Welcome, {this.props.tokenData.username}.</p>
        </Container>
        
      </div>
    );
  }
}
export default Lobby;