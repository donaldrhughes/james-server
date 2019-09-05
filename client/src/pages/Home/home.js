import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import '../../app.css'
import "./home.css";


//Components
import Footer from "../../components/common/Footer/Footer"
import Login from "../../components/Login/index";
import Logo from "../../components/common/Logo";
// import Header from "../../components/common/Header";

// //Contexts
import { MainContext } from '../../contexts/MainContext';

export default class Home extends Component {
    // state = {
    //     text: ""
    // };
    static contextType = MainContext;
    render() {
        return (
            <section className="mainbg">
                    <Row>
                        <Col />
                        <Col><Logo></Logo></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col> </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Login /></Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Footer /></Col>
                        <Col />
                    </Row>
            </section>
        );
    }
}

