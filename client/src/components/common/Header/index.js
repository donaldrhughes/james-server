import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import "../../../app.css"
import "./header.scss";

//Components

//Contexts
import { MainContext } from '../../../contexts/MainContext';

export default class Header extends Component {
  static contextType = MainContext;
  // componentDidMount() {
  // }

  render() {
    return (
      <div className="head">
        {/* <Card>

        </Card> */}
      </div>
    );
  }
}
