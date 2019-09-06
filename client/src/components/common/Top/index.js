import React, { Component } from "react";
import {
  Card,
  // Carousel 
} from "react-bootstrap";
// import dealImg from './images/product.jpg';
import "../../../app.css"
import "./header.scss";

//Components

//Contexts
import { MainContext } from '../../../contexts/MainContext';
import { Jumbotron } from "react-bootstrap";

export default class Header extends Component {
  static contextType = MainContext;
  // componentDidMount() {
  // }

  render() {
    return (
      <div className="top">
     <Card></Card>
      </div>
    );
  }
}
