import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../images/JA-Logo-sml.png";
import ResetPass from "../../components/ResetPass/index";
import "../home.css";
// import { Link } from "react-router-dom";


const sectionStyle = {
    width: "800px",
    height: "600px",
    // backgroundImage: "url(" + Background + ")"
};

class Reset extends Component {
    state = {
        text: ""
    };

    componentDidMount() {

    }

    render() {
        return (
            <section style={sectionStyle}>
                <Container>
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
                </Container>;
                </section>
        );
    }
}

export default Reset;
