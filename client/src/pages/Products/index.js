import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
// import img from "../../images/JA-Logo-sml.png";
import '../../app.css'
import "./products.css";


//Components
// import Footer from "../../components/common/Footer/Footer"
import Store from "../../components/Store";
import Nav from '../../components/common/Nav'

// //Contexts
import { MainContext } from '../../contexts/MainContext';

export default class Home extends Component {
    // state = {
    //     text: ""
    // };
    static contextType = MainContext;
    render() {
        return (
            <section className="productsbg">
                <Row>
                    <Col />
                    <Col><Card><div className="head">Finest Standard of Excellence</div></Card></Col>
                    <Col><Nav /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Store /></Col>
                    <Col />
                </Row>
            </section>
        );
    }
}

