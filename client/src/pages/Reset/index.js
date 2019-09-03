import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
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
                    <Col><ResetPass /></Col>
                    <Col></Col>
                </Row>
            </section>
        );
    }
}

export default Reset;
