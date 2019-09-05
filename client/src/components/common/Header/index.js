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
                alt="sl1"
              />
              <Carousel.Caption>
                <h3>Extensive and Innovative Research</h3>
                <p>Gentle and Sophisticated</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

              <img
                className="d-block w-100"
                src={sl2}
                alt="sl2"
              />

              <Carousel.Caption>
                <h3>Technologically Advanced</h3>
                <p>Elegance, Luxury and Superior Quality</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={sl3}
                alt="sl3"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>Finest Standard of Excellence</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    );
  }
}
