import React, { Component } from "react";
import { Card } from "react-bootstrap";
import '../../app.css'
import "./deals.css";
// import axios from 'axios';
// import { Link } from 'react-router-dom';

//Components
import Loader from '../Loader/Loader';

class Deals extends Component {
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
          <div className=""> Our Special Deals</div>
          <div className="tophead">Finest Standard of Excellence</div>
          <div className="toptext">Worldwide Reputation for Superior Quality</div>
          <div className="tophead">Technologically Advanced</div>
          <div className="toptext">Extensive and Innovative Research</div>
          <div className="tophead">Elegance and Luxury</div>
          <div className="toptext">Gentle and Sophisticated</div>
        </Card>
      </div>
    );
  }
}

export default Deals;