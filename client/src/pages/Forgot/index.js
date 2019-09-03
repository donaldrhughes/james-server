import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import '../../app.css';
import "./style.css";

//Components
import ForgotPass from "../../components/ForgotPass/index";


export default class Register extends Component {
    // state = {
    //     text: ""
    // };

    // componentDidMount() {
    // }

    render() {
        return (
            <section className="sectionStyle">
                <Row>
                    <Col />
                    <Col><Card><img src={Logo} alt="Logo"></img></Card></Col>
                    <Col />
                </Row>
                {/* <Row>
                    <Col />
                    <Col-6></Col-6>
                    <Col />
                </Row> */}
                <Row>
                    <Col></Col>
                    <Col><ForgotPass /></Col>
                    <Col></Col>
                </Row>
            </section>
        );
    }
}
