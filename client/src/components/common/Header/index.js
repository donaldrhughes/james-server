import React, { Component } from "react";
import { Card, Carousel } from "react-bootstrap";
import sl1 from './images/slide.jpg';
import sl2 from './images/slide.png';
import sl3 from './images/slide2.png';
import "../../../app.css"
import "./header.scss";

//Components

//Contexts
import { MainContext } from '../../../contexts/MainContext';
// import { Jumbotron } from "react-bootstrap";

export default class Header extends Component {
  static contextType = MainContext;
  // componentDidMount() {
  // }

  render() {
    return (
      <div className="full head">
        <Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sl1}
                alt="sl1"/>
              <Carousel.Caption>
                <div className="ctextHead">Elegance and Luxury</div>
                <div className="ctext">Gentle and Sophisticated</div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sl2}
                alt="sl2"/>
              <Carousel.Caption>
                <div className="ctextHead">Technologically Advanced</div>
                <div className="ctext">Extensive and Innovative Research</div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sl3}
                alt="sl3"/>
              <Carousel.Caption>
                <div className="ctextHead">Finest Standard of Excellence</div>
                <div className="ctext">Worldwide Reputation for Superior Quality</div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    );
  }
}
