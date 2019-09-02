import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
                    <Col><img src={Logo} alt="Logo"></img></Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col-6><div className="Header">Forgot Password</div></Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col><ForgotPass /></Col>
                </Row>
            </section>
        );
    }
}
