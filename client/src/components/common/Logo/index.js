import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import JA from "../../../images/JA-Logo-sml-light.png";
import "../../../app.css"
import "./logo.scss";

//Components

//Contexts
import { MainContext } from '../../../contexts/MainContext';

export default class Logo extends Component {
  static contextType = MainContext;
  // componentDidMount() {
  // }

  render() {
    return (
      <div className="logo">
     <Row>
       <Col></Col>
       <Col>
       <img src={JA} alt="Logo"></img>
       </Col>
       <Col></Col>
     </Row>
      </div>
    );
  }
}
