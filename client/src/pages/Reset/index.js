import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../../components/common/Logo";
// import "./style.css";

//Components
import ResetPass from "../../components/ResetPass/index";
import Footer from "../../components/common/Footer/Footer"

class Reset extends Component {
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
                <Col><ResetPass /></Col>
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

export default Reset;
