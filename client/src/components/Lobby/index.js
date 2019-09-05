import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import '../../app.css'
import "./lobby.css";
// import axios from 'axios';
// import { Link } from 'react-router-dom';

//Components
import Loader from '../Loader/Loader';

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
    if (this.state.loading) return <Loader />;
    return (
      <div>
        <Card>
          <div className=""> James Albert Cosmetics - Try our products.</div>
        </Card>
      </div>
    );
  }
}
export default Lobby;