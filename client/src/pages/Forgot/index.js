import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../components/common/Logo";
import '../../app.css';
// import "./style.css";

//Components
import ForgotPass from "../../components/ForgotPass/index";
import Footer from "../../components/common/Footer/Footer"

export default class Register extends Component {
    // state = {
    //     text: ""
    // };

    render() {
        return (
            <section className="mainbg">
                <Row>
                    <Col />
                    <Col><Logo></Logo></Col>
                    <Col />
                </Row>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><ForgotPass /></Col>
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
