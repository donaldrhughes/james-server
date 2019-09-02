import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import "./style.css";

//Components
import ResetPass from "../../components/ResetPass/index";


class Reset extends Component {
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
                    <Col-6><div className="Header">Reset Pass</div></Col-6>
                    <Col />
                </Row>
                <Row>
                    <Col><ResetPass /></Col>
                </Row>
            </section>
        );
    }
}

export default Reset;
